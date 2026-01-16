import { cn } from '@/lib/utils';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
    className?: string;
    dark?: boolean;
}

export default function SectionTitle({
    title,
    subtitle,
    align = 'center',
    className,
    dark = false,
}: SectionTitleProps) {
    return (
        <div
            className={cn(
                'mb-12',
                align === 'center' ? 'text-center' : 'text-left',
                className
            )}
        >
            <h2
                className={cn(
                    'text-3xl md:text-4xl font-bold',
                    dark ? 'text-white' : 'text-gray-900'
                )}
            >
                {title}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        'mt-4 text-lg max-w-3xl',
                        align === 'center' && 'mx-auto',
                        dark ? 'text-gray-300' : 'text-gray-600'
                    )}
                >
                    {subtitle}
                </p>
            )}
        </div>
    );
}
