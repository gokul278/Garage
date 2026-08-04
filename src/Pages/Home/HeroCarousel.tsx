import { useState, useEffect } from 'react';
import slide1Img from '../../assets/Hero/Slide1.png';
import slide2Img from '../../assets/Hero/Slide2.png';
import slide3Img from '../../assets/Hero/Slide3.png';
import slide4Img from '../../assets/Hero/Slide4.png';

interface Slide {
    id: number;
    title: string;
    subtitle: string;
    watermark: string;
    image: string;
    gradient: string;
}

export default function HeroCarousel() {
    const slides: Slide[] = [
        {
            id: 1,
            title: "Wheel Change\nin the blink of an eye.",
            subtitle: "Store your tires or wheels with us,\n come by and they will be changed in no time.",
            watermark: "Sattler",
            image: slide2Img,
            gradient: "from-[#1b4356] via-[#4d7d95] to-[#d8e7ee]"
        },
        {
            id: 2,
            title: "There is hardly a spare part that\nwe cannot procure.",
            subtitle: "Whatever parts you need, we are your\ncontact. Ordered to us and quickly\nassembled.",
            watermark: "Tuning",
            image: slide1Img,
            gradient: "from-[#e60012] via-[#ef454f] to-[#fdeef0]"
        },
        {
            id: 3,
            title: "Fancy more power?\nWe are your tuning experts.",
            subtitle: "It's not always \"just\" about repairing or\nrestoring. Do you want the wolf in sheep's\nclothing? Everything is possible.",
            watermark: "Teile",
            image: slide3Img,
            gradient: "from-[#1b4356] via-[#4d7d95] to-[#d8e7ee]"
        },
        {
            id: 4,
            title: "We can do almost anything.\nAlso saddlery work.",
            subtitle: "With our partners, we cover the entire area of\nvehicle restoration and repair. We will be\nhappy to advise you.",
            watermark: "Räder",
            image: slide4Img,
            gradient: "from-[#e60012] via-[#ef454f] to-[#fdeef0]"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, [isPaused, slides.length]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const activeSlide = slides[currentSlide];

    return (
        <section
            className={`relative w-full overflow-hidden text-white h-[calc(100vh-80px)] min-h-[580px] max-h-[720px] flex items-center select-none bg-gradient-to-r ${activeSlide.gradient} transition-all duration-1000 ease-in-out`}
        // onMouseEnter={() => setIsPaused(true)}
        // onMouseLeave={() => setIsPaused(false)}
        >
            {/* Render all slides with smooth cross-fade animation */}
            {slides.map((slide, index) => {
                const isActive = index === currentSlide;

                return (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full flex items-center transition-all duration-700 ease-in-out ${isActive
                            ? 'opacity-100 translate-x-0 z-10 pointer-events-auto'
                            : 'opacity-0 -translate-x-10 z-0 pointer-events-none'
                            }`}
                    >
                        {/* Right Side Full Screen Height & Full Right Edge Image Div with Center Line Reveal */}
                        <div
                            className={`absolute top-0 right-0 h-full w-full lg:w-[52%] xl:w-[55%] z-0 transition-all duration-700 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0'
                                }`}
                            style={{
                                clipPath: isActive ? 'inset(0% 0% 0% 0%)' : 'inset(0% 50% 0% 50%)',
                                transition: 'clip-path 850ms cubic-bezier(0.25, 1, 0.5, 1), opacity 400ms ease-in-out'
                            }}
                        >
                            {/* Center Vertical Line Accent during expansion */}
                            <div
                                className={`absolute top-0 left-1/2 -translate-x-1/2 h-full w-[2px] bg-white/70 z-20 pointer-events-none transition-all duration-700 ${isActive ? 'opacity-0' : 'opacity-100'
                                    }`}
                            />

                            {/* Full Height & Edge Image Element */}
                            <div className="relative w-full h-full overflow-hidden">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className={`w-full h-full object-cover object-center lg:object-right transition-transform duration-1000 ease-out ${isActive ? 'scale-100' : 'scale-110'
                                        }`}
                                />

                                {/* Gradient Fade Overlay to blend seamlessly into left background */}
                                {/* <div className={`absolute inset-0 bg-gradient-to-r ${activeSlide.gradient} opacity-20`}></div> */}
                            </div>
                        </div>

                        {/* Left Text Content Area (Aligned & High Z-Index) */}
                        <div
                            onMouseEnter={() => setIsPaused(true)}
                            onMouseLeave={() => setIsPaused(false)}
                            className="max-w-7xl px-4 sm:px-6 lg:px-10 w-full relative z-20 pointer-events-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-12 bg-[rgba(0,0,0,0.8)]  p-5 lg:bg-[rgba(0,0,0,0.0)] lg:p-0 gap-8 items-center">

                                {/* Left Text Column */}
                                <div
                                    className={`lg:col-span-7 space-y-6 text-left transition-all duration-700 delay-150 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`}
                                >
                                    {/* Title */}
                                    <h1 className="text-3xl sm:text-4xl md:text-xl lg:text-[2.8rem] font-extrabold tracking-tight text-white leading-[1.15] font-saira whitespace-pre-line drop-shadow-md">
                                        {slide.title}
                                    </h1>

                                    {/* Two-Toned Accent Line Below Title */}
                                    <div className="flex flex-col justify-center space-x-0">
                                        <div className="w-14 h-[3px] bg-zinc-900"></div>
                                        <div className="w-36 h-[1px] bg-zinc-700/50"></div>
                                    </div>

                                    {/* Subtitle */}
                                    <p className="text-sm sm:text-base md:text-lg text-zinc-100 font-normal max-w-lg leading-relaxed whitespace-pre-line opacity-90 drop-shadow-sm">
                                        {slide.subtitle}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Slide Indicator Square Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 cursor-pointer transition-all duration-300 ${currentSlide === index
                            ? 'bg-zinc-800 scale-110 shadow-sm'
                            : 'bg-zinc-400/50 hover:bg-zinc-400'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
