import prod1 from "../assets/images/prod1.png";
import prod2 from "../assets/images/prod2.png";
import prod3 from "../assets/images/prod3.png";
import noodles4 from "../assets/images/noodles4.png";
import cookies1 from "../assets/images/cookies1.png";
import wrap from "../assets/images/wrap.png";
import thali1 from "../assets/images/thali1.png";
import homePageRandomGuy from "../assets/images/homePageRandomGuy.png";
import homePageRandomGirl from "../assets/images/homePageRandomGirl.png";
import homePageRandomGuyTwo from "../assets/images/homePageRandomGuyTwo.png";

const productData = {
    images: [prod1, prod2, prod3],
    description: {
        name: "Burrito Bowl",
        rating: 4.7,
        numberOfReviews: "23,181",
        text: "Mexican burritos are usually made with a wheat tortilla and contain grilled meat, cheese toppings, and fresh vegetables which are sources of vitamins, proteins, fibers, minerals, and antioxidants. This makes burritos a balanced meal.",
        tags: ["Non-Veg", "Mexican", "Breakfast"],
        nutrition: [1200, 56, 134, 67],
    },
    mayAlsoLike: [
        {
            name: "Chicken Caesar Wrap",
            rating: 4.5,
            price: 8.99,
            image: wrap,
            category: "Wraps",
        },
        {
            name: "Vegetarian Noodles",
            rating: 3.8,
            price: 7.49,
            image: noodles4,
            category: "Noodles",
        },
        {
            name: "Mexican Burrito Bowl",
            rating: 4.2,
            price: 9.99,
            image: cookies1,
            category: "Burrito Bowls",
        },
        {
            name: "North Indian Thali",
            rating: 4.0,
            price: 12.99,
            image: thali1,
            category: "Thalis",
        },
    ],
    ratings: {
        totalCount: 2743,
        fiveStarsCount: 1904,
        fourStarsCount: 1399,
        threeStarsCount: 794,
        twoStarsCount: 300,
        oneStarsCount: 101,
    },
    customerReviews: [
        {   name: "Alice Johnson",
            image: homePageRandomGuy,
            rating: 4.3,
            comment:"Great food and excellent service. The atmosphere is cozy and inviting. Will definitely come back!",
        },
        {
            name: "Bob Smith",
            image: homePageRandomGuyTwo,
            rating: 4.9,
            comment:"Amazing experience! The dishes were flavorful, and the staff was friendly and attentive. Highly recommended.",
        },
        {
            name: "Charlie Davis", 
            image: homePageRandomGirl,
            rating: 3.2,
            comment:"Decent place. The food was okay, but the service could be improved. Prices are reasonable.",
        },
        {
            name: "Diana Martinez",
            image: homePageRandomGuyTwo,
            rating: 4.1,
            comment:"Enjoyed my meal here. The presentation of the dishes was impressive, and the flavors were satisfying.",
        },
    ]
};

export default productData;
