import React, { useState } from 'react';
import menuList from '../temp/HomePageMiniMenuData.js';
import pizzaAnm from '../assets/images/pizzaAnm.jpg';
import wrapAnm from '../assets/images/wrapAnm.jpg';
import noodlesAnm from '../assets/images/noodlesAnm.jpg';
import coffeeAnm from '../assets/images/coffeeAnm.jpg';
import cakeAnm from '../assets/images/cakeAnm.jpg';
import burgerAnm from '../assets/images/burgerAnm.jpg';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
            <div className='py-20 px-20 grid grid-cols-2'>

                <div>
                    <div className="bg-teal-200 text-teal-600 rounded-full w-40 p-2 ml-20 inline-flex justify-center">
                        Menu
                    </div>

                    <div className="grid grid-rows-3 grid-flow-col gap-3 w-80 py-8">
                        {Object.keys(menuList).map((item, index) => (
                            <div key={index} className={`flex py-3 px-3 gap-3 w-40 ${selectedItem === item ? 'bg-teal-200 rounded-full' : 'bg-none'}`}>
                                <img
                                    src={mapping[item]}
                                    alt="loading"
                                    className="w-10 h-10 rounded-full bg-none"
                                />
                                <button
                                    onClick={() => handleClick(item)}
                                    className='w-10 h-10 hover:text-teal-400'
                                >
                                    {item}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-full max-w-sm"
                    >
                        <CarouselContent>
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card>
                                            <CardContent className="flex aspect-square items-center justify-center p-6">
                                                <span className="text-3xl font-semibold">{index + 1}</span>
                                            </CardContent>
                                        </Card>
                                    </div>
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
