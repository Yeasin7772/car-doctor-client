import MeetSection from "../../MeetSection/MeetSection";
import Products from "../../Products/Products";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";


const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Services></Services>
           <Products></Products>
           <MeetSection></MeetSection>
        </div>
    );
};

export default Home;