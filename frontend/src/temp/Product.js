import prod1 from "../assets/images/prod1.png";
import prod2 from "../assets/images/prod2.png";
import prod3 from "../assets/images/prod3.png";
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
    fiveStarsCount: 1200,
    fourstarsCount: 1399,
    threeStarCount: 114,
    twoStarCount: 30,
    oneStarCount: 0,
    customerReviews: {
        "Alice Johnson": {
            image: homePageRandomGuy,
            rating: "4",
            comment:
                "Great food and excellent service. The atmosphere is cozy and inviting. Will definitely come back!",
        },
        "Bob Smith": {
            image: homePageRandomGuyTwo,
            rating: "5",
            comment:
                "Amazing experience! The dishes were flavorful, and the staff was friendly and attentive. Highly recommended.",
        },
        "Charlie Davis": {
            image: homePageRandomGirl,
            rating: "3",
            comment:
                "Decent place. The food was okay, but the service could be improved. Prices are reasonable.",
        },
        "Diana Martinez": {
            image: "no-data",
            rating: "4",
            comment:
                "Enjoyed my meal here. The presentation of the dishes was impressive, and the flavors were satisfying.",
        },
    },
};

export default productData;
