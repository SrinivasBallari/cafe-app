import ProductDescSection from "@/components/product/ProductDescSection";
import ProductImagesSection from "@/components/product/ProductImagesSection";
import YouMayLike from "@/components/product/YouMayLikeSection";
import RatingSection from "@/components/product/RatingSection";
import ProductReviewSection from "@/components/product/ProductReviewSection";
import productData from "@/temp/Product";
import HomeFooterSection from "@/components/Home/HomeFooterSection";

const Product = () => {
    return (
        <div className="space-y-6">
            <ProductImagesSection imagesList={productData.images}/>
            <ProductDescSection productDesc={productData.description}/>
            <YouMayLike items={productData.mayAlsoLike}/>
            <RatingSection ratings={productData.ratings}/>
            <ProductReviewSection reviews={productData.customerReviews}/>
            <HomeFooterSection/>
        </div>
    )
}

export default Product;