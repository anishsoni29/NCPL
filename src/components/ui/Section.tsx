import { cn } from '@/lib/utils';

interface SectionProps {
    children: React.ReactNode;
    className?: string;
    background?: 'white' | 'gray' | 'dark';
    id?: string;
}

export default function Section({ children, className, background = 'white', id }: SectionProps) {
    const backgrounds = {
        white: 'bg-white',
        gray: 'bg-gray-50',
        dark: 'bg-gray-900 text-white',
    };

    return (
        <section id={id} className={cn('py-16 md:py-24', backgrounds[background], className)}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
        </section>
    );
}
