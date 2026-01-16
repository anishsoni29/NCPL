import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import DirectorCard from '@/components/sections/DirectorCard';
import { directors } from '@/data/directors';

export const metadata: Metadata = {
    title: 'Leadership - RoadBaze',
    description: 'Meet the experienced leadership team behind RoadBaze\'s success in infrastructure development.',
};

export default function DirectorsPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section background="gray">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                        <span className="text-sm font-medium text-amber-700">Leadership</span>
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Meet Our Directors
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Our leadership team brings together decades of experience in civil engineering,
                        project management, and business operations. Their vision and expertise have
                        shaped RoadBaze into a trusted name in infrastructure development.
                    </p>
                </div>
            </Section>

            {/* Directors Grid */}
            <Section>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {directors.map((director) => (
                        <DirectorCard key={director.id} director={director} />
                    ))}
                </div>
            </Section>

            {/* Company Culture */}
            <Section background="gray">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle
                            title="Leadership Philosophy"
                            subtitle=""
                            align="left"
                        />
                        <p className="text-gray-600 leading-relaxed">
                            At RoadBaze, our leadership believes in leading by example. Our directors
                            regularly visit project sites, engage with field teams, and ensure that
                            every project meets our exacting standards.
                        </p>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            We foster a culture of continuous learning and innovation, encouraging
                            our teams to explore new construction techniques and technologies that
                            can improve efficiency and quality.
                        </p>
                        <div className="mt-8 grid sm:grid-cols-2 gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">500+ Employees</h4>
                                    <p className="text-sm text-gray-600">Dedicated professionals</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">15 States</h4>
                                    <p className="text-sm text-gray-600">Pan-India presence</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Leadership Image */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                        <img
                            src="/images/leadership-team.png"
                            alt="RoadBaze Leadership Team"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </Section>
        </div>
    );
}
