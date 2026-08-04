import HeroCarousel from './HeroCarousel';

export default function Home() {
    return (
        <main className="w-full min-h-screen bg-white text-zinc-900">
            {/* Animated Hero Carousel Banner */}
            <HeroCarousel />

            {/* What is a Do-It-Yourself Garage Section */}
            <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column - Headline & Titles */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Red Subtitle Question */}
                        <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                            What is a do-it-yourself garage?
                        </h3>

                        {/* Main Headline with Highlighted Red Text */}
                        <h2 className="text-slate-900 tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.15] tracking-tight">
                            It's simple: You want to work on your vehicle. We have the{' '}
                            <span className="text-red-600">professional equipment.</span>
                        </h2>

                        {/* Two-Toned Accent Line Below Title */}
                        <div className="flex flex-col justify-center space-x-0 pt-2">
                            <div className="w-14 h-[3px] bg-zinc-900"></div>
                            <div className="w-36 h-[1px] bg-zinc-300"></div>
                        </div>
                    </div>

                    {/* Right Column - Description Text */}
                    <div className="lg:col-span-6 space-y-6 relative lg:pl-10">
                        {/* Vertical Two-Toned Accent Line */}
                        <div className="hidden lg:flex flex-col items-center absolute left-0 top-0">
                            <div className="w-[3px] h-10 bg-zinc-900"></div>
                            <div className="w-[1px] h-48 bg-zinc-300"></div>
                        </div>
                        {/* Featured Intro Paragraph in Dark Slate */}
                        <p className="text-[#1b4356] font-saira font-medium text-base sm:text-lg leading-relaxed">
                            You have an old car. A really old one. A classic car. Or a new one. It doesn't matter. The fact is that you like your car so much that you don't want to let anyone do it. And by no one do you mean: no one but yourself.
                        </p>

                        {/* Detailed Body Paragraph in Muted Gray */}
                        <p className="text-zinc-500 font-saira font-normal text-sm sm:text-base leading-relaxed">
                            We can understand you well. Because we understand cars. That's exactly why we at Santoro & Wiederkehr AG have created the do-it-yourself garage. Here you can do everything yourself: take your car apart down to the last fuel injector, change the tires, check the brakes, carry out air conditioning service, do an emissions test, prepare for the MFK ... In short: You can do whatever comes to mind with your darling on four wheels. It's your car. And of course your responsibility to ensure that everything really works in accordance with the law* after the work is done. But don't worry: If you need support, we're here for you. Just tell us, and we'll look over your shoulder as you do it yourself.
                        </p>
                    </div>

                </div>
            </section>
        </main>
    );
}
