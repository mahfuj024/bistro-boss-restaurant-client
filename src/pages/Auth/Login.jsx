import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LoginWithGoogle from './LoginWithGoogle';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data?.email;
    const password = data?.password;

    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential?.user;
        if (user) {
          toast.success("Login successful ✅");
          navigate(from, { replace: true });
        }
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Invalid email or password ❌");
      });
  };

  return (
    <div className='p-2 md:p-4 lg:p-8 min-h-screen'>
      <Helmet>
        <title>Bistro Boss Restaurant Login</title>
      </Helmet>

      <div className="w-full mx-auto max-w-md p-8 space-y-3 rounded-xl bg-white shadow-md">
        <h1 className="text-3xl md:text-4xl font-extrabold">Log in</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-1 text-sm mt-8">
            <label className="block font-semibold">Email</label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="email"
              className="w-full px-4 py-3 rounded-md outline-1 outline-stone-300 bg-gray-50 focus:outline-violet-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block font-semibold">Password</label>
            <input
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md outline-1 outline-stone-300 bg-gray-50 focus:outline-violet-600"
            />
          </div>

          <button className="block w-full p-3 text-center bg-[#D99904] rounded-sm font-bold text-white cursor-pointer">
            Log in
          </button>
        </form>

        <p className="text-base text-center mt-4 text-[#D99904]">
          Don't have an account?
          <Link to="/register" className="underline ml-1 hover:text-blue-500">Register</Link>
        </p>

        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p className="px-3 text-sm">or</p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="flex justify-center space-x-4">
          <LoginWithGoogle name="Login" />
        </div>
      </div>
    </div>
  );
}

export default Login;
