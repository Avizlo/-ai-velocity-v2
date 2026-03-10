import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
    const { searchParams } = new URL(request.url);

    // Extract customisable parameters from query string
    const title = searchParams.get('title') || 'Your Brand';
    const subtitle = searchParams.get('subtitle') || '';
    const accent = searchParams.get('accent') || '#c0e9cb'; // electric-mint

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '80px',
                    backgroundColor: '#1A1A1A',
                    fontFamily: 'Georgia, serif',
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                {/* Background gradient orb */}
                <div
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        right: '-10%',
                        width: '600px',
                        height: '600px',
                        borderRadius: '50%',
                        background: `radial-gradient(circle, ${accent}15 0%, transparent 70%)`,
                    }}
                />

                {/* Subtle grid lines */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />

                {/* Top accent line */}
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '4px',
                        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
                    }}
                />

                {/* Subtitle / category label */}
                {subtitle && (
                    <div
                        style={{
                            display: 'flex',
                            color: accent,
                            fontSize: '14px',
                            fontFamily: 'monospace',
                            textTransform: 'uppercase',
                            letterSpacing: '4px',
                            marginBottom: '24px',
                        }}
                    >
                        {subtitle}
                    </div>
                )}

                {/* Main title */}
                <div
                    style={{
                        display: 'flex',
                        fontSize: title.length > 60 ? '48px' : title.length > 40 ? '56px' : '64px',
                        fontStyle: 'italic',
                        color: 'rgba(255, 255, 255, 0.95)',
                        lineHeight: 1.1,
                        letterSpacing: '-1px',
                        maxWidth: '900px',
                    }}
                >
                    {title}
                </div>

                {/* Bottom brand bar */}
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginTop: '40px',
                        paddingTop: '24px',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                >
                    <div
                        style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: accent,
                        }}
                    />
                    <span
                        style={{
                            color: 'rgba(255, 255, 255, 0.4)',
                            fontSize: '13px',
                            fontFamily: 'monospace',
                            textTransform: 'uppercase',
                            letterSpacing: '3px',
                        }}
                    >
                        Your Brand
                    </span>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
