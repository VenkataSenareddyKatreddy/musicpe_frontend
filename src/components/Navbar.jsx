import React, { useContext } from "react";
import { SidebarContext } from "../Context/SibebarContext";
import { Link, useNavigate } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { CgPlayList } from "react-icons/cg";
import {GiMusicSpell} from 'react-icons/gi'
import {AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineMenu} from "react-icons/ai";
import logo from "../assets/MusicpeLogo.png"
import "../utils/style.css";
const Navbar = () => {
  const sideBar = useContext(SidebarContext);
  const toggleMenu = () => {
    sideBar.setShowMenu(!sideBar.showMenu);
  };
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("access_token");
    navigate("/");
  };
  return (
    <header className="z-50 w-full sticky bg-gradient-to-r from-gray-100 to-blue-500 text-white top-0 flex flex-col justify-between items-center py-1 lg:py-5 px-10 font-space shadow-2xl h-14 lg:h-16 ">
      <nav className=" mx-auto w-full flex justify-between items-center sticky top-5">
        <Link to={'/'} className="w-32 text-black flex">
          <img src={logo} alt="Logo" className="w-10 h-6 mr-3"/> MUSicPE
        </Link>
        <button onClick={toggleMenu} className="lg:hidden">
          <AiOutlineMenu size={25} />
        </button>
        {/* ------------Mobile Nav------------ */}
        <div
          className={`lg:hidden text-2xl flex flex-col bg-gradient-to-r from-red-600  to-blue-100 w-64 fixed z-50 top-0 p-5 h-screen items-start justify-start space-y-10 pt-16  ${
            sideBar.showMenu
              ? "right-0 slide-enter-active"
              : "slide-out-active -right-64"
          }`}
        >
          <Link to="/" className="flex justify-center items-center space-x-2">
            <GoHome />
            <span className="">Home</span>
          </Link>
          <Link
            to="/explore"
            className="flex justify-center items-center space-x-2"
          >
            <GiMusicSpell />
            <span>Songs</span>
          </Link>
          <Link
            to="/upload"
            className="flex justify-center items-center space-x-2"
          >
            <AiOutlineCloudUpload />
            <span>Upload</span>
          </Link>
          <Link
            to="/playlists"
            className="flex justify-center items-center space-x-2"
          >
            <CgPlayList />
            <span>Playlist</span>
          </Link>

          {token ? (
            <button
              onClick={logOut}
              className="bg-red-400 px-5 py-1 rounded-md lg:rounded-xl shadow-lg text-white text-sm"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                to={"/login"}
                className="bg-green-500 px-10 py-1 rounded-md lg:rounded-xl shadow-lg text-white text-sm"
              >
                Log In
              </Link>
              <Link
                to={"/register"}
                className="bg-green-500 px-9 py-1 rounded-md lg:rounded-xl shadow-lg text-white text-sm"
              >
                Sign Up
              </Link>
            </>
          )}
          <button
            onClick={toggleMenu}
            className="flex justify-center text-lg items-center space-x-2"
          >
            <AiOutlineCloseCircle />
            <span>Close</span>
          </button>
        </div>


        {/* -------Desk Nav---------- */}
        <div
          className={
            "hidden lg:flex justify-between  items-center space-x-10 text-black lg:text-xl"
          }
        >
          <Link
            to="/"
            className="flex justify-center  items-center space-x-2"
          >
            <GoHome />
            <span className="">Home</span>
          </Link>
          <Link
            to="/explore"
            className="flex justify-center items-center space-x-2"
          >
            <GiMusicSpell/>
            <span>songs</span>
          </Link>
          <Link
            to="/upload"
            className="flex justify-center  items-center space-x-2"
          >
            <AiOutlineCloudUpload />
            <span>Upload</span>
          </Link>
          <Link
            to="/playlists"
            className="flex justify-center  items-center space-x-2"
          >
            <CgPlayList  />
            <span>Playlists</span>
          </Link>

          {token ? (
            <button
              onClick={logOut}
              className="bg-red-500 px-5 py-1 rounded-md lg:rounded-xl shadow-lg text-white text-sm hover:animate-pulse"
            >
              Log Out
            </button>
          ) : (
            <>
              <Link
                to={"/login"}
                className="bg-green-500 px-7 py-1 rounded-md lg:rounded-xl shadow-lg text-white text-sm hover:animate-bounce"
              >
                Log In
              </Link>
              <Link
                to={"/register"}
                className="bg-green-500 px-5 py-1 rounded-md lg:rounded-xl shadow-lg text-white text-sm hover:animate-bounce"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
