import OpeningHoursSection from '../Home/OpeningHoursSection';

export default function Imprint() {
    return (
        <main className="w-full min-h-screen bg-white text-zinc-900 pt-24 sm:pt-28 pb-16 font-saira">
            <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 space-y-10">

                {/* Title */}
                <h1 className="text-[#1b4356] font-saira font-normal text-3xl sm:text-4xl lg:text-[3.75rem] leading-[1.15] tracking-tight">
                    Imprint
                </h1>

                <div className="space-y-8 max-w-4xl">

                    {/* Section 1: Provider of this website */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-bold text-lg sm:text-xl">
                            Provider of this website
                        </h2>
                        <div className="text-zinc-600 font-saira text-sm leading-relaxed space-y-0.5">
                            <p>Garage Santoro &amp; Wiederkehr AG</p>
                            <p>Schaffhauserstrasse 382,</p>
                            <p>CH-8050 Zürich</p>
                            <p>Switzerland</p>
                            <p className="pt-2">Managing Director: Luigi Santoro</p>
                            <p className="pt-1">UID: CHE-138.751.569 MWST</p>
                        </div>
                    </div>

                    {/* Section 2: Conception and implementation */}
                    <div className="space-y-2">
                        <h2 className="text-[#1b4356] font-saira font-bold text-lg sm:text-xl">
                            Conception and implementation
                        </h2>
                        <div className="text-zinc-600 font-saira text-sm leading-relaxed space-y-0.5">
                            <p>Apple &amp; Lime GmbH</p>
                            <p>Breitenstrasse 76</p>
                            <p>8832 Wilen bei Wollerau</p>
                            <p>Switzerland</p>
                            <p className="pt-1">
                                <a
                                    href="http://www.apple-lime.ch"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-600 hover:text-red-600 underline underline-offset-2 transition-colors"
                                >
                                    www.apple-lime.ch
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Section 3: Legal Notices */}
                    <div className="space-y-3">
                        <h2 className="text-[#1b4356] font-saira font-bold text-lg sm:text-xl">
                            Legal Notices
                        </h2>
                        <div className="text-zinc-600 font-saira text-xs sm:text-sm leading-relaxed space-y-3">
                            <p>
                                Please note that information on this site may contain technical inaccuracies or typographical errors. We reserve the right to change or update the information on this website at any time and without prior notice.
                            </p>
                            <p>
                                All works or parts of works published on our website, such as texts, files, compositions and images, are protected by copyright. Any further publication, duplication, distribution or other use &ndash; even in excerpts &ndash; requires the written permission of Apple &amp; Lime GmbH.
                            </p>
                        </div>
                    </div>

                    {/* Section 4: Copyright */}
                    <div className="space-y-3">
                        <h2 className="text-[#1b4356] font-saira font-bold text-lg sm:text-xl">
                            Copyright
                        </h2>
                        <div className="text-zinc-600 font-saira text-xs sm:text-sm leading-relaxed">
                            <p>
                                The content and works on these pages created by the site operators are subject to Swiss copyright law. Duplication, editing, distribution and any kind of exploitation outside the limits of copyright law require the written consent of the respective author or creator. Downloads and copies of this site are only permitted for private, non-commercial use. Insofar as the content on this page was not created by the operator, the copyrights of third parties are observed. In particular, third-party content is marked as such. If you nevertheless become aware of a copyright infringement, we ask you to notify us accordingly. If we become aware of any infringements, we will remove such content immediately.
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Copyright Notice */}
            <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 pt-16 text-xs text-zinc-400 font-saira">
                Copyright &copy; {new Date().getFullYear()} Doityourself Garage
            </div>
        </main>
    );
}
