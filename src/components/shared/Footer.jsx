
function Footer() {
  return (
    <div>

      <div className="flex flex-col md:flex-row md:min-h-75 lg:min-h-96">

        {/* Contact Us Section */}
        <div className='bg-[#1d2939] text-white text-center p-8 md:p-0 flex-1 flex flex-col items-center justify-center'>
          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">CONTACT US</h1>
          <p className='mt-4 md:mt-6 text-sm md:text-base lg:text-lg'>123 ABS Street, Uni 21, Bangladesh</p>
          <p className='text-sm md:text-base lg:text-lg mt-1'>+88 123456789</p>
          <p className='text-sm md:text-base lg:text-lg mt-1'>Mon - Fri: 08:00 - 22:00</p>
          <p className='text-sm md:text-base lg:text-lg mt-1'>Sat - Sun: 10:00 - 23:00</p>

        </div>

        {/* Follow Us Section */}
        <div className='bg-[#111827]  text-white flex-1 text-center p-8 md:p-0 flex flex-col items-center justify-center'>

          <h1 className="text-xl md:text-2xl lg:text-3xl font-medium">Follow US</h1>
          <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg">Join us on social media</p>

          {/* আইকনগুলো এখানে */}
          <div className="flex gap-4 mt-4 md:mt-8 mb-0 md:mb-10 justify-center">
            {/* Twitter Icon */}
            <a href="#" className="hover:text-blue-400 transition-colors">
              <svg xmlns="http://www.w3.org" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>

            {/* YouTube Icon */}
            <a href="#" className="hover:text-red-600 transition-colors">
              <svg xmlns="http://www.w3.org" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>

            {/* Facebook Icon */}
            <a href="#" className="hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>

          </div>

        </div>
      </div>

      <footer className="footer sm:footer-horizontal footer-center bg-[#151515ff] text-white h-12 md:h-14 lg:h-17.5">
        <aside>
          <p className='text-sm md:text-base lg:text-lg'>Copyright © {new Date().getFullYear()} - CulinaryCloud. All rights reserved.</p>
        </aside>
      </footer>

    </div>
  )
}

export default Footer