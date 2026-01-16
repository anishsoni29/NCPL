export interface Director {
    id: string;
    name: string;
    designation: string;
    bio: string;
    image: string;
}

export const directors: Director[] = [
    {
        id: '1',
        name: 'Sh. Abhinay',
        designation: 'Director',
        bio: 'Sh. Abhinay is the Director of Nandpur Constructions Private Limited (NCPL), leading the company with dedication and expertise in civil road construction. Under his leadership, NCPL has successfully delivered numerous infrastructure projects across Bihar and neighboring regions, earning recognition for quality and timely completion.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face',
    },
    {
        id: '2',
        name: 'Priya Venkatesh',
        designation: 'Executive Director - Operations',
        bio: 'Ms. Venkatesh brings 25 years of expertise in project management and operations. She oversees all on-ground operations and ensures timely delivery of projects while maintaining the highest quality standards.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face',
    },
    {
        id: '3',
        name: 'Amit Patel',
        designation: 'Director - Technical',
        bio: 'A civil engineering graduate from IIT Delhi with an MBA from IIM Ahmedabad, Mr. Patel leads the technical division. His innovative approaches have helped reduce construction time by 20% across major projects.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face',
    },
    {
        id: '4',
        name: 'Sunita Reddy',
        designation: 'Director - Finance',
        bio: 'A Chartered Accountant with 20 years of experience in infrastructure finance, Ms. Reddy manages the company\'s financial strategy and has been instrumental in securing funding for large-scale projects.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face',
    },
];
