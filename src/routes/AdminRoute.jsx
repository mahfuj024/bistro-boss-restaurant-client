import { Navigate, useLocation } from "react-router-dom"
import useAdmin from "../hooks/useAdmin"
import useAuth from "../hooks/useAuth"

function AdminRoute({ children }) {

    const { user, loading } = useAuth()
    const [isAdmin, isAdminLoading] = useAdmin()
    const location = useLocation()

    // 🔄 Show loader while checking auth & admin
    if (loading || isAdminLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        )
    }

    // ❌ Not logged in
    if (!user) {
        return (
            <Navigate
                to="/login"
                state={{ from: location }}
                replace
            />
        )
    }

    // ❌ Logged in but NOT admin
    if (!isAdmin) {
        return (
            <Navigate
                to="/"
                replace
            />
        )
    }

    // ✅ Admin access granted
    return children
}

export default AdminRoute