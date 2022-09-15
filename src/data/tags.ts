import { interestProducts } from "../utils/interestProducts";
import { Product } from "./products/_productType";
import buildings from "../assets/interest/buildings.webp";
import cars from "../assets/interest/cars.webp";
import games from "../assets/interest/games.webp";
import helmets from "../assets/interest/helmets.webp";
import homeDecoration from "../assets/interest/homedecoration.webp";
import movies from "../assets/interest/movies.webp";
import music from "../assets/interest/music.webp";
import seasonal from "../assets/interest/seasonal.webp";
import sports from "../assets/interest/sports.webp";
import superHeroes from "../assets/interest/superheroes.webp";
import tvShows from "../assets/interest/tvshows.webp";
import vehicles from "../assets/interest/vehicles.webp";

export const tags: {name: string, path: string , image: string, products: Product[]}[] = [
    {
        name: 'Buildings',
        path: 'buildings',
        image: buildings,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Cars',
        path: 'cars',
        image: cars,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Games',
        path: 'games',
        image: games,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Helmets',
        path: 'helmets',
        image: helmets,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Home Decoration',
        path: 'homedecoration',
        image: homeDecoration,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Movies',
        path: 'movies',
        image: movies,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Music',
        path: 'music',
        image: music,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Seasonal',
        path: 'seasonal',
        image: seasonal,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Sports',
        path: 'sports',
        image: sports,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Super Heroes',
        path: 'superheroes',
        image: superHeroes,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'TV-Shows',
        path: 'tv-shows',
        image: tvShows,
        get products() {return interestProducts(this.path)}
    },
    {
        name: 'Vehicles (non car)',
        path: 'vehicles',
        image: vehicles,
        get products() {return interestProducts(this.path)}
    },
];