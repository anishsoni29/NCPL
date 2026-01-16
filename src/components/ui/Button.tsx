import Link from 'next/link';
import { cn } from '@/lib/utils';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit';
}

export default function Button({
    children,
    variant = 'primary',
    size = 'md',
    href,
    className,
    onClick,
    type = 'button',
}: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200';

    const variants = {
        primary: 'bg-gray-900 text-white hover:bg-gray-800 active:bg-gray-700',
        secondary: 'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700',
        outline: 'border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
    };

    const sizes = {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
    };

    const combinedStyles = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
}
