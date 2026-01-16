import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
    title: 'Contact Us - RoadBaze',
    description: 'Get in touch with RoadBaze for your infrastructure project requirements. We\'re here to help.',
};

const contactInfo = [
    {
        title: 'Head Office',
        details: ['123 Infrastructure Tower', 'Connaught Place', 'New Delhi - 110001'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
    {
        title: 'Phone',
        details: ['+91 11 2345 6789', '+91 11 2345 6790', 'Toll Free: 1800-123-4567'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
        ),
    },
    {
        title: 'Email',
        details: ['info@roadbaze.com', 'projects@roadbaze.com', 'careers@roadbaze.com'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: 'Working Hours',
        details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 2:00 PM', 'Sunday: Closed'],
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
];

export default function ContactPage() {
    return (
        <div className="pt-20">
            {/* Hero Section */}
            <Section background="gray">
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-6">
                        <span className="text-sm font-medium text-amber-700">Get In Touch</span>
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Contact Us
                    </h1>
                    <p className="mt-6 text-lg text-gray-600">
                        Have a project in mind? We&apos;d love to hear from you. Send us a message and
                        we&apos;ll respond as soon as possible.
                    </p>
                </div>
            </Section>

            {/* Contact Form & Info */}
            <Section>
                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <ContactForm />
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600 flex-shrink-0">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{info.title}</h3>
                                        {info.details.map((detail, idx) => (
                                            <p key={idx} className="text-sm text-gray-600">{detail}</p>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* Map Placeholder */}
            <Section background="gray" className="py-0">
                <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <svg className="w-16 h-16 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <p className="mt-4 text-gray-500">Google Maps Embed</p>
                            <p className="text-sm text-gray-400">123 Infrastructure Tower, New Delhi</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Regional Offices */}
            <Section>
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Regional Offices</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { city: 'Mumbai', address: '456, Andheri East, Mumbai - 400069' },
                        { city: 'Bangalore', address: '789, Whitefield, Bangalore - 560066' },
                        { city: 'Chennai', address: '321, T. Nagar, Chennai - 600017' },
                        { city: 'Kolkata', address: '654, Salt Lake, Kolkata - 700091' },
                    ].map((office, index) => (
                        <div key={index} className="p-6 rounded-xl border border-gray-100 hover:border-amber-200 hover:shadow-lg transition-all">
                            <h3 className="font-semibold text-gray-900">{office.city}</h3>
                            <p className="mt-2 text-sm text-gray-600">{office.address}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
}
