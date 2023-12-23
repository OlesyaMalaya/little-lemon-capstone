import { greekSalad, bruschetta, lemonDessert, pasta, seabass, coffee, tea, lemonade } from "./images";

export const dishes = [
    {
        id: 1,
        name: 'Greek Salad',
        description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic.",
        price: 12.99,
        image: greekSalad,
        isSpecials: true,
        category: "Main Course",
    },
    {
        id: 2,
        name: 'Bruschetta',
        description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        price: 5.99,
        image: bruschetta,
        isSpecials: true,
        category: "Appetizers",
    },
    {
        id: 3,
        name: 'Lemon Dessert',
        description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        price: 7.99,
        image: lemonDessert,
        isSpecials: true,
        category: "Desserts",
    },
    {
        id: 4,
        name: 'Pasta',
        description: "Each strand of al dente pasta is lovingly coated in a velvety truffle-infused sauce, creating a symphony of flavors that dance on your palate.",
        price: 10.99,
        image: pasta,
        isSpecials: false,
        category: "Main Course",
    },
    {
        id: 5,
        name: 'Sea Bass',
        description: "Marinated with a blend of Mediterranean herbs and zesty citrus and served with a side of roasted vegetables.",
        price: 13.99,
        image: seabass,
        isSpecials: false,
        category: "Main Course",
    },
    {
        id: 6,
        name: 'Coffee',
        description: "Sourced from the world's finest coffee beans, this robust blend boasts a symphony of flavors that will tantalize your taste buds.",
        price: 2.99,
        image: coffee,
        isSpecials: false,
        category: "Beverages",
    },
    {
        id: 7,
        name: 'Tea',
        description: "Immerse yourself in tranquility with our Serenity Chai Infusion, a harmonious blend that transcends the ordinary.",
        price: 2.99,
        image: tea,
        isSpecials: false,
        category: "Beverages",
    },
    {
        id: 8,
        name: 'Lemonade',
        description: "Handcrafted with the juiciest lemons, each sip is a delightful burst of citrusy goodness, balanced perfectly with a touch of sweetness.",
        price: 1.99,
        image: lemonade,
        isSpecials: false,
        category: "Beverages",
    },
];

export const specials = dishes.filter((dish) => dish.isSpecials);
export const mainDishes = dishes.filter((dish) => dish.category === "Main Course");
export const desserts = dishes.filter((dish) => dish.category === "Desserts");
export const beverages = dishes.filter((dish) => dish.category === "Beverages");
export const appetizers = dishes.filter((dish) => dish.category === "Appetizers");
