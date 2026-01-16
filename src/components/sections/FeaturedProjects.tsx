import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import ProjectCard from '@/components/sections/ProjectCard';
import { featuredProjects } from '@/data/projects';

export default function FeaturedProjects() {
    return (
        <Section background="gray">
            <SectionTitle
                title="Featured Projects"
                subtitle="Explore some of our landmark infrastructure projects that have transformed 
          connectivity across India."
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <div className="mt-12 text-center">
                <Button href="/projects" variant="outline">
                    View All Projects
                </Button>
            </div>
        </Section>
    );
}
