import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import SongCard from "../components/SongCard";
import { SidebarContext } from "../Context/SibebarContext";
import { FetchContext } from "../Context/FetchContext";
import { SongContext } from "../Context/SongContext";
import { QueueContext } from "../Context/QueueContex";

const Songs = () => {
  const { showMenu, setShowMenu } = useContext(SidebarContext);
  const {fetchSong} = useContext(FetchContext)
  const {queue,list} = useContext(QueueContext)
  const {__URL__} = useContext(SongContext)
  
  const [loading, setLoading] = useState(false);
  const [songs, setSongs] = useState(null);

  useEffect(() => {
    if (showMenu) setShowMenu(false);
    const fetchSongs = async () => {
      const { data } = await axios.get(`${__URL__}/api/v1/songs`);
      setSongs(data["songs"]);
    };
    setLoading(true);
    fetchSongs();

    setLoading(false);
  }, [fetchSong]);
 
  const closeMenu = () => {
    setShowMenu(false); 
  };

  return (
    <div onClick={closeMenu} className="bg-gradient-to-b from-slate-500 to-yellow-100 p-5 space-y-2 min-h-screen">
      {loading && songs == null ? (
        <div>loading...</div>
      ) : !loading && songs != null ? (
        songs.map((song, index) => (
          <React.Fragment key={song._id}>
            <SongCard
              title={song.title}
              artistName={song.artist}
              songSrc={song.song}
              userId={song.uploadedBy}
              songId={song._id}
              file={song.file}
            />
            {/* Check if it's the last iteration before adding <br/> */}
            {index === songs.length - 1 && (
              <div>
                <br />
                <br />
              </div>
            )}
          </React.Fragment>
        ))
      )
       : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Songs;
