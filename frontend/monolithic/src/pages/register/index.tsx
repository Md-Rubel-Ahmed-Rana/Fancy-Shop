import {
  useGetUniqueDataQuery,
  useRegisterMutation,
} from "@/features/user/user.api";
import { IRegister } from "@/interfaces/register.interface";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegister>();
  const router = useRouter();

  const { data: users } = useGetUniqueDataQuery([]);
  const usernames = users?.data?.map((user: any) => user?.username);
  const emails = users?.data?.map((user: any) => user?.email);
  const [uniqueErrors, setUniqueErrors] = useState({
    username: false,
    email: false,
  });

  const [registerUser] = useRegisterMutation();

  const handleRegister: SubmitHandler<IRegister> = async (data) => {
    const res: any = await registerUser(data);
    if (res?.data && res?.data?.success) {
      toast.success(res?.data?.message);
      router.push("/login");
    } else {
      toast.error("Something went wrong");
    }
  };

  const handleUsernameUnique = (username: string) => {
    if (usernames?.includes(username)) {
      return setUniqueErrors({ username: true, email: uniqueErrors.email });
    } else {
      return setUniqueErrors({ username: false, email: uniqueErrors.email });
    }
  };

  const handleEmailUnique = (email: string) => {
    if (emails?.includes(email)) {
      return setUniqueErrors({
        username: uniqueErrors.username,
        email: true,
      });
    } else {
      return setUniqueErrors({
        username: uniqueErrors.username,
        email: false,
      });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card shrink-0 w-1/2 shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(handleRegister)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="input input-bordered"
                required
                {...register("fullName", {
                  required: true,
                  maxLength: 20,
                  minLength: 3,
                })}
              />
              {errors?.fullName?.type === "maxLength" && (
                <p className="text-red-500">
                  Full name must be 20 characters or less.
                </p>
              )}
              {errors?.fullName?.type === "maxLength" && (
                <p className="text-red-500">
                  Full name must be 20 characters or less.
                </p>
              )}
              {errors?.fullName?.type === "minLength" && (
                <p className="text-red-500">
                  Full name must be 3 characters or more.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input
                type="text"
                placeholder="Enter your username"
                className="input input-bordered"
                required
                {...register("username", {
                  required: true,
                  maxLength: 20,
                  minLength: 3,
                })}
                onChange={(e: any) => handleUsernameUnique(e.target.value)}
              />
              {uniqueErrors?.username && (
                <p className="text-red-500">Username already taken.</p>
              )}
              {errors?.username?.type === "maxLength" && (
                <p className="text-red-500">
                  Username must be 20 characters or less.
                </p>
              )}
              {errors?.username?.type === "minLength" && (
                <p className="text-red-500">
                  Username must be 3 characters or more.
                </p>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                {...register("email")}
                onChange={(e: any) => handleEmailUnique(e.target.value)}
              />
              {uniqueErrors?.email && (
                <p className="text-red-500">Email already taken.</p>
              )}
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
                {...register("password", {
                  required: true,
                  maxLength: 15,
                  minLength: 5,
                })}
              />
              {errors?.password?.type === "maxLength" && (
                <p className="text-red-500">
                  Password must be 15 characters or less.
                </p>
              )}
              {errors?.password?.type === "minLength" && (
                <p className="text-red-500">
                  Password must be 5 characters or more.
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary text-white">Register</button>
            </div>
            <div>
              <p>
                <span>Already have an account? </span>
                <Link className="text-blue-600" href={"/login"}>
                  Login
                </Link>
                <span> now</span>
              </p>
            </div>
          </form>
        </div>
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
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

export default Register;
