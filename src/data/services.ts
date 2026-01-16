export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    features: string[];
}

export const services: Service[] = [
    {
        id: '1',
        title: 'Highway Construction',
        description: 'We specialize in building world-class highways that connect cities and drive economic growth. Our highways are engineered for durability, safety, and optimal traffic flow.',
        icon: 'highway',
        features: [
            'Multi-lane expressways',
            'National & State highways',
            'Toll road infrastructure',
            'Service roads and rest areas',
        ],
    },
    {
        id: '2',
        title: 'Urban Road Development',
        description: 'Transforming urban landscapes with modern road networks that ease congestion and improve connectivity. We design roads that cater to the unique challenges of city environments.',
        icon: 'urban',
        features: [
            'Arterial roads',
            'Junction improvements',
            'Pedestrian pathways',
            'Smart traffic systems',
        ],
    },
    {
        id: '3',
        title: 'Bridge & Flyover Construction',
        description: 'Engineering remarkable bridges and flyovers that overcome geographical challenges. Our structures are built to last, with aesthetic designs that complement the surroundings.',
        icon: 'bridge',
        features: [
            'Cable-stayed bridges',
            'Multi-level flyovers',
            'Railway over-bridges',
            'Pedestrian overpasses',
        ],
    },
    {
        id: '4',
        title: 'Maintenance & Repair',
        description: 'Comprehensive maintenance services to extend the life of existing infrastructure. We use the latest techniques to repair and rehabilitate roads, ensuring continued safety and performance.',
        icon: 'maintenance',
        features: [
            'Routine maintenance',
            'Emergency repairs',
            'Road resurfacing',
            'Preventive treatments',
        ],
    },
    {
        id: '5',
        title: 'Project Consulting',
        description: 'Expert consulting services for infrastructure projects of all scales. Our team provides technical guidance, feasibility studies, and project management support.',
        icon: 'consulting',
        features: [
            'Feasibility studies',
            'DPR preparation',
            'Quality assurance',
            'Project monitoring',
        ],
    },
    {
        id: '6',
        title: 'Green Infrastructure',
        description: 'Sustainable road construction practices that minimize environmental impact. We incorporate eco-friendly materials and techniques in all our projects.',
        icon: 'green',
        features: [
            'Eco-friendly materials',
            'Rainwater harvesting',
            'Wildlife crossings',
            'Noise barriers',
        ],
    },
];
