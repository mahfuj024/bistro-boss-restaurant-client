import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'
import { Outlet } from 'react-router-dom'

function MainLayouts() {
    return (
        <div>
            <Navbar />
            <Outlet /> {/* এখানে nested route content আসবে */}
            <Footer />
        </div>
    )
}

export default MainLayouts
