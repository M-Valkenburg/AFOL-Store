import { interestProducts } from "../utils/interestProducts";
import { Product } from "./products/_productType";

export const tags: {name: string, path: string , image: string, products: Product[]}[] = [
    {
        name: 'Buildings',
        path: 'buildings',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Cars',
        path: 'cars',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Games',
        path: 'games',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Helmets',
        path: 'helmets',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Home Decoration',
        path: 'homedecoration',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Movies',
        path: 'movies',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Music',
        path: 'music',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Seasonal',
        path: 'seasonal',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Sports',
        path: 'sports',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Super Heroes',
        path: 'superheroes',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'TV-Shows',
        path: 'tv-shows',
        image: '',
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Vehicles (non car)',
        path: 'vehicles',
        image: '',
        get products() {return interestProducts(this.path)}
    },
];