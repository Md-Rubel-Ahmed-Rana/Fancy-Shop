import { useLoginMutation } from "@/features/user/user.api";
import { ILogin } from "@/interfaces/login.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const router = useRouter();

  const [login] = useLoginMutation();

  const handleLogin: SubmitHandler<ILogin> = async (data) => {
    const res: any = await login(data);
    if (res?.data && res?.data?.user) {
      Cookies.set("fsAccessToken", res.data.accessToken, { expires: 7 });
      toast.success("Logged in successful");
      router.push("/");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleLogin)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
                {...register("password", { required: true })}
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-primary text-white">
                Login
              </button>
            </div>
            <div>
              <p>
                <span>Don&apos; have an account? </span>
                <Link className="text-blue-600" href={"/register"}>
                  Register
                </Link>
                <span> now</span>
              </p>
            </div>
          </form>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Discover the allure of quality and style. Explore a world where
            finding your desires is effortless, with a curated selection that
            speaks to your taste. Immerse yourself in a collection that captures
            the essence of luxury and sophistication, ensuring every choice is a
            reflection of your unique identity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
