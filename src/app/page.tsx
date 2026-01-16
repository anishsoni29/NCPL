import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import Button from '@/components/ui/Button';
import { services } from '@/data/services';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Stats Section */}
      <Stats />

      {/* Services Overview */}
      <Section>
        <SectionTitle
          title="What We Do"
          subtitle="From national highways to urban roads, we deliver comprehensive infrastructure solutions 
            that meet the highest standards of quality and safety."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 mb-4">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </Section>

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* CTA Section */}
      <Section background="dark">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Build the Future?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Partner with RoadBaze for your next infrastructure project.
            Our team is ready to discuss your requirements and deliver excellence.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="secondary" size="lg">
              Get a Free Quote
            </Button>
            <Button href="/projects" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              Explore Projects
            </Button>
          </div>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Why Choose RoadBaze?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              With over two decades of experience, we have built a reputation for
              delivering projects on time, within budget, and exceeding quality expectations.
            </p>

            <div className="mt-8 space-y-6">
              {[
                {
                  title: 'Government Approved Contractor',
                  description: 'Registered with CPWD, PWD, and NHAI for all categories of road works.',
                },
                {
                  title: 'Modern Equipment Fleet',
                  description: 'State-of-the-art machinery and equipment for efficient project execution.',
                },
                {
                  title: 'Experienced Team',
                  description: 'Over 500 skilled engineers and technicians with decades of experience.',
                },
                {
                  title: 'Quality Assurance',
                  description: 'ISO 9001:2015 certified with rigorous quality control at every stage.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/infrastructure-equipment.png"
              alt="RoadBaze Construction Equipment Fleet"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
