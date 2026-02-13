import Cover from '../Shared/Cover/Cover';
import orderFoodBg from "../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function OrderFood() {
    return (
        <div>
            {/* Cover Image */}
            <Cover
                bgImage={orderFoodBg}
                title="ORDER FOOD"
                description="WOULD YOU LIKE TO TRY A DISH?"
            />

            <div className="flex justify-center mt-8 md:mt-12 lg:mt-25">
                <Tabs>
                    {/* Tab Titles */}
                    <TabList className="flex border-b-0 gap-0 md:gap-4 lg:gap-10">
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
                            <h1>SALAD</h1>
                        </TabPanel>
                        <TabPanel>
                            <h1>PIZZA</h1>
                        </TabPanel>
                        <TabPanel>
                            <h1>SOUPS</h1>
                        </TabPanel>
                        <TabPanel>
                            <h1>DESSERT</h1>
                        </TabPanel>
                        <TabPanel>
                            <h1>DRINKS</h1>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>

        </div>
    );
}

export default OrderFood;
