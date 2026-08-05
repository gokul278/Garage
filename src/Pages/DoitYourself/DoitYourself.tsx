import { CalendarDays } from 'lucide-react';
import mechanicImg from '../../assets/DoitYourself/Mechaniker-Rad-blau.jpg';
import { Link } from 'react-router-dom';

export default function DoitYourself() {
    const steps = [
        {
            number: '1',
            title: 'You register with the Do-it-yourself-Garage',
            content: (
                <p>
                    Together we will discuss your needs and <strong className="font-semibold text-slate-900">select the workplace</strong> that is best suited to your project.
                </p>
            ),
        },
        {
            number: '2',
            title: "You'll be driving in with us",
            content: (
                <p>
                    On the big day of <strong className="font-semibold text-slate-900">DIY</strong> and <strong className="font-semibold text-slate-900">self-medying</strong>, you park your car in a parking lot at Siewerdtstrasse 5 and report to the reception. You will be instructed in your workplace by our staff and will receive the tools as well as the ordered spare parts or accessories.
                </p>
            ),
        },
        {
            number: '3',
            title: 'You work on your vehicle',
            content: (
                <p>
                    You can get refreshments at any time during your work. After all, you are <strong className="font-semibold text-slate-900">now your own boss</strong> and can take breaks whenever you want. And if you have any questions or problems, just contact our staff, who will be happy to help and advise you.
                </p>
            ),
        },
        {
            number: '4',
            title: 'You check out',
            content: (
                <div className="space-y-2">
                    <p>
                        When you&apos;ve finished your work, prepare the workstation and tools for return, clean them and put them back in their place - order is a must.
                    </p>
                    <p>
                        At the reception you will receive the bill, which you can check and pay. And then it&apos;s time to drive off with your brand-new, so to speak, but definitely self-pimped car!
                    </p>
                </div>
            ),
        },
    ];

    return (
        <main className="w-full min-h-screen bg-white text-zinc-900 pt-20 font-saira">
            {/* Top Intro Section */}
            <section className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-20">
                <div className="max-w-4xl space-y-6">
                    {/* Red Subtitle */}
                    <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                        You can do it. All by yourself. Do it yourself.
                    </h3>

                    {/* Main Headline */}
                    <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.2rem] leading-[1.15] tracking-tight">
                        Rent a garage space with a car lift - repair the car yourself.
                    </h2>

                    {/* Two-Toned Accent Line Below Title */}
                    <div className="flex flex-col justify-center space-x-0 pt-2">
                        <div className="w-14 h-[3px] bg-zinc-900"></div>
                        <div className="w-36 h-[1px] bg-zinc-300"></div>
                    </div>

                    {/* Paragraphs */}
                    <div className="space-y-4 pt-4 text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed">
                        <p>
                            The do-it-yourself garage is well organized. To ensure that the management of the workstations, the provision of tools and equipment and the disposition of any spare parts that may be required run smoothly, you should reserve your workstation at least 5 working days in advance.
                        </p>
                        <p className="font-medium text-slate-800">
                            This is how easy it is to get your classic car - or any current vehicle model - in shape in four steps:
                        </p>
                    </div>
                </div>

                {/* 4 Steps Section: Left vertical 3D HTML/CSS numbered list + Right mechanic image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-12">

                    {/* Left Column: Vertical Steps List */}
                    <div className="lg:col-span-7 space-y-10">
                        {steps.map((step) => (
                            <div key={step.number} className="flex items-start gap-6 group">
                                {/* Pure HTML & CSS 3D Metallic Number Badge */}
                                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-slate-100 via-zinc-200 to-zinc-400 p-1.5 shadow-[0_10px_22px_rgba(0,0,0,0.22)] shrink-0 transition-transform duration-300 group-hover:scale-105">
                                    <div className="w-full h-full rounded-full bg-gradient-to-b from-[#1c4558] via-[#153645] to-[#0c202a] flex items-center justify-center border border-white/20 shadow-[inset_0_4px_8px_rgba(0,0,0,0.4)]">
                                        <span className="text-white font-black text-2xl sm:text-3xl font-saira drop-shadow-[0_2px_4px_rgba(0,0,0,0.7)] leading-none pt-0.5">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="space-y-2 pt-1">
                                    {/* Red Line on Hover */}
                                    <div className="w-0 group-hover:w-24 h-[2px] bg-[#e50914] transition-all duration-300 ease-out"></div>
                                    <h4 className="text-[#1b4356] font-semibold text-lg sm:text-xl font-saira group-hover:text-red-600 transition-colors">
                                        {step.title}
                                    </h4>
                                    <div className="text-zinc-600 text-sm sm:text-base leading-relaxed font-saira">
                                        {step.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Column: Mechanic image leaning on tire */}
                    <div className="lg:col-span-5 flex justify-center lg:justify-end">
                        <div className="relative max-w-sm sm:max-w-md w-full">
                            <img
                                src={mechanicImg}
                                alt="Mechanic leaning on tire"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>

                </div>
            </section>

            {/* Super Simple / Reservation Callout Section */}
            <section className="w-full bg-white text-zinc-900 border-t border-zinc-200 py-16 sm:py-20 font-saira">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                        {/* Left Column: Heading & Description Text */}
                        <div className="lg:col-span-7 space-y-4">
                            <h2 className="text-[#1b4356] font-saira font-black text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-[1.15]">
                                It&apos;s all super simple, right?
                            </h2>

                            <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                                So, if a screw is loose on your car, it&apos;s best to contact us right away. You can do it again.
                            </p>

                            <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed">
                                Contact us and secure your assembly space for your next vehicle project in good time!
                            </p>
                        </div>

                        {/* Right Column: Reservation Callout Badge */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            <Link
                                to="/contact-now"
                                className="w-full max-w-sm bg-transparent p-4 flex flex-col items-center justify-center text-center space-y-2 group cursor-pointer"
                            >
                                {/* Lucide Red Calendar Icon */}
                                <CalendarDays className="w-24 h-24 sm:w-28 sm:h-28 text-[#e50914] stroke-[1.75] transition-transform duration-300 group-hover:scale-105" />

                                {/* Red Underline Accent with Expand Animation on Hover */}
                                <div className="w-12 group-hover:w-28 h-[2px] my-4 bg-[#e50914] transition-all duration-300 my-1"></div>

                                {/* Title */}
                                <h3 className="text-[#e50914] font-saira font-semibold text-3xl sm:text-4xl lg:text-[2.6rem] tracking-wider uppercase leading-none pt-1">
                                    RESERVATION
                                </h3>

                                {/* Subtitle */}
                                <p className="text-[#1b4356] font-saira font-medium text-base sm:text-lg pt-1">
                                    Contact form, e-mail or call
                                </p>
                            </Link>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    );
}
