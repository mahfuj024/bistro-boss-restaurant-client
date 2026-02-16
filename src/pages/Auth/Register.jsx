import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoginWithGoogle from "./LoginWithGoogle";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext"; // path check
import { toast } from "react-toastify";

function Register() {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const { register: formRegister, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const name = data?.name;
    const email = data?.email;
    const password = data?.password;

    createUser(email, password)
      .then((result) => {
        const user = result.user;

        // update user profile
        updateUserProfile({ displayName: name })
          .then(() => {
            console.log("Profile Updated ✅");
          })
          .catch((err) => console.log(err));

        toast.success("Registration successful ✅");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Failed to register ❌");
      });
  };

  return (
    <div className='p-2 md:p-4 lg:p-8 min-h-screen'>
      <Helmet>
        <title>Bistro Boss Restaurant Register</title>
      </Helmet>

      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-3xl md:text-4xl font-extrabold">Sign up</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Name */}
          <div className="space-y-1 text-sm mt-8">
            <label htmlFor="name" className="block font-semibold">Name</label>
            <input
              {...formRegister("name", { required: true })}
              type="text"
              id="name"
              placeholder="Name"
              className="w-full px-4 py-3 rounded-md outline-1 outline-stone-300 bg-gray-50 focus:outline-violet-600"
            />
            {errors.name && <span className='text-red-500'>Name is required</span>}
          </div>

          {/* Email */}
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="block font-semibold">Email</label>
            <input
              {...formRegister("email", { required: true })}
              type="email"
              id="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md outline-1 outline-stone-300 bg-gray-50 focus:outline-violet-600"
            />
            {errors.email && <span className='text-red-500'>Email is required</span>}
          </div>

          {/* Password */}
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block font-semibold">Password</label>
            <input
              {...formRegister("password", { required: true, minLength: 6 })}
              type="password"
              id="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md outline-1 outline-stone-300 bg-gray-50 focus:outline-violet-600"
            />
            {errors.password && <span className='text-red-500'>Password must be at least 6 characters</span>}
          </div>

          <button type='submit' className="block w-full p-3 text-center bg-[#D99904] text-white rounded-sm font-bold cursor-pointer">Sign up</button>
        </form>

        <p className="text-base mt-4 text-center text-[#e2a006]">
          Already have an account?
          <Link to="/login" className="underline ml-1 hover:text-blue-500">Log In</Link>
        </p>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-sm">or</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <LoginWithGoogle name="Register" />
        </div>
      </div>
    </div>
  );
}

export default Register;
