import { createContext, useState, useRef } from "react";

export const SongContext = createContext();

export const SongContextState = ({ children }) => {
  // let __URL__;
  // if(document.domain === "localhost"){
  //   __URL__ = "https://musicpe-backend-vndg.onrender.com"
  // }else{
  //   __URL__ = ""
  // }
  let __URL__;

if (process.env.VERCEL_ENV === 'https://musicpe-backend-vndg.onrender.com') {
  // Replace 'your-production-url' with your actual production URL
  __URL__ = 'https://musicpe-backend-vndg.onrender.com';
} else {
  // Default to localhost for other environments
  __URL__ = 'https://musicpe-backend-vndg.onrender.com';
}

  const audio = new Audio();
  const song = {
    songUrl: "",
    songName: "",
    songArtist: "",
    songAlbum: "",
    isPlaying: false,

    setSongUrl: (url) => {
      song.songUrl = url;
    },
    setSongName: (name) => {
      song.songName = name;
    },
    setArtistName: (name) => {
      song.songArtist = name;
    },
    setAlbumName: (name) => song.songAlbum = name,
    setIsPlaying : ( val )=>{
      song.isPlaying = val
    },
    
  };

  return <SongContext.Provider value={{audio,song,__URL__}}>{children}</SongContext.Provider>;
};
