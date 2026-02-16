import { Helmet } from "react-helmet-async"
import { Link, useLocation } from "react-router-dom"
import LoginWithGoogle from "./LoginWithGoogle"
import { useForm } from "react-hook-form"


function Register() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const location = useLocation()

  // after register redirect back
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;

    createUserWithEmailAndPassword( email, password)
      .then((result) => {
        const user = result.user;

        // user name update
        updateProfile(user, {
          displayName: name,
        }).then(() => {
          console.log("Profile Updated");
        });

        // redirect
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  return (
    <div className='p-2 md:p-4 lg:p-8 min-h-screen'>
      <Helmet>
        <title>Bistro boss restaurant Register</title>
      </Helmet>

      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-white dark:text-gray-800">
        <h1 className="text-3xl md:text-4xl font-extrabold">Sign up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm mt-8">
            {/* name field */}
            <label htmlFor="name" className="block dark:text-gray-600 font-semibold">Name</label>
            <input {...register("name", { required: true })} type="text" name="name" id="name" placeholder="name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            {/* show error */}
            {errors.name && <span className='text-red-500'>Name is required</span>}
          </div>
          <div className="space-y-1 text-sm mt-8">
            {/* photo url field */}
            <label htmlFor="file" className="block dark:text-gray-600 font-semibold">Photo url</label>
            <input type="file" name="file" id="file" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
          </div>
          <div className="space-y-1 text-sm">
            {/* email field */}
            <label htmlFor="email" className="block dark:text-gray-600 font-semibold">Email</label>
            <input {...register("email", { required: true })} type="email" name="email" id="email" placeholder="email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            {/* show error */}
            {errors.email && <span className='text-red-500'>Email is required</span>}
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block dark:text-gray-600 font-semibold">Password</label>
            {/* password field */}
            <input {...register("password", { required: true })} type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 outline-1 outline-stone-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
            {/* show error */}
            {errors.password && <span className='text-red-500'>Password must be at least 6 characters</span>}
          </div>
          <button type='submit' className="block w-full p-3 text-center bg-[#D99904] text-white rounded-sm font-bold cursor-pointer">Sign up</button>

        </form >
        <p className="text-base mt-4 text-center sm:px-6 text-[#e2a006]">You already have an account?
          <Link to="/login" rel="noopener noreferrer" href="#" className="underline cursor-pointer text-[#e2a006] hover:text-blue-500">Log In</Link>
        </p>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
          <p className="px-3 text-sm dark:text-gray-600">or</p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
        </div>
        <div className="flex justify-center space-x-4">
          <LoginWithGoogle name="Register"></LoginWithGoogle>
        </div>

      </div>
    </div>
  )
}

export default Register