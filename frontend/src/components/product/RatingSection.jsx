
const RatingSection = ({ ratings }) => {

    let fiveStarRatingPercentage = Math.ceil((ratings.fiveStarsCount / ratings.totalCount) * 100);
    let fourStarRatingPercentage = Math.ceil((ratings.fourStarsCount / ratings.totalCount) * 100);
    let threeStarRatingPercentage = Math.ceil((ratings.threeStarsCount / ratings.totalCount) * 100);
    let twotarRatingPercentage = Math.ceil((ratings.twoStarsCount / ratings.totalCount) * 100);
    let oneStarRatingPercentage = Math.ceil((ratings.oneStarsCount / ratings.totalCount) * 100);

    return (
        <div className="p-10 lg:grid lg:grid-cols-4">
            <div className="flex flex-col lg:justify-stretch px-4 mb-4 lg:col-span-1">
                <h2 className="p-2 text-2xl font-normal">Customer Rating</h2>
                <div className="bg-teal-100 flex flex-col justify-center items-center py-8 rounded-lg lg:h-full">
                    <h4 className="text-6xl font-medium mb-2">4.5</h4>
                    <section className="mb-2">⭐ ⭐ ⭐ ⭐</section>
                    <p className="text-sm text-gray-600">Customer Rating's &nbsp; (&nbsp; {ratings.totalCount}&nbsp;)</p>
                </div>
            </div>
            <div className="lg:col-span-3">
                <div className="flex flex-col px-6 py-2 gap-2 justify-center items-start">
                    <section className="">⭐ ⭐ ⭐ ⭐ ⭐</section>
                    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
                        <div
                            className="h-full bg-teal-500 transition-all ease-in-out duration-300"
                            style={{ width: `${fiveStarRatingPercentage}%` }}
                        ></div>
                    </div>
                    <h4 className="text-sm text-gray-600">{fiveStarRatingPercentage}% &nbsp; (&nbsp;{ratings.fiveStarsCount}&nbsp;)</h4>
                </div>
                <div className="flex flex-col px-6 py-2 gap-2 justify-center items-start">
                    <section className="">⭐ ⭐ ⭐ ⭐ </section>
                    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
                        <div
                            className="h-full bg-teal-500 transition-all ease-in-out duration-300"
                            style={{ width: `${fourStarRatingPercentage}%` }}
                        ></div>
                    </div>
                    <h4 className="text-sm text-gray-600">{fourStarRatingPercentage}% &nbsp; (&nbsp;{ratings.fourStarsCount}&nbsp;)</h4>
                </div>
                <div className="flex flex-col px-6 py-2 gap-2 justify-center items-start">
                    <section className="">⭐ ⭐ ⭐</section>
                    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
                        <div
                            className="h-full bg-teal-500 transition-all ease-in-out duration-300"
                            style={{ width: `${threeStarRatingPercentage}%` }}
                        ></div>
                    </div>
                    <h4 className="text-sm text-gray-600">{threeStarRatingPercentage}% &nbsp; (&nbsp;{ratings.threeStarsCount}&nbsp;)</h4>
                </div>
                <div className="flex flex-col px-6 py-2 gap-2 justify-center items-start">
                    <section className="">⭐ ⭐</section>
                    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
                        <div
                            className="h-full bg-teal-500 transition-all ease-in-out duration-300"
                            style={{ width: `${twotarRatingPercentage}%` }}
                        ></div>
                    </div>
                    <h4 className="text-sm text-gray-600">{twotarRatingPercentage}% &nbsp; (&nbsp;{ratings.twoStarsCount}&nbsp;)</h4>
                </div>
                <div className="flex flex-col px-6 py-2 gap-2 justify-center items-start">
                    <section className="">⭐</section>
                    <div className="w-full h-2 bg-gray-300 rounded overflow-hidden">
                        <div
                            className="h-full bg-teal-500 transition-all ease-in-out duration-300"
                            style={{ width: `${oneStarRatingPercentage}%` }}
                        ></div>
                    </div>
                    <h4 className="text-sm text-gray-600">{oneStarRatingPercentage}% &nbsp; (&nbsp;{ratings.oneStarsCount}&nbsp;)</h4>
                </div>
            </div>
        </div>
    )
}

export default RatingSection;