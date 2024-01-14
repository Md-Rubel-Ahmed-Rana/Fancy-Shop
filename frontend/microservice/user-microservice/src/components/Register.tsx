// src/components/Register.js
import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  console.log("From Register");
  const [formData, setFormData] = useState<any>({
    fullName: "",
    username: "",
    email: "",
    password: "",
    profileImage: null,
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: any) => {
    const file = e.target.files[0];
    setFormData((prevData: any) => ({
      ...prevData,
      profileImage: file,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("fullName", formData.fullName);
      formDataToSend.append("username", formData.username);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("password", formData.password);
      formDataToSend.append("profileImage", formData.profileImage);

      const response = await axios.post(
        "http://localhost:5000/api/v1/register",
        formDataToSend
      );

      console.log("Registration successful:", response.data);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-8 bg-white rounded">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-600"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-600"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1  w-full border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="profileImage" className="text-sm text-gray-600">
            Profile Image
          </label>
          <input
            type="file"
            accept="image/*"
            id="profileImage"
            name="profileImage"
            onChange={handleFileChange}
            className="mt-1 w-full border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-xl text-white w-full py-1 px-4 rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
