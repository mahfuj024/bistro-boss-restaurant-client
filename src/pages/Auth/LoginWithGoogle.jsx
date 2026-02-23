import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAxiosPublic from "../../hooks/useAxiosPublic";

function LoginWithGoogle({ name = "Login" }) {
    const { googleLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosPublic = useAxiosPublic();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = async () => {
        try {
            const result = await googleLogin();
            const user = result.user;

            const userInfo = {
                name: user?.displayName,
                email: user?.email,
                role: "user",
                createdAt: new Date()
            };

            await axiosPublic.post("/user", userInfo);

            toast.success(`${user?.displayName} Login successful ✅`);

            // 🔥 Important: small delay to ensure state update
            setTimeout(() => {
                navigate(from, { replace: true });
            }, 500);

        } catch (error) {
            console.log(error);
            toast.error("Google login failed ❌");
        }
    };

    return (
        <button
            onClick={handleGoogleLogin}
            className="btn text-base h-12 text-black border-[#e5e5e5] w-full bg-gray-50 flex items-center justify-center gap-2"
        >
            <svg
                width="16"
                height="16"
                viewBox="0 0 512 512"
            >
                <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
            </svg>
            {name} with Google
        </button>
    );
}

export default LoginWithGoogle;