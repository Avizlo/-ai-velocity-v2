'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';

// ── Category keyword → landing page mapping ─────────────────────────────────
const CATEGORY_LINKS = [
    {
        keywords: ['agentic commerce', 'autonomous commerce', 'agent-to-agent trade', 'agentic commerce model'],
        href: '/agentic-commerce',
        label: 'Agentic Commerce',
    },
    {
        keywords: ['agentic marketing', 'agent-first marketing', 'autonomous marketing', 'agent-native marketing'],
        href: '/agentic-marketing',
        label: 'Agentic Marketing',
    },
    {
        keywords: ['agentic payments', 'autonomous settlement', 'machine-to-machine payment', 'autonomous payment settlement'],
        href: '/agentic-payments',
        label: 'Agentic Payments',
    },
    {
        keywords: ['agentic aeo', 'answer engine optimisation', 'answer engine optimization', 'agentic engine optimisation', 'agentic engine optimization'],
        href: '/agentic-aeo',
        label: 'Agentic AEO',
    },
];

/**
 * Processes a text string and replaces the FIRST occurrence of each category keyword
 * with an internal link. Only links each category once per article to avoid over-optimisation.
 */
function linkifyText(text, usedCategories, currentCategoryPage) {
    if (!text || typeof text !== 'string') return text;

    for (const category of CATEGORY_LINKS) {
        // Skip if this category has already been linked in this article
        if (usedCategories.has(category.href)) continue;
        // Skip if this keyword matches the category page the article belongs to
        if (category.href === currentCategoryPage) continue;

        for (const keyword of category.keywords) {
            const regex = new RegExp(`\\b(${keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})\\b`, 'i');
            const match = text.match(regex);
            if (match) {
                const idx = match.index;
                const matchedText = match[0];
                usedCategories.add(category.href);

                const before = text.slice(0, idx);
                const after = text.slice(idx + matchedText.length);

                return (
                    <>
                        {before}
                        <Link
                            href={category.href}
                            className="text-electric-mint underline decoration-electric-mint/30 underline-offset-2 hover:text-white hover:decoration-white/50 transition-colors duration-200"
                        >
                            {matchedText}
                        </Link>
                        {linkifyText(after, usedCategories, currentCategoryPage)}
                    </>
                );
            }
        }
    }
    return text;
}

/**
 * Custom ReactMarkdown renderer that injects internal links into paragraph text.
 * Only links the first occurrence of each category keyword per article.
 */
export const ContextualLinker = ({ content, currentCategoryPage, className }) => {
    // Track which categories have been linked across the entire article
    const usedCategories = new Set();

    const components = {
        p: ({ children, ...props }) => {
            const processedChildren = processChildren(children, usedCategories, currentCategoryPage);
            return <p {...props}>{processedChildren}</p>;
        },
        li: ({ children, ...props }) => {
            const processedChildren = processChildren(children, usedCategories, currentCategoryPage);
            return <li {...props}>{processedChildren}</li>;
        },
    };

    return (
        <ReactMarkdown components={components}>
            {content}
        </ReactMarkdown>
    );
};

function processChildren(children, usedCategories, currentCategoryPage) {
    if (!Array.isArray(children)) {
        if (typeof children === 'string') {
            return linkifyText(children, usedCategories, currentCategoryPage);
        }
        return children;
    }

    return children.map((child, i) => {
        if (typeof child === 'string') {
            return <span key={i}>{linkifyText(child, usedCategories, currentCategoryPage)}</span>;
        }
        return child;
    });
}
