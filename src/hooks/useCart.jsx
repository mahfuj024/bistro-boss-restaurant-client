import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

function useCart() {
    //TanStack Query
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: cart = [], refetch} = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/cart?email=${user.email}`)
            return res.data
        }
    })
    return [cart, refetch]

}

export default useCart