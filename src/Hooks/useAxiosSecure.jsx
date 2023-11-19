import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});
const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    //  request interceptor to add authorization header for every 
    //  secure call to api
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('Access-Token')
       // console.log('Stopped by Interceptor', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error);
    });
    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error)=>{
        const status = error.response.status;
       // console.log('Status error in the interceptor', status);
        // if status error logout the user
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;