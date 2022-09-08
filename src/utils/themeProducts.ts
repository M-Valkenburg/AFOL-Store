import { Product } from "../data/products/_productType";
import art from "../data/products/art";
import ideas from "../data/products/ideas";
import technic from "../data/products/technic";

let multiThemes: Product[] = [];
const findMultiThemes = (array: {}[]) => {
    for (let i = 0; i < array.length; i++) {
        if ('theme2' in array[i]) {
            multiThemes.push(array[i] as Product);
        }
    }
};

findMultiThemes(art);
findMultiThemes(ideas);
findMultiThemes(technic);

export const themeProducts = (array: Product[], theme: string) => {
    const multiThemeProd = multiThemes.filter(prod => prod.theme2 === theme);
    const unsortedArray =  array.concat(multiThemeProd);
    const productArray = unsortedArray.sort((a, b) => a.id < b.id ? -1 : 1);
    return productArray;
};