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
    sale: boolean,
    salePrice: number,
    discount: number
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
    'buildings' |
    'cars' |
    'games' |
    'helmets' |
    'homedecoration' |
    'movies' |
    'music' |
    'seasonal' |
    'space' |
    'sports' |
    'superheroes' |
    'tv-shows' |
    'vehicles';