'use client';

import { useEffect, useState } from 'react';

interface StatItemProps {
    value: number;
    suffix: string;
    label: string;
}

function StatItem({ value, suffix, label }: StatItemProps) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 60;
        const stepValue = value / steps;
        let current = 0;

        const timer = setInterval(() => {
            current += stepValue;
            if (current >= value) {
                setCount(value);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);

        return () => clearInterval(timer);
    }, [value]);

    return (
        <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gray-900">
                {count.toLocaleString()}
                <span className="text-amber-500">{suffix}</span>
            </div>
            <p className="mt-2 text-gray-600 font-medium">{label}</p>
        </div>
    );
}

const stats = [
    { value: 25, suffix: '+', label: 'Years of Experience' },
    { value: 2500, suffix: '+', label: 'KM Roads Constructed' },
    { value: 150, suffix: '+', label: 'Projects Completed' },
    { value: 50, suffix: '+', label: 'Major Clients' },
];

export default function Stats() {
    return (
        <section className="py-16 bg-white border-y border-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, index) => (
                        <StatItem key={index} {...stat} />
                    ))}
                </div>
            </div>
        </section>
    );
}
