import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logoImg from '../../assets/Logo/Logo.png';
import logoWhite from '../../assets/Logo/LogoWhite.png';

export default function Header() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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

    const navLinks = [
        { name: 'Home', path: '/home' },
        { name: 'Do-it-yourself', path: '/do-it-yourself' },
        { name: 'Your workplace', path: '/your-workplace' },
        { name: 'Our offers', path: '/our-offers' },
        { name: 'About us', path: '/about-us' },
        { name: 'Contact Now', path: '/contact-now' },
    ];

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className={`sticky top-0 transition-all duration-300 z-50 border-b ${isScrolled
            ? 'bg-zinc-100/75 backdrop-blur-md border-zinc-200/80 text-zinc-900 shadow-md'
            : 'bg-black border-gray-800 text-white'
            }`}>
            {/* Header Content Wrapper */}
            <div className="px-4 sm:px-6 lg:px-8 flex justify-between items-stretch transition-all duration-300 h-20">
                {/* Logo Area */}
                <div className="flex items-center">
                    <Link to="/home" className="flex items-center">
                        <img
                            src={isScrolled ? logoWhite : logoImg}
                            alt="S&W Garage Logo"
                            className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-all duration-300"
                        />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-stretch h-full space-x-1">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.name}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative flex items-center px-4 font-saira text-lg font-normal tracking-wider transition-colors duration-200 h-full border-b-4 ${
                                    isActive || (link.path === '/home' && window.location.pathname === '/')
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

                {/* Mobile / Tablet Menu Button */}
                <div className="lg:hidden flex items-center">
                    <button
                        onClick={toggleSidebar}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-red-600 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-600 transition-colors duration-200"
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

            {/* Sidebar Navigation Drawer for Tablet/Mobile */}
            <div
                className={`fixed inset-0 z-50 lg:hidden flex transition-opacity duration-300 ease-in-out ${isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            >
                {/* Backdrop overlay */}
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
                    onClick={toggleSidebar}
                />

                {/* Drawer Menu */}
                <div
                    className={`fixed top-0 right-0 bottom-0 w-80 max-w-full bg-zinc-950 border-l border-zinc-800 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div>
                        {/* Drawer Header */}
                        <div className="flex items-center justify-between pb-6 border-b border-zinc-800 mb-6">
                            <img src={logoImg} alt="S&W Garage Logo" className="h-10 w-auto object-contain" />
                            <button
                                onClick={toggleSidebar}
                                type="button"
                                className="rounded-md p-1.5 text-zinc-400 hover:text-red-600 hover:bg-zinc-900 focus:outline-none transition-all duration-200"
                            >
                                <span className="sr-only">Close menu</span>
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Drawer Links */}
                        <nav className="flex flex-col space-y-2">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.name}
                                    to={link.path}
                                    onClick={toggleSidebar}
                                    className={({ isActive }) =>
                                        `block px-4 py-3 rounded-lg font-saira text-base font-semibold tracking-wider transition-all duration-200 ${isActive || (link.path === '/home' && window.location.pathname === '/')
                                            ? 'bg-[#e50914]/10 text-[#e50914] border-l-4 border-[#e50914] pl-3'
                                            : 'text-zinc-300 hover:bg-zinc-900 hover:text-white pl-4'
                                        }`
                                    }
                                >
                                    {link.name}
                                </NavLink>
                            ))}
                        </nav>
                    </div>

                    {/* Drawer Footer */}
                    <div className="pt-6 border-t border-zinc-800 text-center text-xs text-zinc-500">
                        &copy; {new Date().getFullYear()} S&W Garage. All rights reserved.
                    </div>
                </div>
            </div>
        </header>
    );
}

