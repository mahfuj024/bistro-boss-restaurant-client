import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

function useCart() {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const { data = [], refetch } = useQuery({
        queryKey: ["cart", user?.email],
        enabled: !!user?.email, // ✅ only fetch if user email exists
        queryFn: async () => {
            try {
                const res = await axiosSecure.get(`/cart?email=${user.email}`);
                // ✅ make sure data is always an array
                return Array.isArray(res.data) ? res.data : [];
            } catch (err) {
                console.error("Error fetching cart:", err);
                return [];
            }
        }
    });

    return [data, refetch];
}

export default useCart;