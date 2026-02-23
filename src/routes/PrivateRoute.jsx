import { Navigate, useLocation } from 'react-router'
import useAuth from '../hooks/useAuth'

function PrivateRoute({ children }) {

    const { user, loading } = useAuth()
    const location = useLocation()

    if (loading) {
        return <div className="flex items-center justify-center min-h-screen">
            <span className="loading loading-spinner loading-xl"></span>
        </div>
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }

    return children;
}

export default PrivateRoute