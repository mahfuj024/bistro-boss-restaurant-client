import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure"

function useAdmin() {

    const { user, loading } = useAuth()
    const axiosSecure = useAxiosSecure()

    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: ["isAdmin", user?.email],
        enabled: !loading && !!user?.email, // user ready না হলে query run করবে না
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user.email}`)
            return res.data?.admin
        }
    })

    return [isAdmin, isAdminLoading]
}

export default useAdmin