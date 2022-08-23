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
    'star wars' | 
    'technic';

type Tags = 
    'building' |
    'games' |
    'helmets' |
    'home decoration' |
    'movies' |
    'music' |
    'seasonal' |
    'space' |
    'sports' |
    'super heroes' |
    'tv-shows' |
    'vehicle';