import { FaArrowRight } from "react-icons/fa";

const ProductsCard = ({ product }) => {
    const { name, price, image } = product || {}
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-40" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <h2 className="card-title text-2xl font-bold text-[#444]">{name}</h2>
                    <p className="text-[#FF3811] font-semibold text-xl">Price: ${price}</p>
                    <div className="card-actions">
                        <button className="btn text-[#FF3811] ">
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;