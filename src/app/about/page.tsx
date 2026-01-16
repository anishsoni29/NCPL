import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Timeline from '@/components/sections/Timeline';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
    title: 'About Us - RoadBaze',
    description: 'Learn about RoadBaze, a leading civil road construction company with over 25 years of experience in building highways, bridges, and urban infrastructure across India.',
};

const values = [
    {
        title: 'Quality Excellence',
        description: 'We never compromise on quality. Every project meets the highest standards of construction and safety.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        title: 'Safety First',
        description: 'The safety of our workers and the public is our top priority in every project we undertake.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
        ),
    },
    {
        title: 'Innovation',
        description: 'We embrace new technologies and construction methods to deliver better results faster.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
    },
    {
        title: 'Sustainability',
        description: 'We are committed to environmentally responsible construction practices.',
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function AboutPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section background="gray">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                            <span className="text-sm font-medium text-amber-700">About RoadBaze</span>
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Building India&apos;s Infrastructure
                            <span className="block text-amber-500">Since 1999</span>
                        </h1>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            RoadBaze Infrastructure Pvt. Ltd. is one of India&apos;s leading civil road construction
                            companies, with a proven track record of delivering world-class highways, expressways,
                            bridges, and urban roads that connect communities and drive economic growth.
                        </p>
                        <p className="mt-4 text-gray-600">
                            Established in 1999, we have grown from a small regional contractor to a national
                            powerhouse with operations across 15 states. Our commitment to quality, safety,
                            and timely delivery has earned us the trust of government bodies and private
                            enterprises alike.
                        </p>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                                <p className="mt-4 text-gray-500">Company Headquarters</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="p-8 rounded-2xl bg-gray-900 text-white">
                        <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed">
                            To be India&apos;s most trusted infrastructure development company, creating roads
                            and bridges that stand as testaments to engineering excellence and contribute
                            to the nation&apos;s progress for generations to come.
                        </p>
                    </div>

                    <div className="p-8 rounded-2xl border-2 border-gray-100">
                        <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6">
                            <svg className="w-7 h-7 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600 leading-relaxed">
                            To deliver world-class road infrastructure through innovation, sustainable
                            practices, and an unwavering commitment to quality. We aim to create value
                            for our stakeholders while contributing to India&apos;s development goals.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Core Values */}
            <Section background="gray">
                <SectionTitle
                    title="Our Core Values"
                    subtitle="The principles that guide everything we do at RoadBaze."
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100">
                            <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                                {value.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900">{value.title}</h3>
                            <p className="mt-2 text-sm text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Timeline */}
            <Timeline />

            {/* CTA */}
            <Section background="dark">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Want to Know More?
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Meet our leadership team and learn about the people driving RoadBaze&apos;s success.
                    </p>
                    <div className="mt-8">
                        <Button href="/directors" variant="secondary" size="lg">
                            Meet Our Directors
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
