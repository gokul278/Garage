import { Link } from 'react-router-dom';
import logoWhite from '../../assets/Logo/Logo.png';

export default function Footer() {
    return (
        <footer className="w-full bg-black text-white font-saira pt-16 pb-8 border-t border-zinc-900">
            <div className="max-w-9xl mx-auto px-6 sm:px-12 lg:px-16">
                {/* 4-Column Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12">

                    {/* Column 1: Address */}
                    <div className="lg:col-span-3 space-y-3">
                        <h3 className="text-white font-bold text-2xl lg:text-[1.6rem] tracking-tight mb-4">
                            Address
                        </h3>
                        <div className="text-zinc-300 text-base leading-relaxed space-y-1 font-medium">
                            <p className="font-semibold text-white">Do-it-yourself garage</p>
                            <p>Santoro &amp; Wiederkehr AG</p>
                            <p>Schaffhauserstrasse 382</p>
                            <p className="font-semibold text-white">CH-8050 Zurich</p>
                        </div>
                    </div>

                    {/* Column 2: Opening Hours */}
                    <div className="lg:col-span-3 space-y-3">
                        <h3 className="text-white font-bold text-2xl lg:text-[1.6rem] tracking-tight mb-4">
                            Opening hours
                        </h3>
                        <div className="text-zinc-300 text-base leading-relaxed space-y-2 font-medium">
                            <p>
                                <span className="font-medium text-zinc-400">Monday – Friday:</span>{' '}
                                <strong className="font-semibold text-white">08:00 – 18:30</strong>
                            </p>
                            <p>
                                <span className="font-medium text-zinc-400">Saturday:</span>{' '}
                                <strong className="font-semibold text-white">08:00 – 12:30 *</strong>
                            </p>
                            <p>
                                <span className="font-medium text-zinc-400">Sunday:</span>{' '}
                                <span className="font-semibold text-red-500">Closed</span>
                            </p>
                            <p className="text-xs text-zinc-400 font-bold pt-1">
                                * By appointment only
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Contact Now */}
                    <div className="lg:col-span-3 space-y-3">
                        <h3 className="text-white font-bold text-2xl lg:text-[1.6rem] tracking-tight mb-4">
                            Contact Now
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
                                <span className="text-zinc-400">Tel.</span>{' '}
                                <a href="tel:0443119689" className="font-semibold text-white hover:text-red-500 transition-colors">
                                    044 311 96 89
                                </a>
                            </p>
                            <p>
                                <span className="text-zinc-400">Mob.</span>{' '}
                                <a href="tel:0763181575" className="font-semibold text-white hover:text-red-500 transition-colors">
                                    076 318 15 75
                                </a>
                            </p>
                            <p>
                                <span className="text-zinc-400">Fax</span>{' '}
                                <span className="font-semibold text-white">044 311 96 77</span>
                            </p>
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
                            Imprint
                        </Link>
                        <span className="text-zinc-700">|</span>
                        <Link to="/privacy-policy" className="hover:text-red-500 transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                    <div>
                        &copy; {new Date().getFullYear()} Garage Santoro &amp; Wiederkehr AG. All Rights Reserved.
                    </div>
                </div>

            </div>
        </footer>
    );
}
