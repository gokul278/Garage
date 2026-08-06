import { Link } from 'react-router-dom';
import { useLanguage } from '../../Context/LanguageContext';
import logoWhite from '../../assets/Logo/Logo.png';

export default function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="w-full bg-black text-white font-saira pt-16 pb-8 border-t border-zinc-900">
            <div className="max-w-9xl mx-auto px-6 sm:px-12 lg:px-16">
                {/* 4-Column Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

                    {/* Column 1: Address */}
                    <div className="lg:col-span-3 space-y-3">
                        <h3 className="text-white font-bold text-2xl lg:text-[1.6rem] tracking-tight mb-4">
                            {t('footer.addressTitle')}
                        </h3>
                        
                        <div className="text-zinc-300 text-base leading-relaxed space-y-1 font-medium">
                            <p className="font-semibold text-white">{t('footer.companyName')}</p>
                            <p>
                                <a
                                    href="https://www.zuericar.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-red-500 transition-colors"
                                >
                                    www.zuericar.com
                                </a>
                            </p>
                            {/* <p>{t('footer.companySub')}</p> */}
                            <p>{t('footer.addressStreet')}</p>
                            <p className="font-semibold text-white">{t('footer.addressCity')}</p>
                        </div>
                    </div>

                    {/* Column 2: Opening Hours */}
                    <div className="lg:col-span-3 space-y-3">
                        <h3 className="text-white font-bold text-2xl lg:text-[1.6rem] tracking-tight mb-4">
                            {t('footer.hoursTitle')}
                        </h3>
                        <div className="text-zinc-300 text-base leading-relaxed space-y-2 font-medium">
                            <p>
                                <span className="font-medium text-zinc-400">{t('footer.monFri')}</span>{' '}
                                <strong className="font-semibold text-white">08:00 – 18:30</strong>
                            </p>
                            <p>
                                <span className="font-medium text-zinc-400">{t('footer.sat')}</span>{' '}
                                <strong className="font-semibold text-white">08:00 – 12:30 *</strong>
                            </p>
                            <p>
                                <span className="font-medium text-zinc-400">{t('footer.sun')}</span>{' '}
                                <span className="font-semibold text-red-500">{t('footer.closed')}</span>
                            </p>
                            <p className="text-xs text-zinc-400 font-bold pt-1">
                                {t('footer.appointmentOnly')}
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Contact Now */}
                    <div className="lg:col-span-3 space-y-3">
                        <h3 className="text-white font-bold text-2xl lg:text-[1.6rem] tracking-tight mb-4">
                            {t('footer.contactTitle')}
                        </h3>
                        <div className="text-zinc-300 text-base leading-relaxed space-y-1.5 font-medium">
                            <p className="flex items-center gap-1.5 flex-wrap">
                                <span className="text-zinc-400">E-mail:</span>
                                <a
                                    href="mailto:info@doityourselfgarage.ch"
                                    className="text-white hover:text-red-500 transition-colors font-medium underline underline-offset-2"
                                >
                                    info@doityourselfgarage.ch
                                </a>
                            </p>
                            <p>
                                <span className="text-zinc-400">Mob.</span>{' '}
                                <a href="tel:+41797669960" className="font-semibold text-white hover:text-red-500 transition-colors">
                                    +41 79 766 99 60
                                </a>
                            </p>
                            <p>
                                <span className="text-zinc-400">Mob.</span>{' '}
                                <a href="tel:+41432999960" className="font-semibold text-white hover:text-red-500 transition-colors">
                                    +41 43 299 99 60
                                </a>
                            </p>
                            {/* <p>
                                <span className="text-zinc-400">Fax</span>{' '}
                                <span className="font-semibold text-white">044 311 96 77</span>
                            </p> */}
                        </div>
                    </div>

                    {/* Column 4: Brand Logo */}
                    <div className="lg:col-span-3 flex flex-col items-start lg:items-end justify-start pt-1">
                        <Link to="/home" className="inline-block group">
                            <img
                                src={logoWhite}
                                alt="S&W Garage Logo"
                                className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                            />
                        </Link>
                    </div>

                </div>

                {/* Bottom Bar: Copyright & Legal */}
                <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-medium">
                    <div className="flex items-center space-x-2">
                        <Link to="/imprint" className="hover:text-red-500 transition-colors">
                            {t('footer.imprint')}
                        </Link>
                        <span className="text-zinc-700">|</span>
                        <Link to="/privacy-policy" className="hover:text-red-500 transition-colors">
                            {t('footer.privacy')}
                        </Link>
                    </div>
                    <div>
                        &copy; {new Date().getFullYear()} Garage Santoro &amp; Wiederkehr AG. {t('footer.rights')}
                    </div>
                </div>

            </div>
        </footer>
    );
}
