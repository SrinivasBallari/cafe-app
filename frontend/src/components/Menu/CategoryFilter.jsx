import categoryList from "@/temp/Category";
import { Checkbox } from "@/components/ui/checkbox"

const CategoryFilter = () => {
    return (
        <div className="flex flex-col gap-3 px-5 py-5 w-80">
            <p className="text-2xl mb-2">Category</p>
            {categoryList.map((category,index) => (
                <div className="flex items-center space-x-2" key={index}>
                    <Checkbox id={category} />
                    <h4
                        className="text-sm text-gray-800"
                    >
                        {category}
                    </h4>
                </div>
            ))}
        </div>
    )
}

export default CategoryFilter;