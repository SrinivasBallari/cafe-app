import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area"

import MenuFilter from "./MenuFilter";
import MenuItemCard from "./MenuItemCard";
import menuData from "@/temp/MenuData";

const MenuGrid = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const lastItemIndex = (currentPage * 6);
    const firstItemIndex = (lastItemIndex - 6);
    const currenPageItems = menuData.slice(firstItemIndex, lastItemIndex);

    let pages = [];
    for (let i = 1; i < Math.ceil(menuData.length / 6); i++) {
        pages.push(i);
    }

    const handlePrevPageClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNextPageClick = () => {
        if (currentPage < pages.length) {
            setCurrentPage(currentPage + 1);
        }
    }

    function PaginationSection() {
        return (
            <Pagination>
                <PaginationContent>
                    <PaginationItem >
                        <PaginationPrevious onClick={() => handlePrevPageClick()} />
                    </PaginationItem>
                    {
                        pages.map((page, index) => (
                            <PaginationItem
                                key={index}
                                className={currentPage == page ? "bg-neutral-200 rounded-md" : ""}>
                                <PaginationLink onClick={() => setCurrentPage(page)}>
                                    {page}
                                </PaginationLink>
                            </PaginationItem>
                        ))
                    }
                    <PaginationItem>
                        <PaginationNext onClick={() => handleNextPageClick()} />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        )
    }


    function FilterSheetSection() {
        return (
            <Sheet>
                <SheetTrigger className="text-xl font-normal px-8 xl:hidden">Filter</SheetTrigger>
                <SheetContent side="left" className='w-screen'>
                    <ScrollArea className='w-screen h-screen'>
                        <MenuFilter />
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        )
    }


    return (
        <div className="flex flex-col space-y-4">
            <div className="pt-6 flex justify-between">
                <p className="text-xl font-normal">Showing {firstItemIndex + 1}-{lastItemIndex} of {menuData.length}</p>
                <FilterSheetSection />
            </div>

            <div className='grid min-[990px]:grid-cols-2 min-[1580px]:grid-cols-3'>
                {currenPageItems.map((obj, index) => (
                    <MenuItemCard name={obj.name} image={obj.image} rating={obj.rating} price={obj.price} key={index} />
                ))}
            </div>
            <PaginationSection />
        </div>

    )
}

export default MenuGrid;