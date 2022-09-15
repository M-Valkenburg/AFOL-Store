import { Product } from "../data/products/_productType";
import products from  "../data/products";

export const interestProducts = (interest: string) => {
    let unsortedArray: Product[] = [];

    for (let i = 0; i < products.length; i++) {
        for (let j = 0; j < products[i].tags.length; j++) {
            if (products[i].tags[j] === interest) {
                unsortedArray.push(products[i]);
            }
        }
    }

    const productArray = unsortedArray.sort((a, b) => a.id < b.id ? -1 : 1);
    return productArray;
};