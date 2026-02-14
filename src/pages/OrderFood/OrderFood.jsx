import Cover from '../Shared/Cover/Cover';
import orderFoodBg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../hooks/useMenu';
import { useState } from 'react';
import FoodCard from '../../components/shared/FoodCard/FoodCard';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

function OrderFood() {
    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const { category } = useParams()
    const initiaiIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initiaiIndex)

    const [menu] = useMenu()
    const dessert = menu.filter(item => item.category === "dessert")
    const pizza = menu.filter(item => item.category === "pizza")
    const salad = menu.filter(item => item.category === "salad")
    const soup = menu.filter(item => item.category === "soup")
    const drinks = menu.filter(item => item.category === "drinks")

    return (
        <div>
            {/* page title */}
            <Helmet>
                <title>Bistro boss Order Food</title>
            </Helmet>

            {/* Cover Image */}
            <Cover
                bgImage={orderFoodBg}
                title="ORDER FOOD"
                description="WOULD YOU LIKE TO TRY A DISH?"
            />

            <div className="flex justify-center mt-8 md:mt-12 lg:mt-25">
                <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    {/* Tab Titles */}
                    <TabList className="flex justify-center border-b-0 gap-0 md:gap-4 lg:gap-10">
                        <Tab
                            className="text-black px-4 py-2 cursor-pointer font-semibold border-b-0 text-sm md:text-base lg:text-lg"
                            selectedClassName="!text-[#CD9003] !border-b-3 !border-[#CD9003]"
                        >
                            SALAD
                        </Tab>
                        <Tab
                            className="text-black px-4 py-2 cursor-pointer font-semibold border-b-0 text-sm md:text-base lg:text-lg"
                            selectedClassName="!text-[#CD9003] !border-b-3 !border-[#CD9003]"
                        >
                            PIZZA
                        </Tab>

                        <Tab
                            className="text-black px-4 py-2 cursor-pointer font-semibold border-b-0 text-sm md:text-base lg:text-lg"
                            selectedClassName="!text-[#CD9003] !border-b-3 !border-[#CD9003]"
                        >
                            SOUPS
                        </Tab>
                        <Tab
                            className="text-black px-4 py-2 cursor-pointer font-semibold border-b-0 text-sm md:text-base lg:text-lg"
                            selectedClassName="!text-[#CD9003] !border-b-3 !border-[#CD9003]"
                        >
                            DESSERT
                        </Tab>
                        <Tab
                            className="text-black px-4 py-2 cursor-pointer font-semibold border-b-0 text-sm md:text-base lg:text-lg"
                            selectedClassName="!text-[#CD9003] !border-b-3 !border-[#CD9003]"
                        >
                            DRINKS
                        </Tab>
                    </TabList>

                    {/* tab context */}
                    <div className='mt-4 md:mt-6 lg:mt-12'>
                        {/* Tab Content */}
                        <TabPanel>
                            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                                gap-8 justify-items-center p-0 md:p-2 lg:p-0'>
                                {
                                    salad.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                                gap-8 justify-items-center p-0 md:p-2 lg:p-0'>
                                {
                                    pizza.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                                gap-8 justify-items-center p-0 md:p-2 lg:p-0'>
                                {
                                    soup.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                                gap-8 justify-items-center p-0 md:p-2 lg:p-0'>
                                {
                                    dessert.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                                gap-8 justify-items-center p-0 md:p-2 lg:p-0'>
                                {
                                    drinks.map(item => <FoodCard key={item._id} item={item}></FoodCard>)
                                }
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>

        </div>
    );
}

export default OrderFood;
