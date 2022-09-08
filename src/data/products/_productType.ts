export type Product = {
    id: number,
    name: string,
    image: string,
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
    'dc' | 
    'disney' | 
    'harrypotter' | 
    'icons' | 
    'ideas' | 
    'marvel' | 
    'starwars' | 
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