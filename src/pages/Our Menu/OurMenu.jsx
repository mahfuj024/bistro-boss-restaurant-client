import { BsChat } from 'react-icons/bs'
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import banner3 from "../../assets/menu/banner3.jpg"
import Menu from '../Home/Menu/Menu';

function OurMenu() {
    return (
        <div>
            <Helmet>
                <title>Bistro boss Menu</title>
            </Helmet>

            <Cover bgImage={banner3} title="Our Menu" description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <Menu></Menu>

            <Cover bgImage={banner3} title="Our Menu" description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <Menu></Menu>

            <Cover bgImage={banner3} title="Our Menu" description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
            <Menu></Menu>
        </div>
    )
}

export default OurMenu