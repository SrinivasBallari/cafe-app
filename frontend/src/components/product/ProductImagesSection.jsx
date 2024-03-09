import { useState } from "react";

const ProductImagesSection = ({ imagesList }) => {

    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    return (
        <div className="flex flex-col justify-center p-4">
            <img src={imagesList[selectedImageIndex]} alt="loading" className="max-w-full h-full mx-auto"/>
            <div className="flex justify-center items-center p-4 gap-4">
                {imagesList.map((img, index) => (
                    <button key={index} className="size-24" onClick={() => setSelectedImageIndex(index)}>
                        <img src={img} alt="loading" className={index == selectedImageIndex ? "ring ring-teal-200 rounded-lg" : ""} />
                    </button>
                ))}
            </div>

        </div>
    )
}

export default ProductImagesSection;