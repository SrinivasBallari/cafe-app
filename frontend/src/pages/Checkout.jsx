import productsInCart from "@/temp/Cart";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import HomeFooterSection from "@/components/Home/HomeFooterSection";


const Checkout = () => {


    return (
        <>
            <div className="p-4 m-2 md:p-10 md:m-4 grid grid-cols-1 xl:grid-cols-2">
                <div className="col-span-1 flex flex-col items-center ">
                    <h3 className="py-4 text-2xl">Billing Information</h3>
                    <form className="space-y-6">
                        <div className="flex flex-col lg:flex-row lg:gap-4">
                            <div className="px-2 py-2 space-y-2">
                                <label className="mr-4 block">First Name</label>
                                <input type="text" placeholder='Enter First Name' className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>
                            <div className="px-2 py-2 space-y-2">
                                <label className="mr-4 block">Last Name</label>
                                <input type="text" placeholder='Enter Last Name' className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:gap-4">

                            <div className="px-2 py-2 space-y-2">
                                <label className="mr-4 block">Phone Number</label>
                                <input type="text" placeholder="+91 90XXX-45XXX" className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>
                            <div className="px-2 py-2 space-y-2 ">
                                <label className="mr-4 block">City</label>
                                <input type="text" placeholder="Hyderabad" className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>

                        </div>

                        <div className="flex flex-col lg:flex-row lg:gap-4">

                            <div className="px-2 py-2 space-y-2">
                                <label className="mr-4 block">State</label>
                                <input type="text" placeholder="Telangana" className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>
                            <div className="px-2 py-2 space-y-2">
                                <label className="mr-4 block">Zip Code</label>
                                <input type="number" placeholder="50010" className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>
                        </div>

                        <div className="flex flex-col lg:flex-row ml-2 lg:pt-6">
                            <label className="mr-4 block pb-2">Address</label>
                            <textarea name="address" id="address" placeholder="Enter Complete Address" className="pl-4 py-2 w-80 h-40 rounded-2xl border border-gray-300 "></textarea>
                        </div>

                        <div className="flex flex-col gap-4">
                            <label className="mr-4 block pb-2">Payement Mode</label>
                            <RadioGroup defaultValue="option-one" className='gap-4 pl-6'>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one">Cash on delivery</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label htmlFor="option-two">UPI</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-three" id="option-three" />
                                    <Label htmlFor="option-three">Credit / Debit card</Label>
                                </div>
                            </RadioGroup>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:gap-4">

                            <div className="px-2 py-2 space-y-2">
                                <label className="mr-4 block">Card Holder Name</label>
                                <input type="text" placeholder="Bill Gates" className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>
                            <div className="px-2 py-2 space-y-2">
                                <label className="mr-4 block">Card Number</label>
                                <input type="text" placeholder="xxxx xxxx xxxx xxxx" className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row lg:gap-4">

                            <div className="px-2 py-2 space-y-2">
                                <label className="mr-4 block">Expiry Date</label>
                                <input type="text" placeholder="DD/YY" className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>
                            <div className="px-2 py-2 space-y-2">
                                <label className="mr-4 block">CVV</label>
                                <input type="number" placeholder="***" className="pl-4 py-2  rounded-full border border-gray-300 " />
                            </div>
                        </div>
                    </form>
                </div>

                <div className='m-2 pt-2 md:p-10 md:m-4 pb-10'>
                    <div>
                        <Card>
                            <CardHeader>
                                <CardTitle className='text-xl'>Order Summary</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col gap-4 border-b">
                                    {productsInCart.map((prod, index) => (
                                        <div className="flex justify-between items-center mb-2 pb-2 border-b-2" key={index}>
                                            <img src={prod.image} alt="loading" className="w-20 h-20" />
                                            <div className="flex flex-col justify-end items-end gap-2">
                                                <p className="text-sm text-gray-500">{prod.name}</p>
                                                <p className="text-sm text-gray-500">{prod.quantity} x {prod.price}$</p>
                                            </div>
                                        </div>
                                    ))}

                                    <div className='flex justify-between'>
                                        <p className='text-sm text-gray-500'>sub-total</p>
                                        <p className="text-sm text-gray-500">$320</p>
                                    </div>
                                    <div className='flex justify-between '>
                                        <p className='text-sm text-gray-500'>delivery</p>
                                        <p className="text-sm text-gray-500">$5</p>
                                    </div>
                                    <div className='flex justify-between '>
                                        <p className='text-sm text-gray-500'>discount</p>
                                        <p className="text-sm text-gray-500">$10</p>
                                    </div>
                                    <div className='flex justify-between mb-3'>
                                        <p className='text-sm text-gray-500'>tax</p>
                                        <p className="text-sm text-gray-500">$12</p>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">

                                <Button className='bg-teal-200 hover:bg-teal-300 text-teal-700 rounded-full'>Place Order</Button>
                                <div className='flex flex-col items-end'>
                                    <p>Total</p>
                                    <p>$ 347.00</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            <HomeFooterSection />
        </>
    )
}

export default Checkout;