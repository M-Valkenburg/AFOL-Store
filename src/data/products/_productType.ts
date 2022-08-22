export type Product = {
    id: number,
    name: string,
    description: string[],
    pieces: number,
    released: boolean,
    theme1: Theme,
    theme2?: Theme,
    tags: Tags[],
    price: number,
    stock: number,
};

type Theme = 
    'architecture' | 
    'art' | 
    'DC' | 
    'disney' | 
    'harry potter' | 
    'icons' | 
    'ideas' | 
    'marvel' | 
    'starwars' | 
    'technic';

type Tags = 
    'building' |
    'vehicle' |
    'movies' |
    'tv-shows' |
    'music' |
    'super heroes' |
    'space' |
    'helmets' |
    'other';