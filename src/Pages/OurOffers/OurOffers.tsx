import OpeningHoursSection from '../Home/OpeningHoursSection';
import offerImg from '../../assets/OurOffers/home_tuning_offer1.jpg';
import girlImg from '../../assets/OurOffers/Girl-Schlüssel-Jeans.jpg';
import payMethodsImg from '../../assets/OurOffers/Brand/SW-PayMethods-1-768x181.jpg';

export default function OurOffers() {
    const priceList = [
        { offer: 'Flat rate for disposal and cleaning', price: 'CHF 7.-' },
        { offer: 'Work lift and tool rental per hour', price: 'CHF 32.-' },
        { offer: 'Evaporate the engine and chassis on the washing pit', price: 'CHF 60.-' },
        { offer: 'Washing pit in connection with workstation', price: 'CHF 45.-' },
        { offer: 'Diagnostics on the vehicle without tools', price: 'CHF 40.-' },
        { offer: 'Diagnostic tool for all vehicles', price: 'CHF 70.-' },
        { offer: 'Mounting tires ( 4 x ) on rim incl. balancing weights | Prerequisite: Experience with work equipment', price: 'CHF 60.-' },
        { offer: 'Brake test on brake test bench', price: 'CHF 25.-' },
        { offer: 'Oil and oil filter replacement incl. Altoel disposal', price: 'CHF 43.75.-' },
        { offer: 'Overnight stay | Storage of your vehicle per night', price: 'CHF 20.-' },
        { offer: 'With the help of a professional per hour | You will be charged at CHF 2 per minute', price: 'CHF 142.-' },
        { offer: '1 litre engine oil 10W40', price: 'CHF 17.50' },
        { offer: '1 litre engine oil 5W30', price: 'CHF 28.-' },
        { offer: '1 can of brake cleaner', price: 'CHF 7.-' },
    ];

    const checklistItems = [
        {
            text: (
                <>
                    Rent a <strong className="font-bold text-slate-900">garage workstation by the hour with a car lift</strong> and everything that goes with it to repair your car yourself
                </>
            ),
        },
        {
            text: (
                <>
                    Rent a <strong className="font-bold text-slate-900">washing pit or a large space</strong> by the hour
                </>
            ),
        },
        {
            text: (
                <>
                    As a renter, you can obtain spare parts and accessories <strong className="font-bold text-slate-900">at favourable conditions</strong>
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-slate-900">Get help</strong> from one of our mechanics and show you how to repair and maintain your car yourself
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-slate-900">Bring your own accessories and spare parts</strong> or order them from us in advance
                </>
            ),
        },
        {
            text: (
                <>
                    Dispose of replaced liquids and materials <strong className="font-bold text-slate-900">of all kinds</strong>
                </>
            ),
        },
        {
            text: (
                <>
                    <strong className="font-bold text-slate-900">Bring your own tools</strong> or use our <strong className="font-bold text-slate-900">professionally equipped tool range</strong>
                </>
            ),
        },
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
                            We&apos;ll get it for you
                        </h3>

                        {/* Main Headline */}
                        <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.75rem] leading-[1.15] tracking-tight">
                            Bring your car. We&apos;ll take care of the rest for you.
                        </h2>

                        {/* Two-Toned Accent Line Below Title */}
                        <div className="flex flex-col justify-center space-x-0 pt-2">
                            <div className="w-14 h-[3px] bg-zinc-900"></div>
                            <div className="w-36 h-[1px] bg-zinc-300"></div>
                        </div>

                        {/* Paragraph */}
                        <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                            You have an old car. A really old one. A classic car. Or a new one.. It doesn&apos;t matter. The fact is that you like your car so much that you don&apos;t want to let anyone do it. And by no one do you mean: no one but yourself.
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
                                    Even cheaper:
                                </h3>
                                <h2 className="text-red-600 font-saira font-black text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.15] tracking-tight">
                                    No more basic tax with immediate effect!
                                </h2>
                            </div>

                            {/* Sub-label */}
                            <p className="text-zinc-600 font-saira text-base font-medium pt-2">
                                You can do all this in the do-it-yourself garage:
                            </p>

                            {/* Checklist */}
                            <div className="space-y-4 pt-2">
                                {checklistItems.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 pb-3 border-b border-zinc-100 last:border-0">
                                        <span className="text-[#1b4356] font-bold text-lg leading-tight shrink-0 pt-0.5">
                                            ✓
                                        </span>
                                        <p className="text-[#1b4356] font-saira text-sm sm:text-base leading-relaxed">
                                            {item.text}
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
                                    Rent instead of buying yourself
                                </h3>
                                <h2 className="text-[#003D58] tracking-wider font-saira font-black text-3xl sm:text-4xl lg:text-[3.20rem] leading-[1.15] tracking-tight">
                                    What does it all cost you?
                                </h2>
                            </div>

                            {/* Two-Toned Accent Line Below Title */}
                            <div className="flex flex-col justify-center space-x-0 pt-1">
                                <div className="w-14 h-[3px] bg-zinc-900"></div>
                                <div className="w-36 h-[1px] bg-zinc-300"></div>
                            </div>

                            {/* Highlight Paragraph */}
                            <p className="text-[#1b4356] font-saira font-normal text-base sm:text-lg leading-relaxed pt-2">
                                Surprisingly little. Well, maybe it&apos;s not that surprising when you consider that you have to do everything yourself. But don&apos;t worry. We are here for you if you need us.
                            </p>

                            {/* Paragraph 1 */}
                            <p className="text-zinc-600 font-saira text-sm sm:text-base leading-relaxed">
                                Even our car mechanics will support you for a sandwich, so to speak. See for yourself by taking a look at the price list: You can save a lot of money with us. Rent a garage instead of buying everything yourself.
                            </p>

                            {/* Paragraph 2 */}
                            <p className="text-zinc-600 font-saira text-sm sm:text-base leading-relaxed">
                                Mind you: If you don&apos;t want to do anything yourself, then you&apos;ve come to the right place. After all, the do-it-yourself garage is run by Garage Santoro &amp; Wiederkehr AG. And they understand cars. No matter what brand or year of manufacture. So if your car needs a repair or service, you should come to us anyway.
                            </p>

                            {/* Paragraph 3 */}
                            <p className="text-[#1b4356] font-saira text-base sm:text-lg font-semibold leading-relaxed pt-2">
                                By the way: As a tenant of a workplace, you can buy service parts at favorable conditions. We are happy to answer any specific requests.
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
                                Price list
                            </h2>
                            <p className="text-xs text-zinc-400 font-saira pb-2">
                                Prices are in Swiss francs excl. VAT. As of 07.2022 | Subject to change
                            </p>

                            {/* Table Header */}
                            <div className="flex justify-between items-center pb-2 border-b-2 border-slate-900 font-saira">
                                <span className="text-xl font-bold text-slate-900">Offers</span>
                                <span className="text-xl font-bold text-slate-900 text-right">Prices</span>
                            </div>

                            {/* Table Rows */}
                            <div className="divide-y divide-zinc-200">
                                {priceList.map((item, idx) => (
                                    <div key={idx} className="py-3 flex justify-between items-center gap-4 text-sm sm:text-base font-saira">
                                        <span className="text-[#1b4356] font-medium leading-normal">
                                            {item.offer}
                                        </span>
                                        <span className="font-semibold text-slate-900 whitespace-nowrap text-right">
                                            {item.price}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Dispensing Counter Note */}
                            <p className="text-sm font-semibold text-slate-800 pt-4 font-saira">
                                All special tools are available at the dispensing counter
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
                                Means of payment
                            </h3>
                            <p className="text-zinc-300 font-saira text-sm sm:text-base font-normal pt-1">
                                We accept the following cards and of course cash. But no Bitcoins and no WE.
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
