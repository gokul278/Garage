import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import DoitYourself from '../DoitYourself/DoitYourself';
import YourWorkplace from '../YourWorkplace/YourWorkplace';
import OurOffers from '../OurOffers/OurOffers';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import Imprint from '../Imprint/Imprint';
import PrivacyPolicy from '../PrivacyPolicy/PrivacyPolicy';
import ScrollToTop from '../../Components/ScrollToTop';
import PageTransition from '../../Components/PageTransition';

export default function Mainroutes() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Header />
            <PageTransition>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/do-it-yourself" element={<DoitYourself />} />
                    <Route path="/your-workplace" element={<YourWorkplace />} />
                    <Route path="/our-offers" element={<OurOffers />} />
                    <Route path="/about-us" element={<AboutUs />} />
                    <Route path="/contact-now" element={<ContactUs />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/imprint" element={<Imprint />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </PageTransition>
            <Footer />
        </BrowserRouter>
    );
}
