import categoryList from "@/temp/Category";
import { Checkbox } from "@/components/ui/checkbox"

const CategoryFilter = () => {
    return (
        <div className="flex flex-col gap-3 px-10 py-5">
            <p className="text-2xl mb-2">Category</p>
            {categoryList.map((category,index) => (
                <div className="flex items-center space-x-2" key={index}>
                    <Checkbox id={category} />
                    <label
                        className="text-sm text-gray-800"
                    >
                        {category}
                    </label>
                </div>
            ))}
        </div>
    )
}

export default CategoryFilter;