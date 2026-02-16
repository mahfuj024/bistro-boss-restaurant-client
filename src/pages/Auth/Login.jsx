import { Helmet } from 'react-helmet-async'
import { Link, useLocation } from 'react-router-dom'
import LoginWithGoogle from './LoginWithGoogle'
import { useForm } from 'react-hook-form'

function Login() {

  const { register, handleSubmit } = useForm()
  const location = useLocation()

  // after login redirect back
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data?.email
    const password = data?.password

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential?.user
        if (user) {
          toast("Login successful");
          navigate(from, { replace: true })
        }
      })
      .catch(error => {
        const errorMessage = error?.message
        if (errorMessage) {
          toast("Invalid email or password ❌");
        }
      })
  }

  return (
    <div className='p-2 md:p-4 lg:p-8 min-h-screen'>
      <Helmet>
        <title>Bistro boss restaurant Login</title>
      </Helmet>

      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-white dark:text-gray-800">
        <h1 className="text-3xl md:text-4xl font-extrabold">Log in</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          <div className="space-y-1 text-sm mt-8">
            <label htmlFor="email" className="block dark:text-gray-600 font-semibold">Email</label>
            <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600 font-semibold">Password</label>
            <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />

          </div>
          <button className="block w-full p-3 text-center bg-[#D99904] rounded-sm font-bold text-white cursor-pointer">Log in</button>

        </form>
        <p className="text-base text-center mt-4 sm:px-6 text-[#D99904]">Don't have an account?
          <Link to="/register" rel="noopener noreferrer" href="#" className="underline cursor-pointer   hover:text-blue-500 text-[#D99904]">Register</Link>
        </p>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">or</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <LoginWithGoogle name="Login"></LoginWithGoogle>
        </div>

      </div>
    </div>
  )
}

export default Login