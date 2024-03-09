const ProductReview = ({ reviews }) => {

    return (
        <div className="p-4">
            <h3 >Customer Review</h3>
            {reviews.map((customer, index) => (
                <div className="py-2" key={index}>
                    <div key={index} className='flex rounded-full w-48 items-center py-4 px-2'>
                        <div className='h-12 w-12 mr-2'>
                            <img src={customer.image} alt="loading" className='rounded-full w-full h-full' />
                        </div>
                        <div className="ml-2">
                            <h3 className='text-sm'>{customer.name}</h3>
                            <p>{customer.rating} ⭐</p>
                        </div>
                    </div>
                    <div className="text-start pl-2 text-sm text-gray-600">
                        {customer.comment}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProductReview;