import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        // Automatically scroll to the top of the page on route change
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant',
        });
    }, [pathname]);

    return null;
}
