import { notFound } from 'next/navigation';
import { insightsData } from '@/lib/insightsData';
import { isCategorySlug, CATEGORY_SLUGS, CATEGORY_META } from '@/lib/categoryRegistry';
import CategoryPage from '@/components/pages/CategoryPage';
import Image from 'next/image';
import Link from 'next/link';
import { NextProtocolBridge } from '@/components/sections/NextProtocolBridge';
import { ArticleFAQ } from '@/components/sections/ArticleFAQ';
import { ReadingProgress } from '@/components/ui/ReadingProgress';
import { ShareButton } from '@/components/ui/ShareButton';
import { ContextualLinker } from '@/components/ui/ContextualLinker';

const SITE_URL = 'https://aivelocity.dev';

// Generate dynamic metadata for SEO/AEO
export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Category page metadata
    if (isCategorySlug(slug)) {
        const meta = CATEGORY_META[slug];
        const categoryName = CATEGORY_SLUGS[slug];
        const categoryUrl = `${SITE_URL}/news-insights/${slug}`;

        const ogImage = `${SITE_URL}/og?title=${encodeURIComponent(categoryName)}&subtitle=News%20%26%20Insights`;

        return {
            title: meta.title,
            description: meta.description,
            alternates: { canonical: categoryUrl },
            openGraph: {
                title: meta.title,
                description: meta.description,
                url: categoryUrl,
                type: 'website',
                siteName: 'AI Velocity',
                images: [{ url: ogImage, width: 1200, height: 630, alt: `${categoryName}, AI Velocity` }],
            },
            twitter: {
                card: 'summary_large_image',
                title: meta.title,
                description: meta.description,
                images: [ogImage],
            },
        };
    }

    // Article metadata
    const article = insightsData.find(post => post.slug === slug);

    if (!article) return { title: 'Not Found | AI Velocity' };

    const articleUrl = `${SITE_URL}/news-insights/${article.slug}`;
    const imageUrl = `${SITE_URL}/og?title=${encodeURIComponent(article.title)}&subtitle=News%20%26%20Insights`;

    return {
        title: `${article.title} | AI Velocity`,
        description: article.excerpt,
        alternates: {
            canonical: articleUrl,
        },
        openGraph: {
            title: article.title,
            description: article.excerpt,
            url: articleUrl,
            type: 'article',
            publishedTime: article.date,
            modifiedTime: article.dateModified || article.date,
            authors: [article.author],
            tags: [article.category],
            images: [
                {
                    url: imageUrl,
                    width: 1200,
                    height: 630,
                    alt: article.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: article.title,
            description: article.excerpt,
            images: [imageUrl],
        },
    };
}

// Pre-render all article slugs AND category slugs at build time
export async function generateStaticParams() {
    const articleParams = insightsData.map(post => ({ slug: post.slug }));
    const categoryParams = Object.keys(CATEGORY_SLUGS).map(slug => ({ slug }));
    return [...articleParams, ...categoryParams];
}

export default async function ArticlePage({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // If slug matches a known category, render the category page
    if (isCategorySlug(slug)) {
        return <CategoryPage categorySlug={slug} />;
    }

    const article = insightsData.find(post => post.slug === slug);

    if (!article) return notFound();

    // Calculate word count from content
    const wordCount = article.content.trim().split(/\s+/).length;

    // Generate enriched JSON-LD explicitly for Answer Engines
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': article.category === 'News' ? 'NewsArticle' : 'Article',
        headline: article.title,
        description: article.excerpt,
        image: article.image.startsWith('http') ? article.image : `https://aivelocity.dev${article.image}`,
        datePublished: article.date,
        dateModified: article.dateModified || article.date,
        wordCount: wordCount,
        articleSection: article.category,
        inLanguage: 'en-GB',
        isAccessibleForFree: true,
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `https://aivelocity.dev/news-insights/${article.slug}`
        },
        author: {
            '@type': 'Organization',
            name: article.author,
            url: 'https://aivelocity.dev'
        },
        publisher: {
            '@type': 'Organization',
            name: 'AI Velocity',
            url: 'https://aivelocity.dev',
            logo: {
                '@type': 'ImageObject',
                url: 'https://aivelocity.dev/logo.png'
            }
        },
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['article h2', 'article p:first-of-type']
        },
        ...(article.categoryPage && article.categoryPage !== '/news-insights' ? {
            isPartOf: {
                '@type': 'WebPage',
                '@id': `https://aivelocity.dev${article.categoryPage}`,
                name: article.category,
                url: `https://aivelocity.dev${article.categoryPage}`
            }
        } : {})
    };

    // Generate FAQPage schema if article has FAQs (highest-impact LLM citation signal)
    const faqJsonLd = article.faqs && article.faqs.length > 0 ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: article.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer
            }
        }))
    } : null;

    // BreadcrumbList schema for site hierarchy
    const breadcrumbJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://aivelocity.dev',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'News & Insights',
                item: 'https://aivelocity.dev/news-insights',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: article.title,
                item: `https://aivelocity.dev/news-insights/${article.slug}`,
            },
        ],
    };

    return (
        <main className="min-h-screen bg-charcoal selection:bg-electric-mint selection:text-charcoal relative pt-32 pb-24">
            {/* Inject Article JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Inject FAQPage JSON-LD Schema (separate schema for maximum LLM extraction) */}
            {faqJsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                />
            )}

            {/* BreadcrumbList JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />

            {/* Scroll-driven Reading Progress Bar */}
            <ReadingProgress />

            <div className="max-w-screen-2xl mx-auto px-6 md:px-12 w-full mb-16 md:mb-24">

                {/* Back Navigation */}
                <Link href="/news-insights" className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-electric-mint/60 rounded-card text-electric-mint font-sans text-sm tracking-wide hover:bg-electric-mint hover:text-charcoal transition-all duration-300 mb-12 group">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="transition-transform duration-300 group-hover:-translate-x-0.5">
                        <path d="M10 3L5 8L10 13" />
                    </svg>
                    Return to News & Insights
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">

                    {/* Left Column: Metadata & Details */}
                    <aside className="lg:col-span-3 order-2 lg:order-1">
                        <div className="sticky top-32 flex flex-col gap-8 font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/60">

                            <div>
                                <span className="block text-white/20 mb-2">Category</span>
                                {article.categoryPage ? (
                                    <Link href={article.categoryPage} className="text-electric-mint hover:text-white transition-colors duration-200 hover:underline">
                                        {article.category}
                                    </Link>
                                ) : (
                                    <span className="text-electric-mint">
                                        {article.category}
                                    </span>
                                )}
                            </div>

                            <div>
                                <span className="block text-white/20 mb-2">Published</span>
                                <time dateTime={article.date} className="text-white/80">
                                    {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </time>
                            </div>

                            <div>
                                <span className="block text-white/20 mb-2">Author</span>
                                <span className="text-white/80">{article.author}</span>
                            </div>

                            <div>
                                <span className="block text-white/20 mb-2">Reading Time</span>
                                <span className="text-white/80">{article.readTime}</span>
                            </div>

                            {/* Interactive Share Button */}
                            <div className="pt-8 border-t border-white/10 mt-4">
                                <ShareButton title={article.title} slug={article.slug} />
                            </div>
                        </div>
                    </aside>

                    {/* Right Column: Title & Content */}
                    <div className="lg:col-span-9 order-1 lg:order-2">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif tracking-tight text-white leading-[1.1] mb-8 lg:mb-12">
                            {article.title}
                        </h1>

                        <p className="text-lg md:text-xl text-white/60 font-sans leading-relaxed mb-12 lg:mb-16 font-light">
                            {article.excerpt}
                        </p>

                        {/* Inline Hero Image */}
                        <div className="w-full aspect-video rounded-card overflow-hidden mb-16 lg:mb-24 relative border border-white/10 shadow-2xl">
                            <Image
                                src={article.image}
                                alt={article.title}
                                fill
                                className="object-cover object-top"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1100px"
                            />
                        </div>

                        {/* Markdown Renderer with contextual internal linking */}
                        <article className="max-w-prose text-white/70 font-sans font-light leading-relaxed text-lg md:text-xl
                            [&>h2]:font-serif [&>h2]:font-normal [&>h2]:tracking-tight [&>h2]:text-white [&>h2]:text-3xl md:[&>h2]:text-4xl [&>h2]:mt-16 [&>h2]:mb-8
                            [&>h3]:font-serif [&>h3]:font-normal [&>h3]:tracking-tight [&>h3]:text-white/90 [&>h3]:text-2xl md:[&>h3]:text-3xl [&>h3]:mt-12 [&>h3]:mb-6
                            [&>p]:mb-8 [&>p]:leading-relaxed
                            [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>ul>li]:mb-3 [&>ul>li]:text-white/70
                            [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-8 [&>ol>li]:mb-3 [&>ol>li]:text-white/70
                            [&_strong]:text-white [&_strong]:font-medium
                            [&_a]:text-electric-mint [&_a]:underline [&_a:hover]:text-white
                            [&>blockquote]:border-l-2 [&>blockquote]:border-electric-mint/50 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-white/80 [&>blockquote]:my-8
                        ">
                            <ContextualLinker content={article.content} currentCategoryPage={article.categoryPage} />
                        </article>

                        {/* Further Reading — curated article cross-links */}
                        {article.relatedSlugs && article.relatedSlugs.length > 0 && (() => {
                            const relatedArticles = article.relatedSlugs
                                .map(slug => insightsData.find(a => a.slug === slug))
                                .filter(Boolean);
                            if (relatedArticles.length === 0) return null;
                            return (
                                <div className="max-w-prose mt-16 pt-12 border-t border-white/10">
                                    <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-white/30 block mb-6">Further Reading</span>
                                    <div className="flex flex-col gap-4">
                                        {relatedArticles.map(related => (
                                            <Link key={related.slug} href={`/news-insights/${related.slug}`} className="group flex items-start gap-4 p-4 -mx-4 rounded-xl hover:bg-white/[0.03] transition-colors duration-200">
                                                <div className="shrink-0 w-2 h-2 mt-2.5 rounded-full bg-electric-mint/50 group-hover:bg-electric-mint transition-colors duration-200" />
                                                <div>
                                                    <span className="font-mono text-[9px] uppercase tracking-widest text-white/30">{related.category} · {related.readTime}</span>
                                                    <p className="font-serif text-white/80 text-lg leading-snug mt-1 group-hover:text-electric-mint transition-colors duration-200">{related.title}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        })()}

                        {/* Category CTA Banner — links back to parent category page */}
                        {article.categoryPage && article.categoryPage !== '/news-insights' && (
                            <div className="max-w-prose mt-16 p-8 rounded-2xl bg-white/[0.03] border border-white/10">
                                <span className="font-mono text-[10px] uppercase tracking-widest text-electric-mint block mb-3">Explore {article.category}</span>
                                <p className="font-serif text-white/80 text-xl leading-snug mb-4">Discover our full {article.category.toLowerCase()} capabilities and infrastructure.</p>
                                <Link
                                    href={article.categoryPage}
                                    className="inline-block border-b border-electric-mint/50 pb-1 text-electric-mint hover:text-white hover:border-white/50 transition-colors duration-300 font-sans tracking-widest text-xs uppercase"
                                >
                                    Learn More About {article.category} →
                                </Link>
                            </div>
                        )}

                        {/* Expandable FAQ Section */}
                        {article.faqs && <ArticleFAQ faqs={article.faqs} />}
                    </div>

                </div>
            </div>

            {/* Next Insight Contextual Slider replacing standard footer */}
            <NextProtocolBridge currentSlug={article.slug} />
        </main>
    );
}
