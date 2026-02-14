import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover/Cover';
import banner3 from "../../assets/menu/banner3.jpg"
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../components/shared/SectionTitle/SectionTitle';
import MenuCategory from './MenuCategory';
import dessertBg from "../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../assets/menu/pizza-bg.jpg"
import saladBg from "../../assets/menu/salad-bg.jpg"
import soupBg from "../../assets/menu/soup-bg.jpg"


function OurMenu() {

    const [menu] = useMenu()
    const todayOffer = menu.filter(item => item.category === "offered")
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            {/* page title */}
            <Helmet>
                <title>Bistro boss Menu</title>
            </Helmet>

            {/* Our Menu section */}
            <section>
                <Cover bgImage={banner3} title="Our Menu" description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
                <div className='mt-8 md:mt-12 lg:mt-24'>
                    <SectionTitle textTop="---Don't miss---" textBottom="TODAY'S OFFER"></SectionTitle>
                </div>
                <MenuCategory items={todayOffer} btnTitle="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>

            {/* dessert section */}
            <section className='mt-6 md:mt-10 lg:mt-20'>
                <Cover bgImage={dessertBg} title="DESSERT" description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
                 <MenuCategory items={dessert} title="dessert" btnTitle="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>

            {/* pizza section */}
            <section className='mt-6 md:mt-10 lg:mt-20'>
                <Cover bgImage={pizzaBg} title="PIZZA" description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
                 <MenuCategory items={pizza} title="pizza" btnTitle="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>

            {/* salad section */}
            <section className='mt-6 md:mt-10 lg:mt-20'>
                <Cover bgImage={saladBg} title="SALAD" description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
                 <MenuCategory items={salad} title="salad" btnTitle="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>

             {/* soups section */}
            <section className='mt-6 md:mt-10 lg:mt-20'>
                <Cover bgImage={soupBg} title="SOUPS" description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
                 <MenuCategory items={soup} title="soup" btnTitle="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>

            {/* drinks section */}
            <section className='mt-6 md:mt-10 lg:mt-20'>
                <Cover bgImage={dessertBg} title="DRINKS" description="WOULD YOU LIKE TO TRY A DISH?"></Cover>
                 <MenuCategory items={drinks} title="drinks" btnTitle="ORDER YOUR FAVOURITE FOOD"></MenuCategory>
            </section>
        
        </div>
    )
}

export default OurMenu