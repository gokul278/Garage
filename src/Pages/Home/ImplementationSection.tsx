import { useState, useEffect } from 'react';
import rDotBg from '../../assets/Images/home_tuning_sectionbg_2.png';
import img1 from '../../assets/Cars/Image1.jpg';
import img2 from '../../assets/Cars/Image2.jpg';
import img3 from '../../assets/Cars/Image3.jpg';
import img4 from '../../assets/Cars/Image4.jpg';
import img5 from '../../assets/Cars/Image5.jpg';
import img6 from '../../assets/Cars/Image6.jpg';
import img7 from '../../assets/Cars/Image7.jpg';
import img8 from '../../assets/Cars/Image8.jpg';
import { useLanguage } from '../../Context/LanguageContext';

export default function ImplementationSection() {
    const { t } = useLanguage();

    const images = [
        { src: img1, alt: 'Garage workshop implementation 1' },
        { src: img2, alt: 'Garage workshop implementation 2' },
        { src: img3, alt: 'Garage workshop implementation 3' },
        { src: img4, alt: 'Garage workshop implementation 4' },
        { src: img5, alt: 'Garage workshop implementation 5' },
        { src: img6, alt: 'Garage workshop implementation 6' },
        { src: img7, alt: 'Garage workshop implementation 7' },
        { src: img8, alt: 'Garage workshop implementation 8' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [touchStartX, setTouchStartX] = useState<number | null>(null);
    const [touchEndX, setTouchEndX] = useState<number | null>(null);
    const [isDragging, setIsDragging] = useState(false);

    const minSwipeDistance = 40;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            handleNext();
        }, 4500);
        return () => clearInterval(interval);
    }, [isPaused, images.length]);

    const onStart = (clientX: number) => {
        setIsPaused(true);
        setIsDragging(true);
        setTouchStartX(clientX);
        setTouchEndX(clientX);
    };

    const onMove = (clientX: number) => {
        if (!isDragging) return;
        setTouchEndX(clientX);
    };

    const onEnd = () => {
        if (!isDragging || touchStartX === null || touchEndX === null) return;
        const distance = touchStartX - touchEndX;
        if (distance > minSwipeDistance) {
            handleNext();
        } else if (distance < -minSwipeDistance) {
            handlePrev();
        }
        setIsDragging(false);
        setTouchStartX(null);
        setTouchEndX(null);
    };

    return (
        <section className="relative w-full bg-white text-zinc-900 pt-16 sm:pt-20 pb-4 sm:pb-6 font-saira overflow-hidden">
            {/* Background Watermark Image "R" */}
            <div className="absolute top-12 left-0 sm:left-2 lg:left-6 pointer-events-none select-none z-0">
                <img
                    src={rDotBg}
                    alt="R background watermark"
                    className="w-32 sm:w-44 md:w-52 lg:w-56 h-auto object-contain opacity-95"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
                {/* Red Subtitle Category */}
                <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                    {t('impl.subtitle')}
                </h3>

                {/* Main Headline */}
                <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.75rem] leading-[1.15] tracking-tight">
                    {t('impl.headlinePart1')}
                    <span className="text-red-600">{t('impl.headlineRed')}</span>
                </h2>

                {/* Two-Toned Accent Line Below Title */}
                <div className="flex flex-col justify-center space-x-0 pt-2">
                    <div className="w-14 h-[3px] bg-zinc-900"></div>
                    <div className="w-36 h-[1px] bg-zinc-300"></div>
                </div>

                {/* 12-Column Grid Layout matching top section exactly */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start pt-8 lg:pt-12">

                    {/* Left Column (lg:col-span-6) - Paragraphs */}
                    <div className="lg:col-span-6 space-y-6">
                        <p className="text-[#1b4356] font-saira font-normal text-sm sm:text-base leading-relaxed pt-2">
                            {t('impl.p1')}
                        </p>

                        <p className="text-[#1b4356] font-saira font-normal text-sm sm:text-base leading-relaxed">
                            {t('impl.p2')}
                        </p>
                    </div>

                    {/* Right Column (lg:col-span-6) - Interactive Workshop Image Carousel */}
                    <div
                        className="lg:col-span-6 space-y-4 w-full relative lg:pl-10 group"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={() => setIsPaused(false)}
                    >
                        {/* Image Display Frame with Touch & Mouse Drag */}
                        <div
                            className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-lg border border-zinc-200 bg-zinc-100 cursor-grab active:cursor-grabbing select-none touch-pan-y"
                            onTouchStart={(e) => onStart(e.touches[0].clientX)}
                            onTouchMove={(e) => onMove(e.touches[0].clientX)}
                            onTouchEnd={onEnd}
                            onMouseDown={(e) => onStart(e.clientX)}
                            onMouseMove={(e) => onMove(e.clientX)}
                            onMouseUp={onEnd}
                            onMouseLeave={onEnd}
                        >
                            {images.map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img.src}
                                    alt={img.alt}
                                    draggable={false}
                                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                        }`}
                                />
                            ))}

                            {/* Left Navigation Arrow */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handlePrev();
                                }}
                                className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 focus:outline-none"
                                aria-label="Previous slide"
                            >
                                &#10094;
                            </button>

                            {/* Right Navigation Arrow */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleNext();
                                }}
                                className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-black/70 focus:outline-none"
                                aria-label="Next slide"
                            >
                                &#10095;
                            </button>
                        </div>

                        {/* Pagination Dots with Active Home Icon */}
                        <div className="flex items-center justify-center gap-2 pt-3">
                            {images.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentIndex(idx)}
                                    className="flex items-center justify-center p-1 focus:outline-none"
                                    aria-label={`Go to slide ${idx + 1}`}
                                >
                                    {idx === currentIndex ? (
                                        <svg
                                            className="w-3.5 h-3.5 text-red-600 fill-current"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                        </svg>
                                    ) : (
                                        <span className="w-2 h-2 rounded-full bg-zinc-300 hover:bg-zinc-400 transition-colors" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
