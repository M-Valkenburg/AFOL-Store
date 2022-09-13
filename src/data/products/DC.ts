import { Product } from './_productType';
import images from "./dcImages";

const dc: Product[] = [
    {
        id: 76161,
        name: '1989 Batwing',
        image: images[76161],
        description: [
            `This is no kid's toy. If you're serious about BATMAN™, comic book super heroes or making cool models, this LEGO® DC BATMAN 1989 Batwing is for you!`,
            `Batwing construction project<br>
            Recreate the authentic detail and gothic elegance of BATMAN's iconic aircraft, the Batwing, with this LEGO brick build-and-display model. The impressive reproduction features 
            realistic details, removable canopy, full interior, poseable flaps and a new special brick that will allow you to mount and display your model on your wall. There's also a stand, 
            nameplate and 3 minifigures - BATMAN™, THE JOKER™ and a Lawrence the Boombox Goon™ - to create an impressive setting for your model.`
        ],
        pieces: 2363,
        released: true,
        theme1: 'dc',
        tags: ['super heroes', 'vehicles', 'movies'],
        price: 199.99,
        stock: 3,
        sale: false,
        salePrice: 0,
        discount: 0
    },
    {
        id: 76182,
        name: 'Batman™ Cowl',
        image: images[76182],
        description: [
            `Immerse yourself in a challenging and rewarding building experience as your imagination transports you to GOTHAM CITY™ with the impressive LEGO® DC Batman™: Batman Cowl (76182).`,
            `Iconic Batman helmet to build and display<br>
            This LEGO brick recreation of the unmistakable cowl worn by the Caped Crusader™ is sure to attract attention and admiration wherever it is placed. With transparent bricks to represent 
            the face and a stylish fact plaque attached to the sturdy base, this remarkable model will provide a sense of fulfilment long after the construction work has finished.`
        ],
        pieces: 410,
        released: true,
        theme1: 'dc',
        tags: ['super heroes', 'helmets', 'movies'],
        price: 59.99,
        stock: 10,
        sale: false,
        salePrice: 0,
        discount: 0
    },
    {
        id: 76188,
        name: 'Batman™ Classic TV Series Batmobile™',
        image: images[76188],
        description: [
            `LEGO® DC Batman™: Batman Classic TV Series Batmobile™ (76188) gives people all the style, action and excitement of the original 1966 Batman TV series. The iconic vehicle is 
            packed with cool features and attaches to a rotatable stand.`,
            `Classic Batman vehicle and minifigures
            people can play out endless Batman adventures with this impressive Batmobile, plus Batman and The Joker™ minifigures from the original TV series. This amazing vehicle includes 
            an opening trunk containing a Batarang™ and additional bricks that people can use to customize the car's hood so it appears with or without the stud shooters. When the action's 
            over, the Batmobile can be displayed on a rotatable stand that lets people display their awesome, crime-fighting machine at its best.`,
        ],
        pieces: 345,
        released: true,
        theme1: 'dc',
        tags: ['cars', 'super heroes', 'tv-shows', ],
        price: 34.99,
        stock: 42,
        sale: false,
        salePrice: 0,
        discount: 0
    },
    {
        id: 76238,
        name: 'Classic TV Series Batman™ Cowl',
        image: images[76238],
        description: [
            `Immerse yourself in a rewarding model-making project as you recreate the unforgettable style of the classic Batman™ TV series. Created with adult fans in mind, LEGO® DC Batman 
            Classic TV Series Batman Cowl (76238) is satisfying to build and stunning to display.`,
            `Iconic Batman helmet to build and display<br>
            This LEGO brick recreation of the distinctive cowl worn by the famous TV incarnation of the Caped Crusader™ is sure to attract attention and admiration wherever it is displayed. 
            With an information plaque attached to the sturdy, removable base, this remarkable model will provide great pleasure and satisfaction long after the construction work has finished.`
        ],
        pieces: 372,
        released: true,
        theme1: 'dc',
        tags: ['super heroes', 'helmets', 'tv-shows'],
        price: 59.99,
        stock: 12,
        sale: false,
        salePrice: 0,
        discount: 0
    },
    {
        id: 76240,
        name: 'LEGO® DC Batman™ Batmobile™ Tumbler',
        image: images[76240],
        description: [
            `LEGO® DC Batman™ Batmobile™ Tumbler (76240) will stretch your construction skills and capture the style of one of the most iconic vehicles in cinema history.`,
            `The ultimate, armored crime-fighting machine<br>
            The impressive build-and-display Tumbler from the Dark Knight™ trilogy of Batman movies features an opening roof, which provides access to the driver and passenger seats and control panel. 
            Batman and The Joker™ minifigures are included with a stand. With a sturdy base to display the finished model at its best, your recreation of the Tumbler will provide pleasure long after the hands-on work has been completed.`,
        ],
        pieces: 2049,
        released: true,
        theme1: 'dc',
        tags: ['super heroes', 'movies', 'cars'],
        price: 229.99,
        stock: 2,
        sale: false,
        salePrice: 0,
        discount: 0
    }
]

export default dc;