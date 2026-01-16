import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ServiceCard from '@/components/sections/ServiceCard';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export const metadata: Metadata = {
    title: 'Services - RoadBaze',
    description: 'Explore our comprehensive range of civil road construction services including highways, bridges, urban roads, and maintenance.',
};

export default function ServicesPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section background="gray">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                        <span className="text-sm font-medium text-amber-700">What We Offer</span>
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Our Services
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        From initial planning to final construction, we offer end-to-end infrastructure
                        solutions that meet the highest standards of quality, safety, and sustainability.
                    </p>
                </div>
            </Section>

            {/* Services Grid */}
            <Section>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </Section>

            {/* Process Section */}
            <Section background="gray">
                <SectionTitle
                    title="Our Process"
                    subtitle="We follow a systematic approach to ensure every project is delivered on time and exceeds expectations."
                />

                <div className="grid md:grid-cols-4 gap-8">
                    {[
                        {
                            step: '01',
                            title: 'Consultation',
                            description: 'We begin with understanding your project requirements and conducting feasibility studies.',
                        },
                        {
                            step: '02',
                            title: 'Planning',
                            description: 'Our team creates detailed project plans, timelines, and resource allocations.',
                        },
                        {
                            step: '03',
                            title: 'Execution',
                            description: 'Construction begins with our experienced team and state-of-the-art equipment.',
                        },
                        {
                            step: '04',
                            title: 'Delivery',
                            description: 'Final quality checks and handover with comprehensive documentation.',
                        },
                    ].map((process, index) => (
                        <div key={index} className="relative">
                            <div className="text-6xl font-bold text-gray-100">{process.step}</div>
                            <h3 className="mt-2 text-xl font-semibold text-gray-900">{process.title}</h3>
                            <p className="mt-2 text-gray-600 text-sm">{process.description}</p>
                            {index < 3 && (
                                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-amber-200 -translate-x-1/2" />
                            )}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Equipment Section */}
            <Section>
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <SectionTitle
                            title="State-of-the-Art Equipment"
                            subtitle=""
                            align="left"
                        />
                        <p className="text-gray-600 leading-relaxed">
                            We maintain a modern fleet of construction equipment imported from leading global
                            manufacturers. Our machinery is regularly serviced and updated to ensure optimal
                            performance on every project.
                        </p>
                        <ul className="mt-6 space-y-3">
                            {[
                                'Asphalt Pavers & Finishers',
                                'Motor Graders & Rollers',
                                'Excavators & Loaders',
                                'Concrete Batching Plants',
                                'Survey & Testing Equipment',
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-gray-600">
                                    <svg className="w-5 h-5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Placeholder */}
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                                <p className="mt-4 text-gray-500">Construction Equipment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section background="dark">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold">
                        Ready to Start Your Project?
                    </h2>
                    <p className="mt-4 text-lg text-gray-300">
                        Contact us today for a consultation and let us help you build infrastructure
                        that lasts.
                    </p>
                    <div className="mt-8">
                        <Button href="/contact" variant="secondary" size="lg">
                            Request a Quote
                        </Button>
                    </div>
                </div>
            </Section>
        </div>
    );
}
