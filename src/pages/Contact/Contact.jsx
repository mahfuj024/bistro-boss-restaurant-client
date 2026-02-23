import Cover from '../../components/shared/Cover/Cover'
import contactBanner from "../../assets/contact/banner.jpg"
import { Helmet } from 'react-helmet-async'

function Contact() {
  return (
    <div>
      {/* page title */}
      <Helmet>
        <title>Bistro boss Contact</title>
      </Helmet>

      {/* Cover Image */}
      <Cover
        bgImage={contactBanner}
        title="CONTACT US"
        description="WOULD YOU LIKE TO TRY A DISH?"
      ></Cover>

    </div>
  )
}

export default Contact