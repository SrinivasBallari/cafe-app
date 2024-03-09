import ProductDescSection from "@/components/product/ProductDescSection";
import ProductImagesSection from "@/components/product/ProductImagesSection";
import YouMayLike from "@/components/product/YouMayLikeSection";
import RatingSection from "@/components/product/RatingSection";
import ProductReviewSection from "@/components/product/ProductReviewSection";
import productData from "@/temp/Product";
import HomeFooterSection from "@/components/Home/HomeFooterSection";

const Product = () => {
    return (
        <div className="space-y-6 sm:mt-20">
            <div className="grid grid-cols-1 min-[900px]:grid-cols-2 min-[900px]:items-end">
                <ProductImagesSection imagesList={productData.images} />
                <ProductDescSection productDesc={productData.description} />
            </div>

            <YouMayLike items={productData.mayAlsoLike} />
            <div className="sm:m-16">
                <RatingSection ratings={productData.ratings} />
                <ProductReviewSection reviews={productData.customerReviews} />
            </div>
            <HomeFooterSection />
        </div>
    )
}

export default Product;