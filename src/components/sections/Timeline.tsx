import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

const milestones = [
    {
        year: '1999',
        title: 'Company Founded',
        description: 'NCPL was established with a vision to transform India\'s road infrastructure.',
    },
    {
        year: '2005',
        title: 'First Major Highway Project',
        description: 'Completed our first 100km highway project in Maharashtra.',
    },
    {
        year: '2010',
        title: 'Pan-India Expansion',
        description: 'Expanded operations to 10 states with regional offices.',
    },
    {
        year: '2015',
        title: '1000 KM Milestone',
        description: 'Crossed the landmark of 1000 km of road construction.',
    },
    {
        year: '2020',
        title: 'ISO Certification',
        description: 'Achieved ISO 9001:2015 certification for quality management.',
    },
    {
        year: '2024',
        title: 'Green Infrastructure',
        description: 'Launched sustainable construction initiatives across all projects.',
    },
];

export default function Timeline() {
    return (
        <Section background="gray">
            <SectionTitle
                title="Our Journey"
                subtitle="Key milestones that have shaped our growth and established us as a leader in infrastructure development."
            />

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-0.5" />

                <div className="space-y-12">
                    {milestones.map((milestone, index) => (
                        <div
                            key={index}
                            className={`relative flex items-start gap-8 md:gap-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                        >
                            {/* Dot */}
                            <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-amber-500 rounded-full md:-translate-x-1.5 mt-2 ring-4 ring-white" />

                            {/* Content */}
                            <div
                                className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                                    }`}
                            >
                                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-sm font-semibold rounded-full mb-3">
                                    {milestone.year}
                                </span>
                                <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                                <p className="mt-2 text-gray-600">{milestone.description}</p>
                            </div>

                            {/* Empty space for alternating */}
                            <div className="hidden md:block md:w-1/2" />
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
