export interface Project {
    id: string;
    name: string;
    location: string;
    type: string;
    description: string;
    image: string;
    year: string;
    length?: string;
}

export const projects: Project[] = [
    {
        id: '1',
        name: 'Mumbai-Pune Expressway Extension',
        location: 'Maharashtra',
        type: 'Highway',
        description: 'A 45km extension of the Mumbai-Pune Expressway with 6 lanes, featuring advanced drainage systems and modern toll infrastructure.',
        image: '/images/highway-construction.png',
        year: '2023',
        length: '45 km',
    },
    {
        id: '2',
        name: 'Delhi Ring Road Flyover',
        location: 'New Delhi',
        type: 'Flyover',
        description: 'A 3.2km elevated flyover reducing traffic congestion at one of Delhi\'s busiest intersections.',
        image: '/images/flyover-bridge.png',
        year: '2023',
        length: '3.2 km',
    },
    {
        id: '3',
        name: 'NH-44 Widening Project',
        location: 'Telangana',
        type: 'Highway',
        description: 'Widening of National Highway 44 from 4 lanes to 6 lanes, spanning 120km with improved safety features.',
        image: '/images/highway-widening.png',
        year: '2022',
        length: '120 km',
    },
    {
        id: '4',
        name: 'Bangalore Urban Roads',
        location: 'Karnataka',
        type: 'Urban Roads',
        description: 'Development of 85km of urban roads in Bangalore\'s IT corridor with modern drainage and lighting systems.',
        image: '/images/urban-road.png',
        year: '2022',
        length: '85 km',
    },
    {
        id: '5',
        name: 'Gujarat Coastal Highway',
        location: 'Gujarat',
        type: 'Highway',
        description: 'A scenic 200km coastal highway connecting major ports and tourist destinations along Gujarat\'s coastline.',
        image: '/images/highway-construction.png',
        year: '2021',
        length: '200 km',
    },
    {
        id: '6',
        name: 'Chennai Peripheral Ring Road',
        location: 'Tamil Nadu',
        type: 'Highway',
        description: 'A 62km peripheral ring road around Chennai to ease traffic flow and improve connectivity.',
        image: '/images/flyover-bridge.png',
        year: '2021',
        length: '62 km',
    },
    {
        id: '7',
        name: 'Rajasthan Desert Highway',
        location: 'Rajasthan',
        type: 'Highway',
        description: 'Construction of a 180km highway through challenging desert terrain with specialized road construction techniques.',
        image: '/images/highway-widening.png',
        year: '2020',
        length: '180 km',
    },
    {
        id: '8',
        name: 'Kolkata Bridge Project',
        location: 'West Bengal',
        type: 'Bridge',
        description: 'A 1.5km cable-stayed bridge over the Hooghly River, connecting two major districts.',
        image: '/images/flyover-bridge.png',
        year: '2020',
        length: '1.5 km',
    },
];

export const featuredProjects = projects.slice(0, 4);
