import { FaArrowRight } from "react-icons/fa";

const ServicesCard = ({ service }) => {
    const { title, img, price } = service || {}
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className="h-52 w-full" src={img} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold text-[#444]">{title}</h2>
                    <p className="text-[#FF3811] font-semibold text-xl">Price: ${price}</p>
                    <div className="card-actions justify-end">
                        <button className="btn text-[#FF3811] ">
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default ServicesCard;