import { useLanguage } from '../../Context/LanguageContext';

export default function PrivacyPolicy() {
    const { t } = useLanguage();

    return (
        <main className="w-full min-h-screen bg-white text-zinc-900 pt-24 sm:pt-28 pb-16 font-saira">
            <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 space-y-8">

                {/* Title */}
                <h1 className="text-[#1b4356] font-saira font-normal text-3xl sm:text-4xl lg:text-[3.75rem] leading-[1.15] tracking-tight">
                    {t('privacy.title')}
                </h1>

                {/* Intro */}
                <p className="text-zinc-600 font-saira text-xs sm:text-sm leading-relaxed max-w-4xl">
                    {t('privacy.intro')}
                </p>

                <div className="space-y-8 max-w-4xl text-zinc-600 font-saira text-xs sm:text-sm leading-relaxed">

                    {/* Section 1 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec1Title')}
                        </h2>
                        <p>{t('privacy.sec1Text')}</p>
                    </div>

                    {/* Section 2 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec2Title')}
                        </h2>
                        <p>{t('privacy.sec2Text')}</p>
                    </div>

                    {/* Section 3 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec3Title')}
                        </h2>
                        <ul className="space-y-1.5 pl-1 pt-1">
                            <li>&bull; {t('privacy.sec3Item1')}</li>
                            <li>&bull; {t('privacy.sec3Item2')}</li>
                            <li>&bull; {t('privacy.sec3Item3')}</li>
                            <li>&bull; {t('privacy.sec3Item4')}</li>
                        </ul>
                    </div>

                    {/* Section 4 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec4Title')}
                        </h2>
                        <p>{t('privacy.sec4Text')}</p>
                    </div>

                    {/* Section 5 */}
                    <div className="space-y-3">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec5Title')}
                        </h2>
                        <p>{t('privacy.sec5Text1')}</p>

                        <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg space-y-1 font-medium text-xs sm:text-sm text-slate-800">
                            <p className="font-bold">Garage Santoro &amp; Wiederkehr AG</p>
                            <p>Schaffhauserstrasse 382,</p>
                            <p>CH-8050 Zurich</p>
                            <p>Switzerland</p>
                            <p className="pt-2">
                                E-mail:{' '}
                                <a href="mailto:info@doityourselfgarage.ch" className="text-red-600 hover:underline">
                                    info@doityourselfgarage.ch
                                </a>
                            </p>
                            <p>Tel. +41 79 766 99 60</p>
                            <p>Fax 044 311 96 77</p>
                        </div>

                        <p className="pt-1">{t('privacy.sec5Text2')}</p>
                    </div>

                    {/* Section 6 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec6Title')}
                        </h2>
                        <p>{t('privacy.sec6Text')}</p>
                    </div>

                    {/* Section 7 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec7Title')}
                        </h2>
                        <p>{t('privacy.sec7Text')}</p>
                    </div>

                    {/* Section 8 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec8Title')}
                        </h2>
                        <p>{t('privacy.sec8Text')}</p>
                    </div>

                    {/* Section 9 */}
                    <div className="space-y-3">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec9Title')}
                        </h2>
                        <p>{t('privacy.sec9Text1')}</p>
                        <p>{t('privacy.sec9Text2')}</p>
                        <ul className="space-y-1 pl-1">
                            <li>&bull; IP address</li>
                            <li>&bull; Browser type and version</li>
                            <li>&bull; the website from which you visit us</li>
                            <li>&bull; The operating system you are using</li>
                            <li>&bull; Date and time of your visits to each website</li>
                            <li>&bull; Information on the attribution of your visit or order to a marketing channel</li>
                        </ul>
                        <p className="pt-1">{t('privacy.sec9Text3')}</p>
                        <p>{t('privacy.sec9Text4')}</p>
                    </div>

                    {/* Section 10 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec10Title')}
                        </h2>
                        <p>{t('privacy.sec10Text')}</p>
                    </div>

                    {/* Section 11 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec11Title')}
                        </h2>
                        <p>{t('privacy.sec11Text')}</p>
                    </div>

                    {/* Section 12 */}
                    <div className="space-y-3">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec12Title')}
                        </h2>
                        <p>{t('privacy.sec12Text')}</p>

                        <div className="bg-zinc-50 border border-zinc-200 p-4 rounded-lg space-y-1 font-medium text-xs sm:text-sm text-slate-800">
                            <p className="font-bold">Garage Santoro &amp; Wiederkehr AG</p>
                            <p>Schaffhauserstrasse 382,</p>
                            <p>CH-8050 Zurich</p>
                            <p>Switzerland</p>
                            <p className="pt-2">
                                E-mail:{' '}
                                <a href="mailto:info@doityourselfgarage.ch" className="text-red-600 hover:underline">
                                    info@doityourselfgarage.ch
                                </a>
                            </p>
                            <p>Tel. +41 79 766 99 60</p>
                            <p>Fax 044 311 96 77</p>
                        </div>
                    </div>

                    {/* Section 13 */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-semibold text-base sm:text-lg uppercase tracking-wide">
                            {t('privacy.sec13Title')}
                        </h2>
                        <p>{t('privacy.sec13Text')}</p>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright Notice */}
            <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 text-xs text-zinc-400 font-saira">
                Copyright &copy; {new Date().getFullYear()} Doityourself Garage of Santoro &amp; Wiederkehr AG
            </div>
        </main>
    );
}
