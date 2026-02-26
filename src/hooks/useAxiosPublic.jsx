import axios from "axios"

const axiosPublic = axios.create({
    baseURL: "https://bistro-boss-restaurant-server-phi.vercel.app"
})

function useAxiosPublic() {
    return axiosPublic;
}

export default useAxiosPublic