import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";



const Services = () => {
    const [services, setServices] = useState()
    console.log(services);
    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div className="mt-5">
            <div className="text-center space-y-5">
                <h2 className="text-2xl font-bold text-[#FF3811]">Our Services</h2>
                <h1 className="text-5xl"> Our Services Area</h1>
                <p className="text-[#737373]">the majority have suffered alteration in some form,
                    by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    services?.map(service => <ServicesCard  
                        key={service._id}
                    service={service}>

                    </ServicesCard>)
                }
            </div>

           
        </div>
    );
};

export default Services;
