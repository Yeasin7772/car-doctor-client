import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { useContext } from "react"


const PrivateRoute = ({ children }) => {
    const {user ,loading } = useContext(AuthContext)
    const location = useLocation()
    // console.log(location.pathname);
    if (loading) {
        return <progress className="progress w-full"></progress>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login' replace></Navigate>;
};

export default PrivateRoute;