import Banner from './Banner/Banner'
import Category from './Category/Category'
import ChefRecommends from './ChefRecommends/ChefRecommends'
import Menu from './Menu/Menu'
import Testimonials from './Testimonials/Testimonials'
import { Helmet } from 'react-helmet-async';

function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro boss restaurant</title>
      </Helmet>

      <Banner></Banner>
      <Category></Category>
      <Menu></Menu>
      <ChefRecommends></ChefRecommends>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home