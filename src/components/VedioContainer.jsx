import { useEffect, useState, version } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const VedioContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getVedios();
  }, []);
  const getVedios = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setvideos(json.items);
  };
  return (
    <div
      className={`mx-6 my-2 flex flex-wrap `}
    >
      {videos.map((video) => (
        <Link key={video.id} to={`/watch?v=${video.id}`} >
          <VideoCard  info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VedioContainer;
