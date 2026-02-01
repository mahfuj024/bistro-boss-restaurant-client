import Banner from './Banner/Banner'
import Category from './Category/Category'
import ChefRecommends from './ChefRecommends/ChefRecommends'
import Menu from './Menu/Menu'

function Home() {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <Menu></Menu>
      <ChefRecommends></ChefRecommends>
    </div>
  )
}

export default Home