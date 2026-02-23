import axios from "axios"
import { useNavigate } from "react-router-dom"
import useAuth from "./useAuth"

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000"
})

function useAxiosSecure() {

    const navigate = useNavigate()
    const { logOut } = useAuth()

    // request interceptors
    axiosSecure.interceptors.request.use(config => {
        const token = localStorage.getItem("access-token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}` // Add token to header
        }
        return config;
    }, (error) => {
        return Promise.reject(error)
    })

    // response interceptors
    axiosSecure.interceptors.response.use((response) => {
        return response;
    }, async (error) => {
        const status = error.response.status
        // for 401 or 403 logOut the user and move the user to logIn  
        if (status === 401 || status === 403) {
            await logOut()
            navigate("/login")
        }
        return Promise.reject(error)
    })

    return axiosSecure
}

export default useAxiosSecure