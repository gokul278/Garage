import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import imgEngine from '../../assets/AboutUs/Doityourself_1632.jpg';
import imgCar1 from '../../assets/AboutUs/Oldtimer-SW1.jpg';
import imgCar3 from '../../assets/AboutUs/Oldtimer-SW3.jpg';
import bgWheel from '../../assets/AboutUs/SW-Background-über-uns.jpg';

export default function AboutUs() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [zoomScale, setZoomScale] = useState<number>(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    const handleOpenImage = (imgSrc: string) => {
        setSelectedImage(imgSrc);
        setZoomScale(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleZoomIn = () => {
        setZoomScale((prev) => Math.min(prev + 0.3, 3.5));
    };

    const handleZoomOut = () => {
        setZoomScale((prev) => Math.max(prev - 0.3, 0.5));
    };

    const handleResetZoom = () => {
        setZoomScale(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleWheelZoom = (e: React.WheelEvent) => {
        if (e.deltaY < 0) {
            handleZoomIn();
        } else {
            handleZoomOut();
        }
    };

    // Pan / Drag handlers
    const onMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const onMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y,
        });
    };

    const onMouseUp = () => {
        setIsDragging(false);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 1) {
            setIsDragging(true);
            setDragStart({
                x: e.touches[0].clientX - position.x,
                y: e.touches[0].clientY - position.y,
            });
        }
    };

    const onTouchMove = (e: React.TouchEvent) => {
        if (!isDragging || e.touches.length !== 1) return;
        setPosition({
            x: e.touches[0].clientX - dragStart.x,
            y: e.touches[0].clientY - dragStart.y,
        });
    };

    const onTouchEnd = () => {
        setIsDragging(false);
    };

    // Lock body scroll when Lightbox Modal is active
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [selectedImage]);

    return (
        <main className="w-full min-h-screen bg-white text-zinc-900 pt-20 font-saira relative overflow-hidden">
            {/* Right Side Metallic Wheel Rim Watermark Background - hidden on mobile/tablet, shown only on laptop view */}
            <img
                src={bgWheel}
                alt="Wheel background graphic watermark"
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-[75%] max-h-[900px] w-auto opacity-90 pointer-events-none z-0 object-contain object-right"
            />

            {/* Main Content Section */}
            <section className="w-full relative z-10 py-0 pb-0">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start pl-0 pr-0">

                    {/* Left Column: Stacked 3 Images touching left and bottom edge with hover magnifying glass overlay */}
                    <div className="lg:col-span-5 w-full flex flex-col pl-0 ml-0 pb-0 mb-0 overflow-hidden">

                        {/* Image 1: Engine Block */}
                        <div
                            className="relative group w-full overflow-hidden cursor-pointer"
                            onClick={() => handleOpenImage(imgEngine)}
                        >
                            <img
                                src={imgEngine}
                                alt="S&W Garage Engine Tuning"
                                className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover block group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Hover Backdrop Overlay with Centered Glass Magnifying Icon */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="p-3.5 bg-white text-slate-900 shadow-xl rounded-sm transform group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Image 2: Classic Car Interior */}
                        <div
                            className="relative group w-full overflow-hidden cursor-pointer"
                            onClick={() => handleOpenImage(imgCar1)}
                        >
                            <img
                                src={imgCar1}
                                alt="Classic Car Interior Restoration"
                                className="w-full h-[260px] sm:h-[320px] lg:h-[360px] object-cover block group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Hover Backdrop Overlay with Centered Glass Magnifying Icon */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="p-3.5 bg-white text-slate-900 shadow-xl rounded-sm transform group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Image 3: Vintage Car Front Grill View */}
                        <div
                            className="relative group w-full overflow-hidden pb-0 mb-0 cursor-pointer"
                            onClick={() => handleOpenImage(imgCar3)}
                        >
                            <img
                                src={imgCar3}
                                alt="Classic Vintage Car Front Grill"
                                className="w-full h-[320px] sm:h-[380px] lg:h-[420px] object-cover block group-hover:scale-105 transition-transform duration-500"
                            />
                            {/* Hover Backdrop Overlay with Centered Glass Magnifying Icon */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="p-3.5 bg-white text-slate-900 shadow-xl rounded-sm transform group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Text Content Blocks with mobile/tablet padding */}
                    <div className="lg:col-span-7 space-y-12 max-w-xl lg:max-w-2xl px-6 sm:px-10 lg:px-0 lg:pr-16 py-12 sm:py-16">

                        {/* Section 1: Who are we? */}
                        <div className="space-y-5">
                            {/* Red Subtitle */}
                            <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                                Who are we?
                            </h3>

                            {/* Headline */}
                            <h2 className="text-[#1b4356] font-saira font-black text-3xl sm:text-4xl lg:text-[3.20rem] leading-[1.15] tracking-tight">
                                We are S&amp;W.And we are the car <span className="text-red-600">whisperers.</span>
                            </h2>

                            {/* Two-Toned Accent Line Below Title */}
                            <div className="flex flex-col justify-center space-x-0 pt-1">
                                <div className="w-14 h-[3px] bg-zinc-900"></div>
                                <div className="w-36 h-[1px] bg-zinc-300"></div>
                            </div>

                            {/* Highlight Paragraph */}
                            <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                                We not only have our own vehicles tinkered with in our garage, but we also repair, maintain, maintain, tune, refine and beautify your new car or classic car ourselves.
                            </p>

                            {/* Paragraph 1 */}
                            <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed">
                                Gino Santoro, the car mechanic, whom they also call the car whisperer, prefers to do (almost) everything himself.
                            </p>

                            {/* Paragraph 2 */}
                            <p className="text-zinc-500 font-saira text-sm sm:text-base leading-relaxed">
                                At some point, he had the clever idea that others could feel exactly the same. So the chief mechanic and co-owner of Garage Santoro &amp; Wiederkehr AG set up a concept to make his garage available to people with skilled hands who want to repair and maintain their cars themselves.
                            </p>

                            {/* Paragraph 3 */}
                            <p className="text-zinc-500 font-saira text-sm sm:text-base leading-relaxed">
                                Who can still remember the show &quot;Pimp it or kick it&quot; on SRF 2? In this regularly broadcast program, Gino Santoro did just that: make his garage available to laymen who could maintain their cars there themselves and prepare them for motor vehicle inspections. Of course, under his watchful eye, which looked over the shoulders of the TV mechanics, sometimes sternly, sometimes mischievously. Just come by for a jump.
                            </p>
                        </div>

                        {/* Section 2: Over 85 years of experience */}
                        <div className="space-y-5 pt-4">
                            {/* Headline */}
                            <h2 className="text-[#1b4356] font-saira font-black text-3xl sm:text-4xl lg:text-[3.20rem] leading-[1.15] tracking-tight">
                                Over 85 years of <span className="text-red-600">experience</span>
                            </h2>

                            {/* Two-Toned Accent Line Below Title */}
                            <div className="flex flex-col justify-center space-x-0 pt-1">
                                <div className="w-14 h-[3px] bg-zinc-900"></div>
                                <div className="w-36 h-[1px] bg-zinc-300"></div>
                            </div>

                            {/* Highlight Paragraph */}
                            <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                                With Gino Santoro and his team, you will find many years of experience.
                            </p>

                            {/* Body Paragraph */}
                            <p className="text-zinc-500 font-saira text-sm sm:text-base leading-relaxed">
                                His well-rehearsed team &ndash; all trained car mechanics &ndash; are happy when it comes to tuning and refinements. Come by.
                            </p>
                        </div>

                        {/* Section 3: With joy and heart */}
                        <div className="space-y-5 pt-4">
                            {/* Headline */}
                            <h2 className="text-[#1b4356] font-saira font-black text-3xl sm:text-4xl lg:text-[3.20rem] leading-[1.15] tracking-tight">
                                With joy and <span className="text-red-600">heart</span>
                            </h2>

                            {/* Two-Toned Accent Line Below Title */}
                            <div className="flex flex-col justify-center space-x-0 pt-1">
                                <div className="w-14 h-[3px] bg-zinc-900"></div>
                                <div className="w-36 h-[1px] bg-zinc-300"></div>
                            </div>

                            {/* Highlight Paragraph */}
                            <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                                Classic car lovers and car mechanics with heart and soul with a huge amount of experience.
                            </p>

                            {/* Body Paragraph 1 */}
                            <p className="text-zinc-500 font-saira text-sm sm:text-base leading-relaxed">
                                Last but not least, Gino did not let go of the idea of a do-it-yourself garage because he himself is an incorrigible classic car lover. And these guys do a lot of things themselves &ndash; often out of necessity, because no one else understands their car anymore.
                            </p>

                            {/* Body Paragraph 2 */}
                            <p className="text-zinc-500 font-saira text-sm sm:text-base leading-relaxed">
                                So, classic car fans, this is exactly where you can do it. By the way, Gino himself maintains and maintains a fleet of over 30 classic cars in this garage together with his team, all of which are privately owned.
                            </p>
                        </div>

                    </div>

                </div>
            </section>

            {/* Interactive Fullscreen Portal Lightbox Modal with Zoom & Pan/Move support */}
            {selectedImage && createPortal(
                <div
                    className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 select-none"
                    onClick={() => setSelectedImage(null)}
                    onWheel={handleWheelZoom}
                    onMouseMove={onMouseMove}
                    onMouseUp={onMouseUp}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    {/* Top Helper Hint */}
                    <div className="absolute top-6 left-6 z-[100000] hidden sm:flex items-center gap-2 bg-black/70 border border-zinc-700/60 px-3 py-1.5 rounded-lg text-xs font-mono text-zinc-300 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        <span>Drag to move image &bull; Scroll or double-click to zoom</span>
                    </div>

                    {/* Control Toolbar Header */}
                    <div
                        className="fixed top-6 right-6 z-[100000] flex items-center gap-2 bg-black/80 border border-zinc-700/80 p-2 rounded-lg backdrop-blur-md text-white shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Zoom Out Button */}
                        <button
                            onClick={handleZoomOut}
                            className="p-2 hover:bg-zinc-800 rounded transition-colors text-zinc-200 hover:text-white font-bold"
                            title="Zoom Out (-)"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM13 10H7" />
                            </svg>
                        </button>

                        {/* Current Scale Display / Reset Button */}
                        <button
                            onClick={handleResetZoom}
                            className="px-2.5 py-1 hover:bg-zinc-800 rounded transition-colors text-xs font-mono font-semibold text-red-500"
                            title="Reset Position & Zoom (100%)"
                        >
                            {Math.round(zoomScale * 100)}%
                        </button>

                        {/* Zoom In Button */}
                        <button
                            onClick={handleZoomIn}
                            className="p-2 hover:bg-zinc-800 rounded transition-colors text-zinc-200 hover:text-white font-bold"
                            title="Zoom In (+)"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                            </svg>
                        </button>

                        {/* Move Reset Button */}
                        <button
                            onClick={() => setPosition({ x: 0, y: 0 })}
                            className="p-2 hover:bg-zinc-800 rounded transition-colors text-zinc-300 hover:text-white"
                            title="Recenter Position"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-2V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg>
                        </button>

                        {/* Divider */}
                        <div className="w-[1px] h-5 bg-zinc-700 mx-1" />

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="p-2 hover:bg-red-600 rounded transition-colors text-white"
                            title="Close preview"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Lightbox Main Image Frame with Drag Move & Scale */}
                    <div
                        className="w-full h-full flex items-center justify-center overflow-hidden p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage}
                            alt="Full screen preview"
                            draggable={false}
                            style={{
                                transform: `translate3d(${position.x}px, ${position.y}px, 0px) scale(${zoomScale})`,
                                transition: isDragging ? 'none' : 'transform 0.15s ease-out',
                            }}
                            className={`max-w-[90vw] max-h-[85vh] object-contain rounded-md shadow-2xl select-none ${isDragging ? 'cursor-grabbing' : 'cursor-grab'
                                }`}
                            onMouseDown={onMouseDown}
                            onTouchStart={onTouchStart}
                            onDoubleClick={() => {
                                setZoomScale((prev) => (prev === 1 ? 2 : 1));
                                setPosition({ x: 0, y: 0 });
                            }}
                        />
                    </div>
                </div>,
                document.body
            )}
        </main>
    );
}
