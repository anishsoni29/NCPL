import Image from 'next/image';
import Button from '@/components/ui/Button';

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white overflow-hidden py-20 md:py-0">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03]">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-gray-900/5 rounded-full blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 pb-12 md:pb-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 rounded-full mb-6">
                            <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-amber-700">25+ Years of Excellence</span>
                        </div>

                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Building Roads That
                            <span className="block text-amber-500">Connect India</span>
                        </h1>

                        <p className="mt-4 md:mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                            NCPL is a premier civil road construction company specializing in highways,
                            expressways, bridges, and urban infrastructure. We deliver world-class projects
                            that stand the test of time.
                        </p>

                        {/* Motto Banner */}
                        <div className="mt-6 md:mt-8 p-4 md:p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-r-xl">
                            <p className="text-base md:text-xl font-semibold text-gray-900 italic">
                                "Building Tomorrow's Infrastructure, Today"
                            </p>
                            <p className="mt-2 text-xs md:text-sm text-gray-600">
                                Connecting communities, driving progress, building the future.
                            </p>
                        </div>

                        <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4">
                            <Button href="/projects" size="lg">
                                View Our Projects
                            </Button>
                            <Button href="/contact" variant="outline" size="lg">
                                Get In Touch
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="mt-8 md:mt-12 flex flex-wrap items-center gap-4 md:gap-8">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-600">ISO Certified</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-gray-600">Govt. Approved</span>
                            </div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="relative mt-10 lg:mt-0">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/images/highway-construction.png"
                                alt="Highway construction project"
                                fill
                                className="object-cover"
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                            />
                        </div>

                        {/* Floating Stats Card */}
                        <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                                    <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-2xl font-bold text-gray-900">2,500+</p>
                                    <p className="text-sm text-gray-500">KM Roads Built</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
