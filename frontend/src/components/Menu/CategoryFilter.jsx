import categoryList from "@/temp/Category";
import { Checkbox } from "@/components/ui/checkbox"

const CategoryFilter = () => {
    return (
        <div className="flex flex-col gap-3 px-10 py-10">
            <p className="font-semibold text-lg">CATEGORY</p>
            {categoryList.map((category) => (
                <div className="flex items-center space-x-2">
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