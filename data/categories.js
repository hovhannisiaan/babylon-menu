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
        link: 'tea',
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
        link: 'soft-drinks',
        img: fruitsImg,
        prods: [
            {
                name: 'Water',
                price: 0
            },
            {
                name: 'Sparkling Water',
                price: 0
            },
            {
                name: 'Cola / Fanta / Sprite',
                price: 0
            },
            {
                name: 'Tonic',
                price: 0
            },
            {
                name: 'Red Bull',
                price: 0
            },
        ]
    },
    {
        name: 'ice tea',
        link: 'ice-tea',
        img: fruitsImg
    },
    {
        name: 'lemonade',
        link: 'lemonade',
        img: fruitsImg
    },
    {
        name: 'fresh',
        link: 'fresh',
        img: fruitsImg
    },
    {
        name: 'Milk shake',
        link: 'milk-shake',
        img: fruitsImg
    },
    {
        name: 'vodka',
        link: 'vodka',
        img: fruitsImg
    },
    {
        name: 'rum',
        link: 'rum',
        img: fruitsImg
    },
    {
        name: 'whiskey',
        link: 'whiskey',
        img: fruitsImg
    },
    {
        name: 'tequila',
        link: 'tequila',
        img: fruitsImg
    },
    {
        name: 'liqueur',
        link: 'liqueur',
        img: fruitsImg
    },
    {
        name: 'vermouth',
        link: 'vermouth',
        img: fruitsImg
    },
    {
        name: 'gin',
        link: 'gin',
        img: fruitsImg
    },
    {
        name: 'brandy',
        link: 'brandy',
        img: fruitsImg
    },
    {
        name: 'wine',
        link: 'wine',
        img: fruitsImg
    },
    {
        name: 'champagne',
        link: 'champagne',
        img: fruitsImg
    },
    {
        name: 'cocktails',
        link: 'cocktails',
        img: fruitsImg
    },
    {
        name: 'shots',
        link: 'shots',
        img: fruitsImg
    },
    {
        name: 'special sets',
        link: 'special-sets',
        img: fruitsImg
    }
]