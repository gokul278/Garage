import offerImg from '../../assets/OurOffers/home_tuning_offer1.jpg';
import girlImg from '../../assets/OurOffers/Girl-Schlüssel-Jeans.jpg';
import payMethodsImg from '../../assets/OurOffers/Brand/SW-PayMethods-1-768x181.jpg';
import { useLanguage } from '../../Context/LanguageContext';

export default function OurOffers() {
    const { t } = useLanguage();

    const priceList = [
        { offerKey: 'offers.price1', price: 'CHF 7.-' },
        { offerKey: 'offers.price2', price: 'CHF 32.-' },
        { offerKey: 'offers.price3', price: 'CHF 60.-' },
        { offerKey: 'offers.price4', price: 'CHF 45.-' },
        { offerKey: 'offers.price5', price: 'CHF 40.-' },
        { offerKey: 'offers.price6', price: 'CHF 70.-' },
        { offerKey: 'offers.price7', price: 'CHF 60.-' },
        { offerKey: 'offers.price8', price: 'CHF 25.-' },
        { offerKey: 'offers.price9', price: 'CHF 43.75.-' },
        { offerKey: 'offers.price10', price: 'CHF 20.-' },
        { offerKey: 'offers.price11', price: 'CHF 142.-' },
        { offerKey: 'offers.price12', price: 'CHF 17.50' },
        { offerKey: 'offers.price13', price: 'CHF 28.-' },
        { offerKey: 'offers.price14', price: 'CHF 7.-' },
    ];

    const checklistItems = [
        { key: 'offers.check1' },
        { key: 'offers.check2' },
        { key: 'offers.check3' },
        { key: 'offers.check4' },
        { key: 'offers.check5' },
        { key: 'offers.check6' },
        { key: 'offers.check7' },
    ];

    return (
        <main className="w-full min-h-screen bg-white text-zinc-900 pt-20 font-saira">
            {/* Top Main Offer Section matching screenshot */}
            <section className="w-full pl-6 sm:pl-12 lg:pl-20 pr-0 py-16 sm:py-20 overflow-hidden">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Offer Content */}
                    <div className="lg:col-span-6 space-y-6 max-w-2xl">
                        {/* Red Subtitle */}
                        <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                            {t('offers.subtitle')}
                        </h3>

                        {/* Main Headline */}
                        <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.75rem] leading-[1.15] tracking-tight">
                            {t('offers.headline')}
                        </h2>

                        {/* Two-Toned Accent Line Below Title */}
                        <div className="flex flex-col justify-center space-x-0 pt-2">
                            <div className="w-14 h-[3px] bg-zinc-900"></div>
                            <div className="w-36 h-[1px] bg-zinc-300"></div>
                        </div>

                        {/* Paragraph */}
                        <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                            {t('offers.p1')}
                        </p>
                    </div>

                    {/* Right Column: Engine Offer Image extending to right viewport edge */}
                    <div className="lg:col-span-6 flex justify-end items-start w-full pr-0">
                        <img
                            src={offerImg}
                            alt="Bring your car - Garage Offers"
                            className="w-full h-auto object-contain object-right max-h-[580px]"
                        />
                    </div>

                </div>
            </section>

            {/* 2-Column Section matching screenshot: Left Checklist & Right Pricing Details */}
            <section className="w-full bg-white text-zinc-900 border-t border-zinc-200 py-16 sm:py-20 font-saira">
                <div className="max-w-9xl mx-auto px-6 sm:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Checklist of Garage Features */}
                        <div className="lg:col-span-6 space-y-6">
                            {/* Headline */}
                            <div className="space-y-1">
                                <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                                    {t('offers.checklistSubtitle')}
                                </h3>
                                <h2 className="text-red-600 font-saira font-black text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.15] tracking-tight">
                                    {t('offers.checklistHeadline')}
                                </h2>
                            </div>

                            {/* Sub-label */}
                            <p className="text-zinc-600 font-saira text-base font-medium pt-2">
                                {t('offers.checklistIntro')}
                            </p>

                            {/* Checklist */}
                            <div className="space-y-4 pt-2">
                                {checklistItems.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 pb-3 border-b border-zinc-100 last:border-0">
                                        <span className="text-[#1b4356] font-bold text-lg leading-tight shrink-0 pt-0.5">
                                            ✓
                                        </span>
                                        <p className="text-[#1b4356] font-saira text-sm sm:text-base leading-relaxed">
                                            {t(item.key)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Pricing & Rent Details */}
                        <div className="lg:col-span-6 space-y-6">
                            {/* Headline */}
                            <div className="space-y-2">
                                <h3 className="text-red-600 font-saira font-semibold text-xl sm:text-2xl lg:text-3xl leading-snug">
                                    {t('offers.rentSubtitle')}
                                </h3>
                                <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.20rem] leading-[1.15] tracking-tight">
                                    {t('offers.rentHeadline')}
                                </h2>
                            </div>

                            {/* Two-Toned Accent Line Below Title */}
                            <div className="flex flex-col justify-center space-x-0 pt-1">
                                <div className="w-14 h-[3px] bg-zinc-900"></div>
                                <div className="w-36 h-[1px] bg-zinc-300"></div>
                            </div>

                            {/* Highlight Paragraph */}
                            <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                                {t('offers.rentP1')}
                            </p>

                            {/* Paragraph 1 */}
                            <p className="text-zinc-600 font-saira text-sm sm:text-base leading-relaxed">
                                {t('offers.rentP2')}
                            </p>

                            {/* Paragraph 2 */}
                            <p className="text-zinc-600 font-saira text-sm sm:text-base leading-relaxed">
                                {t('offers.rentP3')}
                            </p>

                            {/* Paragraph 3 */}
                            <p className="text-[#1b4356] font-saira text-base sm:text-lg font-semibold leading-relaxed pt-2">
                                {t('offers.rentP4')}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Price List Section matching design screenshot */}
            <section className="w-full bg-white text-zinc-900 border-t border-zinc-200 py-16 sm:py-20 font-saira">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Column: Mechanic Girl Graphic */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-start">
                            <img
                                src={girlImg}
                                alt="S&W Garage Mechanic Girl holding wrench"
                                className="w-full max-w-sm sm:max-w-md h-auto object-contain"
                            />
                        </div>

                        {/* Right Column: Price List Table */}
                        <div className="lg:col-span-7 space-y-4">
                            {/* Headline */}
                            <h2 className="text-[#1b4356] font-saira font-black text-3xl sm:text-4xl lg:text-[3.75rem] leading-[1.15] tracking-tight">
                                {t('offers.priceHeadline')}
                            </h2>
                            <p className="text-xs text-zinc-400 font-saira pb-2">
                                {t('offers.priceNotice')}
                            </p>

                            {/* Table Header */}
                            <div className="flex justify-between items-center pb-2 border-b-2 border-slate-900 font-saira">
                                <span className="text-xl font-bold text-slate-900">{t('offers.tableHeaderOffers')}</span>
                                <span className="text-xl font-bold text-slate-900 text-right">{t('offers.tableHeaderPrices')}</span>
                            </div>

                            {/* Table Rows */}
                            <div className="divide-y divide-zinc-200">
                                {priceList.map((item, idx) => (
                                    <div key={idx} className="py-3 flex justify-between items-center gap-4 text-sm sm:text-base font-saira">
                                        <span className="text-[#1b4356] font-medium leading-normal">
                                            {t(item.offerKey)}
                                        </span>
                                        <span className="font-semibold text-slate-900 whitespace-nowrap text-right">
                                            {item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Dispensing Counter Note */}
                            <p className="text-sm font-semibold text-slate-800 pt-4 font-saira">
                                {t('offers.dispensingNotice')}
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Means of Payment Black Banner Section with container spacing matching screenshot */}
            <section className="w-full bg-white py-12 sm:py-16 font-saira">
                <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20">
                    <div className="w-full bg-black text-white p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
                        {/* Left Text */}
                        <div className="space-y-2 text-center md:text-left max-w-xl">
                            <h3 className="text-white font-saira font-black text-3xl sm:text-4xl lg:text-[3.75rem] tracking-tight leading-none">
                                {t('offers.paymentTitle')}
                            </h3>
                            <p className="text-zinc-300 font-saira text-sm sm:text-base font-normal pt-1">
                                {t('offers.paymentDesc')}
                            </p>
                        </div>

                        {/* Right Payment Brand Icons Image */}
                        <div className="shrink-0">
                            <img
                                src={payMethodsImg}
                                alt="Accepted Payment Methods: PostFinance, EC, Visa, MasterCard, Amex"
                                className="h-12 sm:h-16 w-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
