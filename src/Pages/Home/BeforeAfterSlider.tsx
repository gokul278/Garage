import { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
    beforeImage: string;
    afterImage: string;
    beforeAlt?: string;
    afterAlt?: string;
}

export default function BeforeAfterSlider({
    beforeImage,
    afterImage,
    beforeAlt = 'Before restoration',
    afterAlt = 'After restoration',
}: BeforeAfterSliderProps) {
    const [sliderPos, setSliderPos] = useState<number>(50);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback(
        (clientX: number) => {
            if (!containerRef.current) return;
            const rect = containerRef.current.getBoundingClientRect();
            const x = clientX - rect.left;
            let percentage = (x / rect.width) * 100;
            if (percentage < 0) percentage = 0;
            if (percentage > 100) percentage = 100;
            setSliderPos(percentage);
        },
        []
    );

    const handleMouseMove = useCallback(
        (e: MouseEvent) => {
            if (!isDragging) return;
            handleMove(e.clientX);
        },
        [isDragging, handleMove]
    );

    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    useEffect(() => {
        if (isDragging) {
            const handleTouchMovePrevent = (e: TouchEvent) => {
                if (e.cancelable) e.preventDefault();
                if (e.touches[0]) handleMove(e.touches[0].clientX);
            };

            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMovePrevent, { passive: false });
            window.addEventListener('touchend', handleMouseUp);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
                window.removeEventListener('touchmove', handleTouchMovePrevent);
                window.removeEventListener('touchend', handleMouseUp);
            };
        }
    }, [isDragging, handleMouseMove, handleMouseUp, handleMove]);

    return (
        <div
            ref={containerRef}
            className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-2xl select-none group border border-white/10 touch-none"
            onMouseDown={(e) => {
                setIsDragging(true);
                handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
                setIsDragging(true);
                if (e.touches[0]) handleMove(e.touches[0].clientX);
            }}
        >
            {/* After Image (Background / Base) */}
            <img
                src={afterImage}
                alt={afterAlt}
                className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
            />

            {/* Before Image (Clipped overlay) */}
            <div
                className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden"
                style={{
                    clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
                }}
            >
                <img
                    src={beforeImage}
                    alt={beforeAlt}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />
            </div>

            {/* Divider Line */}
            <div
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.5)] z-20 pointer-events-none"
                style={{ left: `${sliderPos}%` }}
            >
                {/* Circular Handle Button */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/95 text-zinc-800 shadow-lg flex items-center justify-center border-2 border-white transition-transform group-hover:scale-105">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-5 h-5 text-zinc-800"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                            transform="rotate(-90 12 12)"
                        />
                    </svg>
                </div>
            </div>

            {/* Invisible Range Slider for accessibility & keyboard control */}
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                aria-label="Before and after image comparison slider"
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
            />
        </div>
    );
}
