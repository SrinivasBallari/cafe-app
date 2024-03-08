import ProductDescSection from "@/components/product/ProductDescSection";
import ProductImagesSection from "@/components/product/ProductImagesSection";
import YouMayLike from "@/components/product/YouMayLikeSection";
import RatingSection from "@/components/product/RatingSection";
import productData from "@/temp/Product";

const Product = () => {
    return (
        <div className="space-y-6">
            <ProductImagesSection imagesList={productData.images}/>
            <ProductDescSection productDesc={productData.description}/>
            <YouMayLike items={productData.mayAlsoLike}/>
            <RatingSection ratings={productData.ratings}/>
        </div>
    )
}

export default Product;