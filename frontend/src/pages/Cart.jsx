import productsInCart from '../temp/Cart'
import { useState } from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import HomeFooterSection from '@/components/Home/HomeFooterSection';

const CartPage = () => {

    const [count, setCount] = useState(1);

    const MobileViewForCartRow = ({ item }) => {
        return (
            <div className="lg:hidden bg-white p-4 mb-4 rounded-md shadow-lg w-full">

                <button className="border border-gray-600 text-gray-600 rounded-full h-6 w-6 text-md inline-flex items-center justify-center pb-1 hover:bg-gray-300">x</button>

                <img src={item.image} alt={item.name} className="w-20 h-20  mb-4 mx-auto" />


                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Name:</span>
                    <span>{item.name}</span>
                </div>

                <div className='flex items-center justify-between'>
                    <p className='text-gray-600'> Quantity</p>
                    <div className="mb-2 flex gap-2 border-2 rounded-full border-gray-200 px-1 py-1">
                        <button className="bg-gray-200 rounded-full h-6 w-6 text-xl inline-flex items-center justify-center"> - </button>
                        <p className="px-1">{item.quantity}</p>
                        <button className="bg-gray-200 rounded-full h-6 w-6  inline-flex items-center justify-center"> + </button>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Total:</span>
                    <span>${item.price * item.quantity}</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-gray-600">Price:</span>
                    <span>${item.price}</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="lg:m-8 lg:p-10 m-4 flex flex-col gap-4 xl:grid xl:grid-cols-3 ">
                <div className="xl:col-span-2 border border-gray-200 border-2 rounded-xl">
                    <div className="flex justify-between rounded-t-xl items-center py-4 px-6 ">
                        <h4 className="text-xl font-semibold">Your Cart</h4>
                        <button className="bg-teal-200 hover:bg-teal-300 text-teal-700 rounded-full px-4 py-2">Continue Shopping</button>
                    </div>
                    <div>
                        <div>
                            <div className="bg-gray-100 hidden lg:block ">
                                <div className="flex justify-between text-gray-600  p-4">
                                    <p className='w-1/2'>
                                        PRODUCTS
                                    </p>
                                    <p className='mr-14'>
                                        PRICE
                                    </p>
                                    <p className='mr-14'>
                                        QUANTITY
                                    </p>
                                    <p >
                                        SUB-TOTAL
                                    </p>
                                </div>
                            </div>
                            <div>
                                {productsInCart.map((prod, index) => (
                                    <div key={index} className='flex items-center justify-between p-4 mr-4'>
                                        <MobileViewForCartRow item={prod} />
                                        <div className="hidden lg:inline-flex  flex justify-start gap-2 items-center w-1/2">
                                            <button className="border border-gray-600 text-gray-600 rounded-full h-6 w-6 text-md inline-flex items-center justify-center pb-1 hover:bg-gray-300">x</button>
                                            <img src={prod.image} alt="loading" className="w-20 h-20" />
                                            <p>{prod.name}</p>
                                        </div>
                                        <div className='hidden lg:inline-flex '>
                                            <p className="mr-10">{prod.price} $</p>
                                        </div>

                                        <div className="hidden lg:inline-flex mr-16 flex gap-2 border-2 rounded-full border-gray-200 px-1 py-1">
                                            <button className="bg-gray-200 rounded-full h-6 w-6 text-xl inline-flex items-center justify-center"> - </button>
                                            <p className="px-1">{prod.quantity}</p>
                                            <button className="bg-gray-200 rounded-full h-6 w-6  inline-flex items-center justify-center"> + </button>
                                        </div>
                                        <div className='hidden lg:inline-flex '>
                                            <p>{prod.price * count} $</p>
                                        </div>
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
                <div className=' space-y-4 xl:space-y-none flex flex-col xl:justify-between '>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-xl'>Cart Totals</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-4 border-b">
                                    <div className='flex justify-between p-2'>
                                        <p className=' text-gray-600'>sub-total</p>
                                        <p>$320</p>
                                    </div>
                                    <div className='flex justify-between p-2'>
                                        <p className=' text-gray-600'>delivery</p>
                                        <p>$5</p>
                                    </div>
                                    <div className='flex justify-between p-2'>
                                        <p className=' text-gray-600'>discount</p>
                                        <p>$10</p>
                                    </div>
                                    <div className='flex justify-between p-2'>
                                        <p className=' text-gray-600'>tax</p>
                                        <p>$12</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">

                                <Button className='bg-teal-200 hover:bg-teal-300 text-teal-700 rounded-full'>Checkout</Button>
                                <div className='flex flex-col items-end'>
                                    <p>Total</p>
                                    <p>$ 347.00</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                    <div>
                        <Card >
                            <CardHeader>
                                <CardTitle  className='text-xl' >Coupon Code</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form>
                                    <div className="grid w-full items-center gap-4">
                                        <div className="flex flex-col space-y-1.5">
                                            <label htmlFor="name"></label>
                                            <Input id="name" placeholder="enter coupon code" />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                <Button className='bg-teal-200 hover:bg-teal-300 text-teal-700 rounded-full'>Apply</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            <HomeFooterSection />
        </>
    );
};

export default CartPage;
