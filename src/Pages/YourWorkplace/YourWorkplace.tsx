import { useState, useEffect } from 'react';
import img1 from '../../assets/Workplace/Image1.jpg';
import img2 from '../../assets/Workplace/Image2.jpg';
import img3 from '../../assets/Workplace/Image3.jpg';
import img4 from '../../assets/Workplace/Image4.jpg';
import img5 from '../../assets/Workplace/Image5.jpg';
import img6 from '../../assets/Workplace/Image6.jpg';
import img7 from '../../assets/Workplace/Image7.jpg';
import img8 from '../../assets/Workplace/Image8.jpg';
import img9 from '../../assets/Workplace/Image9.jpg';
import img10 from '../../assets/Workplace/Image10.jpg';
import img11 from '../../assets/Workplace/Image11.jpg';
import img12 from '../../assets/Workplace/Image12.jpg';
import espressaLogo from '../../assets/Workplace/Logo_espressa-web2-260x77.jpg';
import safetyFirstImg from '../../assets/Workplace/SW-Safety-First-768x768.png';
import { useLanguage } from '../../Context/LanguageContext';

export default function YourWorkplace() {
    const { t } = useLanguage();

    const images = [
        { src: img1, alt: 'Garage workplace 1' },
        { src: img2, alt: 'Garage workplace 2' },
        { src: img3, alt: 'Garage workplace 3' },
        { src: img4, alt: 'Garage workplace 4' },
        { src: img5, alt: 'Garage workplace 5' },
        { src: img6, alt: 'Garage workplace 6' },
        { src: img7, alt: 'Garage workplace 7' },
        { src: img8, alt: 'Garage workplace 8' },
        { src: img9, alt: 'Garage workplace 9' },
        { src: img10, alt: 'Garage workplace 10' },
        { src: img11, alt: 'Garage workplace 11' },
        { src: img12, alt: 'Garage workplace 12' },
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
        <main className="w-full min-h-screen bg-white text-zinc-900 pt-20 font-saira">
            {/* Top Workshop Info & Carousel Section */}
            <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-20">
                <div className="space-y-6">
                    {/* Red Subtitle Category */}
                    <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                        {t('workplace.subtitle')}
                    </h3>

                    {/* Main Headline */}
                    <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.00rem] leading-[1.15] tracking-tight">
                        {t('workplace.headline')}
                    </h2>

                    {/* Two-Toned Accent Line Below Title */}
                    <div className="flex flex-col justify-center space-x-0 pt-2">
                        <div className="w-14 h-[3px] bg-zinc-900"></div>
                        <div className="w-36 h-[1px] bg-zinc-300"></div>
                    </div>

                    {/* Paragraph 1 */}
                    <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                        {t('workplace.p1')}
                    </p>

                    {/* 12-Column Grid: Left Paragraph + Right Workshop Image Carousel */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8">
                        {/* Left Column - Paragraph 2 */}
                        <div className="lg:col-span-6 text-[#626262] font-saira font-normal text-base sm:text-lg leading-relaxed">
                            <p>{t('workplace.p2')}</p>
                        </div>

                        {/* Right Column - Workshop Image Carousel */}
                        <div
                            className="lg:col-span-6 space-y-4 w-full relative group"
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                        >
                            {/* Carousel Frame */}
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

                                {/* Left Arrow */}
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

                                {/* Right Arrow */}
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
                            <div className="flex items-center justify-center gap-1.5 pt-2 flex-wrap">
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

            {/* Coffee Break / Partner Section */}
            <section className="w-full bg-white text-zinc-900 border-t border-zinc-200 py-16 sm:py-20 font-saira">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 space-y-6">
                    {/* Main Headline */}
                    <h2 className="text-[#1b4356] font-saira font-black text-3xl sm:text-4xl lg:text-[3.20rem] leading-[1.15] tracking-tight">
                        {t('workplace.breakHeadline')}
                    </h2>

                    {/* Two-Toned Accent Line Below Title */}
                    <div className="flex flex-col justify-center space-x-0 pt-1">
                        <div className="w-14 h-[3px] bg-zinc-900"></div>
                        <div className="w-36 h-[1px] bg-zinc-300"></div>
                    </div>

                    {/* Highlight Subtext */}
                    <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                        {t('workplace.breakHighlight')}
                    </p>

                    {/* Body Text */}
                    <p className="text-zinc-600 font-saira font-normal text-sm sm:text-base leading-relaxed">
                        {t('workplace.breakP1')}
                    </p>

                    {/* PS Text */}
                    <p className="text-zinc-600 font-saira font-normal text-sm sm:text-base leading-relaxed pt-1">
                        {t('workplace.breakPS')}
                    </p>

                    {/* Espressa Logo */}
                    <div className="pt-4">
                        <img
                            src={espressaLogo}
                            alt="Espressa Coffee Partner Logo"
                            className="h-14 sm:h-16 lg:h-20 w-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Safety First Section */}
            <section className="w-full bg-white text-zinc-900 border-t border-zinc-200 py-16 sm:py-20 font-saira">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                        {/* Left Column: Safety First Badge Image */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-start">
                            <img
                                src={safetyFirstImg}
                                alt="Safety First Badge"
                                className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
                            />
                        </div>

                        {/* Right Column: Safety Information Text */}
                        <div className="lg:col-span-7 space-y-6">
                            {/* Headline */}
                            <h2 className="text-[#1b4356] font-saira font-black text-3xl sm:text-4xl lg:text-[3.20rem] leading-[1.15] tracking-tight">
                                {t('workplace.safetyHeadline')}
                            </h2>

                            {/* Two-Toned Accent Line Below Title */}
                            <div className="flex flex-col justify-center space-x-0 pt-1">
                                <div className="w-14 h-[3px] bg-zinc-900"></div>
                                <div className="w-36 h-[1px] bg-zinc-300"></div>
                            </div>

                            {/* Subtitle Highlight */}
                            <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                                {t('workplace.safetyHighlight')}
                            </p>

                            {/* Risk of Accident */}
                            <div className="space-y-1.5">
                                <h4 className="font-bold text-slate-800 text-base sm:text-lg font-saira">
                                    {t('workplace.accidentTitle')}
                                </h4>
                                <p className="text-zinc-600 font-saira text-sm sm:text-base leading-relaxed">
                                    {t('workplace.accidentDesc')}
                                </p>
                            </div>

                            {/* Risk of Theft */}
                            <div className="space-y-1.5 pt-2">
                                <h4 className="font-bold text-slate-800 text-base sm:text-lg font-saira">
                                    {t('workplace.theftTitle')}
                                </h4>
                                <p className="text-zinc-600 font-saira text-sm sm:text-base leading-relaxed">
                                    {t('workplace.theftDesc')}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
