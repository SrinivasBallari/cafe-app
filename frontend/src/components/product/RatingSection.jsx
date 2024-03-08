
const RatingSection = ({ratings}) => {
    return (
        <div>
            <div className="flex flex-col px-4 mb-4">
                <h2 className="p-2 text-xl font-normal">Customer Rating</h2>
                <div className="bg-teal-100 flex flex-col justify-center items-center py-8 rounded-lg">
                    <label className="text-6xl font-medium mb-2">4.5</label>
                    <section className="mb-2">⭐ ⭐ ⭐ ⭐</section>
                    <p className="text-sm text-gray-600">Customer Rating's &nbsp; (&nbsp; {ratings.totalCount}&nbsp;)</p>
                </div>
            </div>
        </div>
    )
}

export default RatingSection;