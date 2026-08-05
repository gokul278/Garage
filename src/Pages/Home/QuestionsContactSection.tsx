import logoImg from '../../assets/Logo/Logo.png';

export default function QuestionsContactSection() {
    return (
        <section className="w-full bg-white text-zinc-900 pt-6 sm:pt-8 pb-16 sm:pb-24 font-saira">
            <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Questions & Phone */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Red Subtitle */}
                        <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                            Just no inhibitions
                        </h3>

                        {/* Main Title */}
                        <h2 className="text-slate-900 tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight">
                            Do you have any questions? We know the answers.
                        </h2>

                        {/* Phone Number */}
                        <div>
                            <a
                                href="tel:0443119689"
                                className="text-red-600 font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wide hover:text-red-700 transition-colors inline-block"
                            >
                                044 311 96 89
                            </a>
                        </div>

                        {/* Two-Toned Accent Line */}
                        <div className="flex flex-col justify-center space-x-0 pt-2">
                            <div className="w-14 h-[3px] bg-zinc-900"></div>
                            <div className="w-36 h-[1px] bg-zinc-300"></div>
                        </div>
                    </div>

                    {/* Right Column: Google Map Container */}
                    <div className="lg:col-span-6 w-full">
                        <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-lg border border-zinc-200 group bg-zinc-100">
                            {/* Embedded Google Map */}
                            <iframe
                                title="S&W Garage Location Map"
                                src="https://maps.google.com/maps?q=Oerlikon,%20Zurich,%20Switzerland&t=&z=14&ie=UTF8&iwloc=&output=embed"
                                className="w-full h-full border-0 filter grayscale-[20%] contrast-[105%]"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />

                            {/* Red S&W Map Badge Overlay in Center */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none drop-shadow-xl flex flex-col items-center">
                                <div className="bg-[#e50914] text-white px-4 py-2.5 rounded-2xl flex items-center justify-center border-2 border-white shadow-2xl">
                                    <img
                                        src={logoImg}
                                        alt="S&W Garage"
                                        className="h-7 w-auto object-contain brightness-0 invert"
                                    />
                                </div>
                                {/* Map Pin Arrow Pointer */}
                                <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[10px] border-t-[#e50914] -mt-0.5"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
