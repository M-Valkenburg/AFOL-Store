import { Product } from "./products/_productType";
import architectureProd from "./products/architecture";
import artProd from "./products/art";
import dcProd from "./products/dc";
import disneyProd from "./products/disney";
import harrypotterProd from "./products/harrypotter";
import iconsProd from "./products/icons";
import ideasProd from "./products/ideas";
import marvelProd from "./products/marvel";
import starwarsProd from "./products/starwars";
import technicProd from "./products/technic";

let productsArray: Product[] = [];
const products = productsArray.concat(
    architectureProd,
    artProd,
    dcProd,
    disneyProd,
    harrypotterProd,
    iconsProd,
    ideasProd,
    marvelProd,
    starwarsProd,
    technicProd
);

export default products;