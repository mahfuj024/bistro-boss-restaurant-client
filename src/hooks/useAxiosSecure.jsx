import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: "https://bistro-boss-restaurant-server-phi.vercel.app"
});

function useAxiosSecure() {
    const navigate = useNavigate();
    const { logOut } = useAuth();

    useEffect(() => {
        const reqInterceptor = axiosSecure.interceptors.request.use(config => {
            const token = localStorage.getItem("access-token");
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        const resInterceptor = axiosSecure.interceptors.response.use(
            response => response,
            async error => {
                const status = error.response?.status;
                if (status === 401 || status === 403) {
                    await logOut();
                    navigate("/login");
                }
                return Promise.reject(error);
            }
        );

        // cleanup function to eject interceptors on unmount
        return () => {
            axiosSecure.interceptors.request.eject(reqInterceptor);
            axiosSecure.interceptors.response.eject(resInterceptor);
        };
    }, [logOut, navigate]);

    return axiosSecure;
}

export default useAxiosSecure;