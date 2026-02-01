import Banner from './Banner/Banner'
import Category from './Category/Category'
import ChefRecommends from './ChefRecommends/ChefRecommends'
import Menu from './Menu/Menu'
import Testimonials from './Testimonials/Testimonials'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Menu></Menu>
      <ChefRecommends></ChefRecommends>
      <Testimonials></Testimonials>
    </div>
  )
}

export default Home