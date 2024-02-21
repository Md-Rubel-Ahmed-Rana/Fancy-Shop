/* eslint-disable @next/next/no-img-element */
import {
  useLoggedInUserQuery,
  useUploadProfileImageMutation,
} from "@/features/user/user.api";
import Link from "next/link";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FaUserCircle } from "react-icons/fa";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data: user } = useLoggedInUserQuery({});
  const imageHostKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
  const { register, handleSubmit, reset } = useForm();
  const [isUploaded, setIsUploaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadImage] = useUploadProfileImageMutation();

  const handleUploadProfileImage: SubmitHandler<any> = (data: any) => {
    setLoading(true);
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(`https://api.imgbb.com/1/upload?key=${imageHostKey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then(async (imgData) => {
        if (imgData?.data?.url) {
          const res: any = await uploadImage({
            profileImage: imgData?.data?.url,
            id: user?.id,
          });
          if (res?.data?.success) {
            reset();
            setIsUploaded(true);
            setLoading(false);
          }
        }
      })
      .catch((err) => {
        toast.error(err?.message || "Something went wrong");
        reset();
        setIsUploaded(false);
        setLoading(false);
      });
  };

  const handleSearch = (searchTerm: string) => {
    // Logic for handling the search based on the state values (searchTerm, minPrice, maxPrice, selectedCategory)
    console.log("Search Term:", searchTerm);
  };

  return (
    <div className=" flex justify-between bg-blue-500 rounded-sm">
      <div className="flex">
        <Link className="btn btn-ghost text-xl" href={"/"}>
          Fancy Shop
        </Link>
      </div>
      <div className="flex items-center space-x-4 w-2/5">
        <input
          type="text"
          placeholder="Search in Fancy Shop"
          onChange={(e) => handleSearch(e.target.value)}
          className="px-3 py-2 border rounded-md w-full focus:outline-none"
        />
      </div>
      <div className="flex items-center ">
        <div>
          <button className="font-medium mr-4">
            <Link href={"/products"}>Products</Link>
          </button>
        </div>
        {user?.email && (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  {user?.profileImage && (
                    <img alt="Profile" src={user?.profileImage} />
                  )}
                  {!user?.profileImage && (
                    <FaUserCircle
                      onClick={() => {
                        const element: any =
                          document.getElementById("profileImageModal");
                        if (element !== null) {
                          element.showModal();
                        }
                      }}
                      className="w-full h-full"
                      title="Upload profile image"
                    />
                  )}
                </div>
              </div>
            </div>
          </>
        )}
        {!user?.email && (
          <div className="flex justify-center items-center gap-4 font-medium">
            <button>
              <Link href={"/register"}>Register</Link>
            </button>
            <button>
              <Link href={"/login"}>Login</Link>
            </button>
          </div>
        )}
      </div>

      <dialog
        id="profileImageModal"
        className="modal modal-right sm:modal-middle"
      >
        <div className="modal-box">
          <form
            onChange={handleSubmit(handleUploadProfileImage)}
            className="flex flex-col justify-center items-center"
          >
            <h3 className="text-2xl font-semibold mb-4">
              Upload Profile image
            </h3>
            {isUploaded && !loading && (
              <h3 className="text-2xl font-semibold mb-4">Image uploaded</h3>
            )}
            {!isUploaded && !loading && (
              <input
                {...register("image", { required: true })}
                type="file"
                accept="image/*"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              />
            )}
            {loading && (
              <span className="loading loading-spinner loading-lg"></span>
            )}
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Navbar;
