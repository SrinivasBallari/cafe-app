import ProductDescSection from "@/components/product/ProductDescSection";
import ProductImagesSection from "@/components/product/ProductImagesSection";
import productData from "@/temp/Product";

const Product = () => {
    return (
        <div>
            <ProductImagesSection imagesList={productData.images}/>
            <ProductDescSection productDesc={productData.description}/>
        </div>
    )
}

export default Product;