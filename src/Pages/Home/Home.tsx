import HeroCarousel from './HeroCarousel';
import OpeningHoursSection from './OpeningHoursSection';
import ImplementationSection from './ImplementationSection';
import QuestionsContactSection from './QuestionsContactSection';
import { useLanguage } from '../../Context/LanguageContext';

export default function Home() {
    const { t } = useLanguage();

    return (
        <main className="w-full min-h-screen bg-white text-zinc-900 pt-20">
            {/* Animated Hero Carousel Banner */}
            <HeroCarousel />

            {/* What is a Do-It-Yourself Garage Section */}
            <section className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16 sm:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column - Headline & Titles */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Red Subtitle Question */}
                        <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                            {t('home.introQuestion')}
                        </h3>

                        {/* Main Headline with Highlighted Red Text */}
                        <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.00rem] leading-[1.15] tracking-tight">
                            {t('home.introHeadlinePart1')}
                            <span className="text-red-600">{t('home.introHeadlineRed')}</span>
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
                            {t('home.introP1')}
                        </p>

                        {/* Detailed Body Paragraph in Muted Gray */}
                        <p className="text-zinc-500 font-saira font-normal text-sm sm:text-base leading-relaxed">
                            {t('home.introP2')}
                        </p>
                    </div>

                </div>
            </section>

            {/* Opening Hours & Before/After Comparison Section */}
            <OpeningHoursSection />

            {/* Implementation Section with Watermark & Workshop Image Slider */}
            <ImplementationSection />

            {/* Questions & Location Contact Section */}
            <QuestionsContactSection />
        </main>
    );
}
