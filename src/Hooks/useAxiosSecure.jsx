import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
});
const useAxiosSecure = () => {
    // request interceptor to add authorization header for every 
    // secure call to api
    axiosSecure.interceptors.request.use(function (config){
        const token = localStorage.getItem('Access-Token')
        console.log('Stopped by Interceptor', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function(error){
        return Promise.reject(error);
    });
    // interceptors 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, (error)=>{
        const status = error.response.status;
        console.log('Status error in the interceptor', status);
        return Promise.reject(error);
    })
    return axiosSecure;
};

export default useAxiosSecure;