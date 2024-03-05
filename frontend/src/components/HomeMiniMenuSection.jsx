import React, { useState } from 'react';
import menuList from '../temp/HomePageMiniMenuData.js';
import pizzaAnm from '../assets/images/pizzaAnm.jpg';
import wrapAnm from '../assets/images/wrapAnm.jpg';
import noodlesAnm from '../assets/images/noodlesAnm.jpg';
import coffeeAnm from '../assets/images/coffeeAnm.jpg';
import cakeAnm from '../assets/images/cakeAnm.jpg';
import burgerAnm from '../assets/images/burgerAnm.jpg';
import { Button } from './ui/button.jsx';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Home from '@/pages/Home.jsx';

const HomeMiniMenuSection = () => {
    const [selectedItem, setSelectedItem] = useState("Coffee");

    const mapping = {
        Coffee: coffeeAnm,
        Burger: burgerAnm,
        Pizza: pizzaAnm,
        Noodles: noodlesAnm,
        Wraps: wrapAnm,
        Desserts: cakeAnm,
    };

    const handleClick = (item) => {
        setSelectedItem(item);
    };

    return (
        <>
            <div className='flex flex-col pb-20 px-20 2xl:grid 2xl:grid-cols-3'>

                <div className='flex justify-center'>

                    <div className="grid grid-rows-3 grid-flow-col gap-10 2xl:w-10/12 py-10">
                        {Object.keys(menuList).map((item, index) => (
                            <div key={index} className={`flex justify-start items-center w-[160px] h-[60px] ${selectedItem === item ? 'bg-teal-200 rounded-full' : 'bg-none'}`}>
                                <img
                                    src={mapping[item]}
                                    alt="loading"
                                    className="w-14 h-14 rounded-full bg-none"
                                />
                                <button
                                    onClick={() => handleClick(item)}
                                    className='w-20 h-20 hover:text-teal-600'
                                >
                                    {item}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='col-span-2'>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="relative"
                    >
                        <CarouselContent>
                            {menuList[selectedItem].map((obj, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                                    <Card className="bg-gradient-to-t from-teal-200 drop-shadow-xl">
                                        <CardHeader>
                                            <CardTitle>{obj.name}</CardTitle>
                                            <CardDescription>just at {obj.price} $</CardDescription>
                                        </CardHeader>
                                        <CardDescription className="mx-5 flex justify-center pb-6">
                                            <img src={obj.image} alt="loading" />
                                        </CardDescription>
                                        <CardFooter className="flex justify-end ">
                                            <Button className='bg-teal-100 text-teal-600 hover:bg-white hover:text-black'>Order Now...</Button>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </div>

        </>
    );
};

export default HomeMiniMenuSection;
