import { useRef } from 'react';

export const MagneticButton = ({ children, className = '' }) => {
    const magneticRef = useRef(null);

    // Physics completely disabled globally per Phase 9 directive to ensure absolute static precision on text.
    return (
        <div ref={magneticRef} className={`inline-block ${className}`}>
            {children}
        </div>
    );
};
