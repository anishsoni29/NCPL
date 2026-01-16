import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import ProjectCard from '@/components/sections/ProjectCard';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
    title: 'Projects - RoadBaze',
    description: 'Explore our portfolio of highway, bridge, and urban road construction projects across India.',
};

const projectTypes = ['All', 'Highway', 'Flyover', 'Urban Roads', 'Bridge'];

export default function ProjectsPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section background="gray">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                        <span className="text-sm font-medium text-amber-700">Our Portfolio</span>
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Featured Projects
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Explore our diverse portfolio of infrastructure projects. From national highways
                        to urban roads, each project represents our commitment to quality and innovation.
                    </p>
                </div>
            </Section>

            {/* Filter Tabs */}
            <Section className="py-8 border-b border-gray-100">
                <div className="flex flex-wrap justify-center gap-2">
                    {projectTypes.map((type) => (
                        <button
                            key={type}
                            className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${type === 'All'
                                    ? 'bg-gray-900 text-white'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            {type}
                        </button>
                    ))}
                </div>
            </Section>

            {/* Projects Grid */}
            <Section>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </Section>

            {/* Stats Section */}
            <Section background="dark">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-amber-500">150+</div>
                        <p className="mt-2 text-gray-300">Projects Completed</p>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-amber-500">2,500+</div>
                        <p className="mt-2 text-gray-300">KM Roads Built</p>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-amber-500">15</div>
                        <p className="mt-2 text-gray-300">States Covered</p>
                    </div>
                    <div>
                        <div className="text-4xl md:text-5xl font-bold text-amber-500">₹5000 Cr+</div>
                        <p className="mt-2 text-gray-300">Project Value</p>
                    </div>
                </div>
            </Section>

            {/* Client Logos Placeholder */}
            <Section>
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Clients</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center">
                        {['NHAI', 'PWD', 'CPWD', 'State PWD', 'MORTH', 'Private'].map((client, index) => (
                            <div
                                key={index}
                                className="h-16 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 font-medium"
                            >
                                {client}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
}
