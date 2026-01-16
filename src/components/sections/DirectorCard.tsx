import Image from 'next/image';
import { Director } from '@/data/directors';

interface DirectorCardProps {
    director: Director;
}

export default function DirectorCard({ director }: DirectorCardProps) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
            {/* Director Image */}
            <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200">
                <Image
                    src={director.image}
                    alt={director.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{director.name}</h3>
                <p className="mt-1 text-sm font-medium text-amber-600">{director.designation}</p>
                <p className="mt-4 text-sm text-gray-600 leading-relaxed line-clamp-4">
                    {director.bio}
                </p>

                {/* Social Links Placeholder */}
                <div className="mt-5 flex gap-3">
                    <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
                        aria-label="LinkedIn profile"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>
                    <a
                        href="#"
                        className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-700 transition-colors"
                        aria-label="Email"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
