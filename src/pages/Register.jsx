import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Register = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [err, setErr] = useState(null);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // let __URL__ ;
  // if ( document.domain === "localhost" ) {
  //   __URL__ = "https://musicpe-backend-vndg.onrender.com";
  // } else {
  //   __URL__ = "";
  // }
  let __URL__;

if (process.env.VERCEL_ENV === 'https://musicpe-backend-vndg.onrender.com') {
  // Replace 'your-production-url' with your actual production URL
  __URL__ = 'https://musicpe-backend-vndg.onrender.com';
} else {
  // Default to localhost for other environments
  __URL__ = 'https://musicpe-backend-vndg.onrender.com';
}


  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${__URL__}/api/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    });
    const data = await res.json();
    if (data.status === "error") setErr(data.message);
    if (data.status === "success") {
      alert("Registration Successful");
      navigate("/Login");
    }
    setInputs({
      fullName: "",
      email: "",
      password: "",
    })
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gradient-to-r from-gray-100  to-blue-500">
      <form
        className=" bg-white flex flex-col px-5 py-10
      shadow-2xl rounded-xl"
        onSubmit={handleSubmit}
      >
        <h1 className="text-center text-green-600 text-2xl -mt-5  font-mono">
          Register
        </h1>
        <div className="flex flex-col space-y-5 p-5 rounded-xl">
          <input
            type="text"
            placeholder="Full Name"
            name="fullName"
            className="border border-b-blue-900 outline-none rounded-sm placeholder:px-1 h-8"
            required
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="border border-b-blue-900 outline-none rounded-sm placeholder:px-1 h-8"
            required
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="border border-b-blue-900 outline-none rounded-sm placeholder:px-1 h-8"
            required
            onChange={handleChange}
          />

          {err && <p className="text-red-500">{err}</p>}
          <button
            type="submit"
            className="bg-blue-600 text-white py-1 rounded-sm shadow-md hover:bg-purple-900 hover:tracking-wider font-mono"
          >
            Submit
          </button>
          <div className="flex justify-center items-center">
            <p>already have an account?</p>
            <Link to="/login" className="text-gray-900">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
