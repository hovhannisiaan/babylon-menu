import kitchenImg from '../public/img/main/kitchen.jpg';
import barImg from '../public/img/main/bar.jpg';
import hookahImg from '../public/img/main/hookah.jpg';
import snackImg from "../public/img/kitchen/snacks.jpg";
import saladImg from "../public/img/kitchen/salads.jpg";
import pizzaImg from "../public/img/kitchen/pizza.jpg";
import pastaImg from "../public/img/kitchen/pasta.jpg";
import hotDishImg from "../public/img/kitchen/hotDish.jpg";
import soupImg from "../public/img/kitchen/soup.jpg";
import burgerImg from "../public/img/kitchen/burger.jpg";
import sandwichImg from "../public/img/kitchen/sandwich.jpg";
import sauceImg from "../public/img/kitchen/sauce.jpg";
import garnishImg from "../public/img/kitchen/garnish.jpg";
import fruitsImg from "../public/img/kitchen/fruits.jpg";

export const categories = [
    {
        name: 'kitchen',
        link: '/kitchen',
        img: kitchenImg,
    },
    {
        name: 'bar',
        link: '/bar',
        img: barImg,
    },
    {
        name: 'hookah',
        link: '/hookah',
        img: hookahImg,
    },
]

export const kitchenCategories = [
    {
        name: 'snacks',
        link: 'snacks',
        img: snackImg
    },
    {
        name: 'salads',
        link: 'salads',
        img: saladImg
    },
    {
        name: 'pizza',
        link: 'pizza',
        img: pizzaImg
    },
    {
        name: 'pasta',
        link: 'pasta',
        img: pastaImg
    },
    {
        name: 'hot dishes',
        link: 'hot-dishes',
        img: hotDishImg
    },
    {
        name: 'soups',
        link: 'soups',
        img: soupImg
    },
    {
        name: 'burgers',
        link: 'burgers',
        img: burgerImg
    },
    {
        name: 'sandwiches',
        link: 'sandwiches',
        img: sandwichImg
    },
    {
        name: 'sauces',
        link: 'sauces',
        img: sauceImg
    },
    {
        name: 'garnish',
        link: 'garnish',
        img: garnishImg
    },
    {
        name: 'fruits',
        link: 'fruits',
        img: fruitsImg
    },
]

export const barCategories = [
    {
        name: 'coffee',
        link: 'bar/coffee',
        img: fruitsImg,
        prods: [
            {
                name: 'espresso',
                price: 1100
            },
            {
                name: 'double espresso',
                price: 1800
            },
            {
                name: 'espresso long',
                price: 1300
            },

            {
                name: 'freddo espresso',
                price: 1400
            },

            {
                name: 'Americano',
                price: 1200
            },

            {
                name: 'Cappuccino',
                price: 1400
            },

            {
                name: 'Cappuccino Aroma',
                price: 1800
            },

            {
                name: 'LATTE MACCHIATO',
                price: 1400
            },

            {
                name: 'Glasse bUild',
                price: 2200
            },

            {
                name: 'Mix Glasse',
                price: 2200
            },

            {
                name: 'Flat White',
                price: 1600
            },

            {
                name: 'Raf Coffee',
                price: 2200
            },

            {
                name: 'Hot Chocolate',
                price: 2300
            },

            {
                name: 'Black Coffee',
                price: 1100
            },
        ]
    },
    {
        name: 'tea',
        link: 'bar/tea',
        img: fruitsImg,
        prods: [
            {
                name: 'Black Tea',
                price: 1300
            },
            {
                name: 'Green Tea',
                price: 1300
            },
            {
                name: 'Armenian bouquet',
                price: 1300
            },
            {
                name: 'Cinnamon Clove',
                price: 1500
            },
            {
                name: 'Ginger Lemon Honey',
                price: 2200
            },
            {
                name: 'Arabian Mint',
                price: 3200
            },
            {
                name: 'Masala',
                price: 3600
            },
            {
                name: 'Sea Buckthorn',
                price: 2600
            },
            {
                name: 'Berries',
                price: 2400
            },
            {
                name: 'Citrus',
                price: 2400
            },
        ]
    },
    {
        name: 'soft drinks',
        link: 'bar/soft-drinks',
        img: fruitsImg,
        prods: [
            {
                name: 'Water',
                price: 600
            },
            {
                name: 'Sparkling Water',
                price: 600
            },
            {
                name: 'Cola / Fanta / Sprite',
                price: 600
            },
            {
                name: 'Tonic',
                price: 1000
            },
            {
                name: 'Red Bull',
                price: 1800
            },
        ]
    },
    {
        name: 'ice tea',
        link: 'bar/ice-tea',
        img: fruitsImg,
        prods: [
            {
                name: 'PEACH',
                price: 1800,
            },
            {
                name: 'MINT',
                price: 1800,
            },
            {
                name: 'Strawberry',
                price: 1800,
            },
            {
                name: 'Berries',
                price: 1800,
            },
            {
                name: 'Citrus',
                price: 1800,
            }
        ]
    },
    {
        name: 'lemonade',
        link: 'bar/lemonade',
        img: fruitsImg,
        prods: [
            {
                name: 'Citrus Mix',
                price: [1800, 4700],
            },
            {
                name: 'Berries',
                price: [2100, 5200],
            },
            {
                name: 'Tropical',
                price: [2400, 5400],
            },
            {
                name: 'Mandarin',
                price: [2400, 5400],
            },
            {
                name: 'Lemon MINT',
                price: [1800, 4700],
            },
            {
                name: 'MANGO MARACUJA',
                price: [2700, 6300],
            },
        ]
    },
    {
        name: 'fresh',
        link: 'bar/fresh',
        img: fruitsImg,
        prods: [
            {
                name: 'Carrot',
                price: 2400
            },
            {
                name: 'Apple',
                price: 2400
            },
            {
                name: 'Carrot Apple',
                price: 2400
            },
            {
                name: 'Orange',
                price: 2100
            },
            {
                name: 'Grapefruit',
                price: 2100
            },
            {
                name: 'Pomegranate',
                price: 6000
            },
            {
                name: 'Banana',
                price: 3200
            },
            {
                name: 'Strawberry',
                price: 3200
            },
            {
                name: 'Banana Strawberry',
                price: 3500
            },
            {
                name: 'Berries',
                price: 3700
            },
            {
                name: 'Pineapple',
                price: 4800
            },
            {
                name: 'Kiwi',
                price: 3300
            },
        ]
    },
    {
        name: 'Milk shake',
        link: 'bar/milk-shake',
        img: fruitsImg,
        prods: [
            {
                name: 'Bounty',
                price: 3400,
            },
            {
                name: 'Vanilla',
                price: 2900,
            },
            {
                name: 'Chocolate',
                price: 2900,
            },
            {
                name: 'Berries',
                price: 3500,
            },
            {
                name: 'Strawberry',
                price: 3200,
            },
            {
                name: 'Banana',
                price: 3200,
            },
            {
                name: 'Banana Strawberry',
                price: 3400,
            },
            {
                name: 'Nutella',
                price: 3900,
            },
        ]
    },
    {
        name: 'vodka',
        link: 'bar/vodka',
        img: fruitsImg,
        prods: [
            {
                name: 'Absolut',
                price: 1200
            },
            {
                name: 'ohanyan',
                price: 1600
            },
            {
                name: 'ohanyan ice',
                price: 1800
            },
            {
                name: 'Finlandia',
                price: 1200
            },
            {
                name: 'Grey Goose',
                price: 4000
            },
            {
                name: 'Organic',
                price: 2700
            },
            {
                name: 'Chistie Rosi',
                price: 2700
            },
            {
                name: 'Beluga',
                price: 2900
            },
        ]
    },
    {
        name: 'rum',
        link: 'bar/rum',
        img: fruitsImg,
        prods: [
            {
                name: 'Havana club 3',
                price: 2400
            },
            {
                name: 'Havana club 7',
                price: 2700
            },
            {
                name: 'Bacardi White',
                price: 3200
            },
            {
                name: 'Bacardi Carta Negra',
                price: 3500
            },
            {
                name: 'Bacardi Spiced',
                price: 3500
            },
        ]
    },
    {
        name: 'whiskey',
        link: 'bar/whiskey',
        img: fruitsImg,
        prods: [
            {
                name: 'Jack Daniels',
                price: 3000
            },
            {
                name: 'Jack Daniels Honey',
                price: 3000
            },
            {
                name: 'Jack Daniels Apple',
                price: 3000
            },
            {
                name: 'Jameson',
                price: 3200
            },
            {
                name: 'Ballantines',
                price: 2900
            },
            {
                name: 'Jim Beam',
                price: 2600
            },
            {
                name: 'Chivas Regal 12',
                price: 4500
            },
            {
                name: 'Chivas Regal 18',
                price: 6500
            },
        ]
    },
    {
        name: 'tequila',
        link: 'bar/tequila',
        img: fruitsImg,
        prods: [
            {
                name: 'Olmeca Blanco',
                price: 3200
            },
            {
                name: 'Olmeca Reposado',
                price: 5100
            },
            {
                name: 'Patron Silver',
                price: 4500
            },
            {
                name: 'Patron Reposado',
                price: 5100
            },
        ]
    },
    {
        name: 'liqueur',
        link: 'bar/liqueur',
        img: fruitsImg,
        prods: [
            {
                name: 'Jagermeister',
                price: 2400
            },
            {
                name: 'Fire Ball',
                price: 2800
            },
            {
                name: 'Becherovka',
                price: 2100
            },
            {
                name: 'Baileys',
                price: 2100
            },
            {
                name: 'Kahlua',
                price: 2100
            },
            {
                name: 'Malibu',
                price: 1900
            },
            {
                name: 'Sambuca',
                price: 3000
            },
            {
                name: 'Absent',
                price: 3000
            },
            {
                name: 'Disaronno',
                price: 2400
            },
        ]
    },
    {
        name: 'vermouth',
        link: 'bar/vermouth',
        img: fruitsImg,
        prods: [
            {
                name: 'Martini Bianco',
                price: 1900
            },
            {
                name: 'Martini Rosso',
                price: 2100
            },
            {
                name: 'Campari',
                price: 2400
            },
            {
                name: 'APEROL',
                price: 2400
            },
        ]
    },
    {
        name: 'gin',
        link: 'bar/gin',
        img: fruitsImg,
        prods: [
            {
                name: 'Beefeater',
                price: 2300
            },
            {
                name: 'Bombay Sapphire',
                price: 2700
            },
            {
                name: 'Hendriks',
                price: 3200
            },
        ]
    },
    {
        name: 'brandy',
        link: 'bar/brandy',
        img: fruitsImg,
        prods: [
            {
                name: 'ARARAT 5 Y.O.',
                price: 2300
            },
            {
                name: 'aRARAT AKHTAMAR 10 Y.O.',
                price: 3000
            },
            {
                name: 'ARARAT NAIRI 20 Y.O. ',
                price: 7500
            },
            {
                name: 'ARARAT COFFEE / APRICOT / CHERRY',
                price: 2200
            },
        ]
    },
    {
        name: 'wine',
        link: 'bar/wine',
        img: fruitsImg,
        prods: [
            {
                name: 'Fantini red / white',
                price: 3000
            },
            {
                name: 'Tus white',
                price: 2600
            },
            {
                name: 'Frunzik red / white / rose',
                price: 2400
            },
            {
                name: 'Karas red / white / rose',
                price: 2200
            },
            {
                name: 'Koor red / white',
                price: 2400
            },
        ]
    },
    {
        name: 'champagne',
        link: 'bar/champagne',
        img: fruitsImg,
        prods: [
            {
                name: 'Martini Brut',
                price: 24000
            },
            {
                name: 'Martini Rose',
                price: 24000
            },
            {
                name: 'Martini Asti',
                price: 24000
            },
            {
                name: 'Armenian Champagne',
                price: 6000
            },
            {
                name: 'Karas',
                price: 15000
            },
            {
                name: 'Moet & Chandon Classic',
                price: 95000
            },
            {
                name: 'Moet & Chandon rose',
                price: 115000
            },
            {
                name: 'Dom Perignon Vintage',
                price: 240000
            },
            {
                name: 'Dom Perignon Vintage rose',
                price: 350000
            },
        ]
    },
    {
        name: 'cocktails',
        link: 'bar/cocktails',
        img: fruitsImg,
        prods: [
            {
                name: 'The Babylon',
                price: 15000
            },
            {
                name: 'Tequila Boom',
                price: 3000
            },
            {
                name: 'Cosmopolitan',
                price: 4000
            },
            {
                name: 'Aperol Spritz',
                price: 4500
            },
            {
                name: 'May Tai',
                price: 4000
            },
            {
                name: 'Old Fashion',
                price: 3500
            },
            {
                name: 'Margarita',
                price: 4500
            },
            {
                name: 'Long Island',
                price: 5500
            },
            {
                name: 'Negroni',
                price: 5700
            },
            {
                name: 'Sex on the Beach',
                price: 3800
            },
            {
                name: 'Espresso Martini',
                price: 4300
            },
            {
                name: 'Manhattan',
                price: 4200
            },
            {
                name: 'Tokio Ice',
                price: 5500
            },
            {
                name: 'Miami Ice',
                price: 5500
            },
            {
                name: 'Mohito',
                price: 3500
            },
            {
                name: 'Mohito Strawberry',
                price: 3800
            },
            {
                name: 'Daiquiri',
                price: 3700
            },
            {
                name: 'Dry Martini',
                price: 3900
            },
            {
                name: 'Whiskey Sour',
                price: 4200
            },
            {
                name: 'Amaretto sour',
                price: 3900
            },
            {
                name: 'Cuba Libre',
                price: 4500
            },
            {
                name: 'Blue Lagoon',
                price: 3800
            },
            {
                name: 'Moskow Mule',
                price: 4300
            },
            {
                name: 'Tequila Sunrise',
                price: 4700
            },
            {
                name: 'Pina Colada',
                price: 3200
            },
            {
                name: 'White Russian',
                price: 4300
            },
            {
                name: 'Black Russian',
                price: 3900
            },
            {
                name: 'Zombie',
                price: 6500
            },
            {
                name: 'Bloody Mary',
                price: 3500
            },
            {
                name: 'Alexander',
                price: 4000
            },
        ]
    },
    {
        name: 'shots',
        link: 'bar/shots',
        img: fruitsImg,
        prods: [
            {
                name: 'Hirosima',
                price: 1800
            },
            {
                name: 'B-52',
                price: 1600
            },
            {
                name: 'B-53',
                price: 1900
            },
            {
                name: 'b-54',
                price: 2000
            },
            {
                name: 'Meduza',
                price: 2400
            },
            {
                name: 'Dostoyevski',
                price: 1200
            },
            {
                name: 'Doudou',
                price: 1200
            },
            {
                name: 'Cockroach',
                price: 1700
            },
            {
                name: 'Brain Tumor',
                price: 2500
            },
        ]
    },
    {
        name: 'special sets',
        link: 'bar/special-sets',
        img: fruitsImg,
        prods: [
            {
                name: 'the road to babylon',
                price: 48000
            }
        ]
    }
]