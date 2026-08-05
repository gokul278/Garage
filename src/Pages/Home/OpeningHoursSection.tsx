import BeforeAfterSlider from './BeforeAfterSlider';
import Before from "../../assets/Cars/SW-Before.jpg";
import After from "../../assets/Cars/SW-After.jpg";

export default function OpeningHoursSection() {
    return (
        <section className="w-full bg-[#d61b22] text-white py-16 sm:py-20 px-6 sm:px-12 lg:px-20 font-saira">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                {/* Left Column: Opening Hours & Notice */}
                <div className="lg:col-span-6 space-y-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-none">
                        Opening hours
                    </h2>

                    <p className="text-white/90 text-sm sm:text-base font-normal leading-relaxed max-w-lg">
                        Please note:{' '}
                        <strong className="font-bold text-white">
                            Last check-in time at 6:00 p.m.
                        </strong>
                        , as we expect a minimum of one hour of service time.
                    </p>

                    {/* Schedule List */}
                    <div className="pt-2 w-full max-w-md divide-y divide-white/20 text-sm sm:text-base">
                        <div className="flex justify-between items-center py-3">
                            <span className="font-semibold text-white">Mon - Fri</span>
                            <span className="text-white/90 font-medium">08:00 am - 06:30 pm</span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                            <span className="font-semibold text-white">Sat</span>
                            <span className="text-white/90 font-medium">By appointment</span>
                        </div>

                        <div className="flex justify-between items-center py-3">
                            <span className="font-semibold text-white">So</span>
                            <span className="text-white/90 font-medium">Closed</span>
                        </div>
                    </div>
                </div>

                {/* Right Column: Interactive Before/After Image Slider */}
                <div className="lg:col-span-6 w-full flex justify-center">
                    <div className="w-full max-w-2xl">
                        <BeforeAfterSlider
                            beforeImage={Before}
                            afterImage={After}
                            beforeAlt="Vehicle before DIY restoration work"
                            afterAlt="Vehicle after DIY restoration work"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
