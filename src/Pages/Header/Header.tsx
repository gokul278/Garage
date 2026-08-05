import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useLanguage, type Language } from '../../Context/LanguageContext';
import logoImg from '../../assets/Logo/Logo.png';
import logoWhite from '../../assets/Logo/LogoWhite.png';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > 50) {
                setIsScrolled(true);
            } else if (currentScrollY < 15) {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent background scrolling when mobile sidebar drawer is open
    useEffect(() => {
        if (isSidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isSidebarOpen]);

    const navLinks = [
        { name: t('nav.home'), path: '/home' },
        { name: t('nav.doItYourself'), path: '/do-it-yourself' },
        { name: t('nav.yourWorkplace'), path: '/your-workplace' },
        { name: t('nav.ourOffers'), path: '/our-offers' },
        { name: t('nav.aboutUs'), path: '/about-us' },
        { name: t('nav.contactNow'), path: '/contact-now' },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
    };

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 w-full transition-all duration-300 z-40 border-b ${isScrolled
                ? 'bg-zinc-100/95 backdrop-blur-md border-zinc-200/80 text-zinc-900 shadow-md'
                : 'bg-black border-gray-800 text-white'
                }`}>
                {/* Header Content Wrapper */}
                <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-stretch transition-all duration-300 h-20">
                    {/* Logo Area */}
                    <div className="flex items-center">
                        <Link to="/home" className="flex items-center">
                            <img
                                src={!isScrolled ? logoImg : logoWhite}
                                alt="S&W Garage Logo"
                                className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-6">
                        <nav className="flex items-stretch h-20 space-x-1">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    className={({ isActive }) =>
                                        `relative flex items-center px-4 font-saira text-lg font-semibold tracking-wider transition-colors duration-200 h-full border-b-4 ${isActive || (link.path === '/home' && window.location.pathname === '/')
                                            ? 'text-[#e50914] border-[#e50914]'
                                            : isScrolled
                                                ? 'text-zinc-900 border-transparent hover:text-[#e50914] hover:border-zinc-300'
                                                : 'text-white border-transparent hover:text-[#e50914] hover:border-gray-700'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>

                        {/* German | English Toggle Selector */}
                        <div className={`flex items-center gap-1 p-1 rounded-full border text-xs font-bold font-mono transition-colors ${
                            isScrolled
                                ? 'bg-zinc-200/80 border-zinc-300 text-zinc-800'
                                : 'bg-zinc-900/80 border-zinc-700 text-zinc-200'
                        }`}>
                            <button
                                onClick={() => handleLanguageChange('de')}
                                className={`px-2.5 py-1 rounded-full transition-all ${
                                    language === 'de'
                                        ? 'bg-red-600 text-white shadow-sm'
                                        : 'hover:text-red-500'
                                }`}
                                title="Deutsch (German - Default)"
                            >
                                DE
                            </button>
                            <span className="text-zinc-500 font-normal">|</span>
                            <button
                                onClick={() => handleLanguageChange('en')}
                                className={`px-2.5 py-1 rounded-full transition-all ${
                                    language === 'en'
                                        ? 'bg-red-600 text-white shadow-sm'
                                        : 'hover:text-red-500'
                                }`}
                                title="English"
                            >
                                EN
                            </button>
                        </div>
                    </div>

                    {/* Mobile / Tablet Controls (Menu Button + Language Toggle) */}
                    <div className="lg:hidden flex items-center gap-3">
                        {/* Mobile Language Switcher */}
                        <div className="flex items-center gap-1 p-1 rounded-full border text-xs font-bold font-mono bg-zinc-900/80 border-zinc-700 text-zinc-200">
                            <button
                                onClick={() => handleLanguageChange('de')}
                                className={`px-2 py-0.5 rounded-full transition-all ${
                                    language === 'de'
                                        ? 'bg-red-600 text-white'
                                        : 'hover:text-red-500'
                                }`}
                            >
                                DE
                            </button>
                            <span className="text-zinc-500 font-normal">|</span>
                            <button
                                onClick={() => handleLanguageChange('en')}
                                className={`px-2 py-0.5 rounded-full transition-all ${
                                    language === 'en'
                                        ? 'bg-red-600 text-white'
                                        : 'hover:text-red-500'
                                }`}
                            >
                                EN
                            </button>
                        </div>

                        <button
                            onClick={toggleSidebar}
                            type="button"
                            className={`inline-flex items-center justify-center p-2 rounded-md transition-colors duration-200 ${isScrolled
                                ? 'text-zinc-900 hover:bg-zinc-200/80'
                                : 'text-white hover:bg-zinc-800'
                                } focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600`}
                            aria-expanded={isSidebarOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {/* Hamburger Icon */}
                            <svg
                                className="h-8 w-8"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2.5"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </header>

            {/* Sidebar Navigation Overlay Drawer for Mobile */}
            <div
                className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Full Dark Overlay */}
                <div
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={toggleSidebar}
                />

                {/* Solid Black Drawer Panel */}
                <div
                    className={`fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-black text-white border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out transform z-[101] ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div>
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between pb-6 border-b border-zinc-800 mb-6 bg-black">
                            <img src={logoImg} alt="S&W Garage Logo" className="h-10 w-auto object-contain" />
                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className="rounded-md p-2 text-zinc-300 hover:text-white hover:bg-zinc-900 focus:outline-none transition-all duration-200"
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-7 w-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2.5"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Language Selector in Drawer */}
                        <div className="mb-6 flex items-center justify-between bg-zinc-900 p-3 rounded-lg border border-zinc-800">
                            <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider">Language</span>
                            <div className="flex items-center gap-1 bg-black p-1 rounded-full border border-zinc-700 text-xs font-bold font-mono">
                                <button
                                    onClick={() => handleLanguageChange('de')}
                                    className={`px-3 py-1 rounded-full transition-all ${
                                        language === 'de' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
                                    }`}
                                >
                                    DE
                                </button>
                                <button
                                    onClick={() => handleLanguageChange('en')}
                                    className={`px-3 py-1 rounded-full transition-all ${
                                        language === 'en' ? 'bg-red-600 text-white' : 'text-zinc-400 hover:text-white'
                                    }`}
                                >
                                    EN
                                </button>
                            </div>
                        </div>

                        {/* Drawer Navigation Links */}
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={toggleSidebar}
                                    className={({ isActive }) =>
                                        `block px-4 py-3.5 rounded-lg font-saira text-base font-semibold tracking-wider transition-all duration-200 ${isActive || (link.path === '/home' && window.location.pathname === '/')
                                            ? 'bg-[#e50914] text-white shadow-md'
                                            : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    {/* Drawer Footer */}
                    <div className="pt-6 border-t border-zinc-800 text-center text-xs text-zinc-400 font-medium">
                        &copy; {new Date().getFullYear()} S&W Garage. All rights reserved.
                    </div>
                </div>
            </div>
        </>
    );
}
