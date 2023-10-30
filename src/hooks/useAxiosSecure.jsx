import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true
})
const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(() => {
        axiosSecure.interceptors.response.use(res => {
            return res
        }, error => {
            console.log('interceptor', error.response);
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logOut the user');
                logOut()
                    .then(result => {
                        navigate('/login')
                        console.log(result.user);
                    })
                    .catch(error => {
                        console.error(error);
                    })
            }
        }
        )
    }, [])
    return axiosSecure

};

export default useAxiosSecure;