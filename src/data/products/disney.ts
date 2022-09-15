import { Product } from './_productType';
import images from "./disneyImages";

const disney: Product[] = [
    {
        id: 40478,
        name: 'Mini Disney Castle',
        image: images[40478],
        description: [
            `Celebrate the Walt Disney World® Resort's 50th anniversary with this LEGO® | Disney Mini Disney Castle (40478) set! Fans of Disney's flagship Magic Kingdom® Park can recreate 
            the iconic Walt Disney World® Resort Cinderella Castle, complete with pearlized golden tower tops, opalescent blue rooftop cones and a vintage-style Mickey Mouse minifigure. 
            This unique display piece makes a perfect gift for birthdays, holidays or other celebrations.`
        ],
        pieces: 567,
        released: true,
        theme1: 'disney',
        tags: ['buildings'],
        price: 34.99,
        stock: 0, 
        sale: false,
        salePrice: 0,
        discount: 0
    },
    {
        id: 40521,
        name: 'Mini Disney The Haunted Mansion',
        image: images[40521],
        description: [
            `Fans of Disney's The Haunted Mansion ride will love all the scary-good details in this miniature build-and-display model. Part of the interior is viewable from the back, 
            including the dining room, a chandelier and a gallery. The set includes an exclusive Butler minifigure to add to the display. Fans will recognize paintings of the Hitchhiking Ghosts, 
            Madame Leota and the Gravekeeper. This buildable set makes a perfect gift for miniature collectors and Disney fans of all ages.`
        ],
        pieces: 680,
        released: true,
        theme1: 'disney',
        tags: ['buildings'],
        price: 39.99,
        stock: 17,
        sale: false,
        salePrice: 0,
        discount: 0
    },
    {
        id: 71040,
        name: 'The Disney Castle',
        image: images[71040],
        description: [
            `Bring the magical world of Disney to your home with The Disney Castle. This highly detailed LEGO® model with over 4,000 pieces offers a rewarding build and play experience, and comes 
            with an array of exciting Disney-themed features and functions. The intricately detailed facade and towers replicate the iconic Walt Disney World® Resort Cinderella Castle, and each 
            accessible castle room includes special features inspired by some of Disney's greatest animated feature films, providing endless play possibilities with the included minifigures: Mickey Mouse, 
            Minnie Mouse, Donald Duck, Daisy Duck and Tinker Bell, or other characters from your collection.`
        ],
        pieces: 4080,
        released: true,
        theme1: 'disney',
        tags: ['buildings'],
        price: 349.99,
        stock: 1,
        sale: false,
        salePrice: 0,
        discount: 0
    },
    {
        id: 76832,
        name: 'XL-15 Spaceship',
        image: images[76832],
        description: [
            `Let space fans aged 8+ play the hero in their own intergalactic adventure with the XL-15 Spaceship (76832) buildable, collectible toy. Imaginations take flight as fans play at travelling 
            through space with Buzz Lightyear in his spaceship on another mission to save the galaxy from evil.`,
            `For play and display<br>
            This cool buildable spaceship toy features authentic details from Disney and Pixar's Lightyear, the Buzz Lightyear origin story, such as an opening cockpit that fits the LEGO® Buzz Lightyear 
            minifigure, and a removable fuel cell. The set comes with 4 characters from the movie and 3 weapons, including Darby's 'Mr. Boom' rocket launcher, so fans can recreate scenes from the movie. 
            There's also a stand with an information plaque so fans of the movie can proudly display their model in their bedroom.`
        ],
        pieces: 497,
        released: true,
        theme1: 'disney',
        tags: ['space', 'movies'],
        price: 49.99,
        stock: 28,
        sale: false,
        salePrice: 0,
        discount: 0
    }
]

export default disney;