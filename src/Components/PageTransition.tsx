import { useState, useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import logoWhite from '../assets/Logo/Logo.png';

interface PageTransitionProps {
    children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
    const location = useLocation();
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        // Trigger transition animation on every location key / route change
        setIsAnimating(true);

        const timer = setTimeout(() => {
            setIsAnimating(false);
        }, 750);

        return () => clearTimeout(timer);
    }, [location.key, location.pathname]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Speed Curtain Swipe Overlay */}
            {isAnimating && (
                <div
                    key={`curtain-${location.key || location.pathname}`}
                    className="fixed inset-0 z-[9999] pointer-events-none animate-curtain-swipe flex flex-col justify-between bg-black"
                >
                    {/* Top Red Racing Line */}
                    <div className="w-full h-2 bg-gradient-to-r from-red-700 via-[#e50914] to-red-700 shadow-[0_0_20px_rgba(229,9,20,0.8)]" />

                    {/* Centered S&W Garage Logo Watermark */}
                    <div className="flex flex-col items-center justify-center space-y-3 p-4">
                        <img
                            src={logoWhite}
                            alt="S&W Garage Logo"
                            className="h-16 sm:h-20 w-auto object-contain animate-pulse"
                        />
                        <div className="w-16 h-[2px] bg-[#e50914]" />
                    </div>

                    {/* Bottom Red Racing Line */}
                    <div className="w-full h-2 bg-gradient-to-r from-red-700 via-[#e50914] to-red-700 shadow-[0_0_20px_rgba(229,9,20,0.8)]" />
                </div>
            )}

            {/* Main Page Content with Blur & Scale Reveal */}
            <div key={location.key || location.pathname} className="animate-next-level-enter w-full">
                {children}
            </div>
        </div>
    );
}
