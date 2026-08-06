import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import logoImg from '../../assets/Logo/Logo.png';
import imgInterior from '../../assets/ContactUs/Bild-5.jpg';
import imgClassicCar from '../../assets/ContactUs/Ebene-0.jpg';
import imgLiftReservation from '../../assets/ContactUs/Platzreservation.jpg';
import { useLanguage } from '../../Context/LanguageContext';

export default function ContactUs() {
    const { t } = useLanguage();

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
        <main className="w-full min-h-screen bg-white text-zinc-900 pt-20 font-saira">
            {/* Top Interactive Full-Width Light Map matching screenshot */}
            <section className="w-full relative h-[420px] sm:h-[500px] lg:h-[580px] bg-zinc-100 border-b border-zinc-200 overflow-hidden">
                {/* Embedded Monochromatic Google Map */}
                <iframe
                    title="S&W Garage Location Map"
                    src="https://maps.google.com/maps?q=Oerlikon,%20Zurich,%20Switzerland&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter grayscale-[15%] contrast-[105%]"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Center Red S&W Pin Marker Badge Overlay */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none drop-shadow-2xl flex flex-col items-center">
                    <div className="bg-[#e50914] text-white px-5 py-3 rounded-2xl flex items-center justify-center border-2 border-white shadow-2xl">
                        <img
                            src={logoImg}
                            alt="S&W Garage Pin"
                            className="h-8 sm:h-9 w-auto object-contain brightness-0 invert"
                        />
                    </div>
                    {/* Map Pin Point Arrow */}
                    <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[14px] border-t-[#e50914] -mt-0.5"></div>
                </div>
            </section>

            {/* 2 Side-by-Side Car Images Grid below map */}
            <section className="w-full bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Image 1: Red Interior Steering Wheel */}
                    <div
                        className="relative group overflow-hidden cursor-pointer w-full h-[280px] sm:h-[380px] lg:h-[480px]"
                        onClick={() => handleOpenImage(imgInterior)}
                    >
                        <img
                            src={imgInterior}
                            alt="Classic Vintage Car Red Interior"
                            className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Hover Magnifying Glass Overlay */}
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="p-3.5 bg-white text-slate-900 shadow-xl rounded-sm transform group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Image 2: White Classic Coupe */}
                    <div
                        className="relative group overflow-hidden cursor-pointer w-full h-[280px] sm:h-[380px] lg:h-[480px]"
                        onClick={() => handleOpenImage(imgClassicCar)}
                    >
                        <img
                            src={imgClassicCar}
                            alt="White Vintage Classic Car Coupe"
                            className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Hover Magnifying Glass Overlay */}
                        <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="p-3.5 bg-white text-slate-900 shadow-xl rounded-sm transform group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* "Call us - Reserve your place" Section */}
            <section className="w-full bg-white text-zinc-900 border-t border-zinc-200">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 items-center">

                    {/* Left Column: Red Monochrome Garage Lift Image */}
                    <div
                        className="lg:col-span-6 relative group overflow-hidden cursor-pointer w-full h-[320px] sm:h-[420px] lg:h-[500px]"
                        onClick={() => handleOpenImage(imgLiftReservation)}
                    >
                        <img
                            src={imgLiftReservation}
                            alt="S&W Garage Lift Reservation"
                            className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Hover Magnifying Glass Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <div className="p-3.5 bg-white text-slate-900 shadow-xl rounded-sm transform group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Call Us & Reserve Text */}
                    <div className="lg:col-span-6 px-6 sm:px-12 lg:px-16 py-12 sm:py-16 space-y-6">
                        {/* Subtitle */}
                        <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                            {t('contact.callUs')}
                        </h3>

                        {/* Title */}
                        <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.20rem] leading-[1.15] tracking-tight">
                            {t('contact.reserveTitle')}
                        </h2>

                        {/* Red Phone Number */}
                        <div>
                            <a
                                href="tel:+41797669960"
                                className="text-red-600 font-normal text-3xl sm:text-4xl lg:text-5xl tracking-wide hover:text-red-700 transition-colors inline-block"
                            >
                                +41 79 766 99 60
                            </a>
                        </div>

                        {/* Two-Toned Accent Line Below */}
                        <div className="flex flex-col justify-center space-x-0 pt-2">
                            <div className="w-14 h-[3px] bg-zinc-900"></div>
                            <div className="w-36 h-[1px] bg-zinc-300"></div>
                        </div>

                        {/* Body Text */}
                        <p className="text-zinc-600 font-saira text-base sm:text-lg leading-relaxed pt-2">
                            {t('contact.reserveNotice')}
                        </p>
                    </div>

                </div>
            </section>

            {/* "Write to us" Form Section */}
            <section className="w-full bg-white text-zinc-900 border-t border-zinc-200 py-16 sm:py-24 font-saira">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Text Information */}
                        <div className="lg:col-span-5 space-y-6">
                            {/* Headline */}
                            <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.20rem] leading-[1.15] tracking-tight">
                                {t('contact.writeTitle')}
                            </h2>

                            {/* Two-Toned Accent Line */}
                            <div className="flex flex-col justify-center space-x-0 pt-1">
                                <div className="w-14 h-[3px] bg-zinc-900"></div>
                                <div className="w-36 h-[1px] bg-zinc-300"></div>
                            </div>

                            {/* Paragraph 1 */}
                            <p className="text-[#1b4356] font-saira text-lg sm:text-lg leading-relaxed pt-1">
                                {t('contact.writeP1')}
                            </p>

                            {/* Two-Toned Accent Line */}
                            <div className="flex flex-col justify-center space-x-0 pt-2">
                                <div className="w-14 h-[3px] bg-zinc-900"></div>
                                <div className="w-36 h-[1px] bg-zinc-300"></div>
                            </div>

                            {/* Paragraph 2 */}
                            <p className="text-[#1b4356] font-saira text-lg leading-relaxed pt-1">
                                {t('contact.writeP2')}
                            </p>

                            {/* Two-Toned Accent Line */}
                            <div className="flex flex-col justify-center space-x-0 pt-2">
                                <div className="w-14 h-[3px] bg-zinc-900"></div>
                                <div className="w-36 h-[1px] bg-zinc-300"></div>
                            </div>
                        </div>

                        {/* Right Column: Reservation Form */}
                        <div className="lg:col-span-7 space-y-4">
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 font-saira">
                                {/* Name Input */}
                                <div>
                                    <input
                                        type="text"
                                        required
                                        placeholder={t('contact.formName')}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-none focus:outline-none focus:border-red-600 text-sm text-zinc-900 placeholder:text-zinc-400"
                                    />
                                </div>

                                {/* Mobile Input */}
                                <div>
                                    <input
                                        type="tel"
                                        required
                                        placeholder={t('contact.formPhone')}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-none focus:outline-none focus:border-red-600 text-sm text-zinc-900 placeholder:text-zinc-400"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <input
                                        type="email"
                                        required
                                        placeholder={t('contact.formEmail')}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-none focus:outline-none focus:border-red-600 text-sm text-zinc-900 placeholder:text-zinc-400"
                                    />
                                </div>

                                {/* Check-in Date Input */}
                                <div className="space-y-1">
                                    <label className="block text-xs font-semibold text-zinc-500">
                                        {t('contact.formDate')}
                                    </label>
                                    <input
                                        type="date"
                                        required
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-none focus:outline-none focus:border-red-600 text-sm text-zinc-900"
                                    />
                                </div>

                                {/* Vehicle Specs Input */}
                                <div>
                                    <input
                                        type="text"
                                        placeholder={t('contact.formSpecs')}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-none focus:outline-none focus:border-red-600 text-sm text-zinc-900 placeholder:text-zinc-400"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <textarea
                                        rows={5}
                                        required
                                        placeholder={t('contact.formMsg')}
                                        className="w-full px-4 py-3 bg-zinc-50 border border-zinc-300 rounded-none focus:outline-none focus:border-red-600 text-sm text-zinc-900 placeholder:text-zinc-400 resize-none"
                                    />
                                </div>

                                {/* Red Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="px-8 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase rounded-none transition-colors shadow-md"
                                    >
                                        {t('contact.formSubmit')}
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>

            {/* Interactive Fullscreen Portal Lightbox Modal */}
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

                    {/* Lightbox Main Image Frame */}
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
