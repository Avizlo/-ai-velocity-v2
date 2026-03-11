"use client";

import { useEffect, useState } from 'react';
import Script from 'next/script';

const GA_ID = 'G-6H1WXBSV9D';

export const GoogleAnalytics = () => {
    const [consented, setConsented] = useState(false);

    useEffect(() => {
        // Check if user already accepted on a previous visit
        if (localStorage.getItem('cookie-consent') === 'accepted') {
            setConsented(true);
        }

        // Listen for new consent events from CookieConsent component
        const handleConsent = () => {
            if (localStorage.getItem('cookie-consent') === 'accepted') {
                setConsented(true);
            }
        };

        window.addEventListener('cookie-consent-update', handleConsent);
        return () => window.removeEventListener('cookie-consent-update', handleConsent);
    }, []);

    if (!consented) return null;

    return (
        <>
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_ID}');
                `}
            </Script>
        </>
    );
};
