import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react"
import anim from '../../public/anim.json'
import Lottie from "lottie-react";


const PrivateRoute = ({ children }) => {
    const {user ,loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname);
    if (loading) {
        return <div className="flex justify-center items-center"><Lottie animationData={anim}> </Lottie></div>
       // <progress className="progress w-full"></progress>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivateRoute;