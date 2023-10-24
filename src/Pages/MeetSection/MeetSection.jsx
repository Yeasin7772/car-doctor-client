import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const MeetSection = () => {
    const [meets, setMeets] = useState()

    useEffect(() => {

        fetch('meets.json')
            .then(res => res.json())
            .then(data => setMeets(data))

    }, [])
    return (
        <div className="mt-4">
            <div className="text-center space-y-5">
                <h2 className="text-2xl font-bold text-[#FF3811]">Team</h2>
                <h1 className="text-5xl">Meet Our Team</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable.   </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    meets?.map(meet => <div key={meet.id}>

                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={meet.image} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl font-bold text-[#444]">{meet.name}</h2>
                                <p className="text-[#737373] font-semibold text-xl">{meet.title}</p>
                                <div className="card-actions">
                                    <div className="flex gap-4">

                                        <FaFacebook className="text-blue-700 h-16 w-8"></FaFacebook>
                                        <FaLinkedin className="text-blue-700 h-16 w-8"></FaLinkedin>
                                        <FaTwitter className="text-blue-500 h-16 w-8"></FaTwitter>
                                        <FaInstagram className="text-[#EF4363] h-16 w-8"></FaInstagram>

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MeetSection;