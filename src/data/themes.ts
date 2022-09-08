import { themeProducts } from "../utils/themeProducts";
import { Product } from "./products/_productType";

import architectureImg from "../assets/themes/Architecture.webp";
import architectureLogo from "../assets/logos/Architecture.png";
import architectureProd from "./products/architecture";

import artImg from "../assets/themes/Art.webp";
import artLogo from "../assets/logos/Art.png";
import artProd from "./products/art";

import dcImg from "../assets/themes/DC.webp";
import dcLogo from "../assets/logos/DC.png";
import dcProd from "./products/dc";

import disneyImg from "../assets/themes/Disney.webp";
import disneyLogo from "../assets/logos/Disney.png";
import disneyProd from "./products/disney";

import harryPotterImg from "../assets/themes/Harry Potter.webp";
import harryPotterLogo from "../assets/logos/Harry Potter.png";
import harrypotterProd from "./products/harrypotter";

import iconsImg from "../assets/themes/Icons.webp";
import iconsLogo from "../assets/logos/Icons.png";
import iconsProd from "./products/icons";

import ideasImg from "../assets/themes/Ideas.webp";
import ideasLogo from "../assets/logos/Ideas.png";
import ideasProd from "./products/ideas";

import marvelImg from "../assets/themes/Marvel.webp";
import marvelLogo from "../assets/logos/Marvel.png";
import marvelProd from "./products/marvel";

import starWarsImg from "../assets/themes/Star Wars.webp";
import starWarsLogo from "../assets/logos/Star Wars.png";
import starwarsProd from "./products/starwars";

import technicImg from "../assets/themes/Technic.webp";
import technicLogo from "../assets/logos/Technic.png";
import technicProd from "./products/technic";

export const themes: {name: string, path: string, img: string, logo: string, products: Product[]}[] = [
    {
        name: "Architecture",
        path: "architecture",
        img: architectureImg,
        logo: architectureLogo,
        get products() { return themeProducts(architectureProd, this.path) }
    },
    {
        name: "Art",
        path: "art",
        img: artImg,
        logo: artLogo,
        get products() { return themeProducts(artProd, this.path) }
    },
    {
        name: "DC",
        path: "dc",
        img: dcImg,
        logo: dcLogo,
        get products() { return themeProducts(dcProd, this.path) }
    },
    {
        name: "Disney",
        path: "disney",
        img: disneyImg,
        logo: disneyLogo,
        get products() { return themeProducts(disneyProd, this.path) }
    },
    {
        name: "Harry Potter",
        path: "harrypotter",
        img: harryPotterImg,
        logo: harryPotterLogo,
        get products() { return themeProducts(harrypotterProd, this.path) }
    },
    {
        name: "Icons",
        path: "icons",
        img: iconsImg,
        logo: iconsLogo,
        get products() { return themeProducts(iconsProd, this.path) }
    },
    {
        name: "Ideas",
        path: "ideas",
        img: ideasImg,
        logo: ideasLogo,
        get products() { return themeProducts(ideasProd, this.path) }
    },
    {
        name: "Marvel",
        path: "marvel",
        img: marvelImg,
        logo: marvelLogo,
        get products() { return themeProducts(marvelProd, this.path) }
    },
    {
        name: "Star Wars",
        path: "starwars",
        img: starWarsImg,
        logo: starWarsLogo,
        get products() { return themeProducts(starwarsProd, this.path) }
    },
    {
        name: "Technic",
        path: "technic",
        img: technicImg,
        logo: technicLogo,
        get products() { return themeProducts(technicProd, this.path) }
    }
]