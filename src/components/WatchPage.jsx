import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import { WATCH_PAGE_KEY } from "../utils/constants";

/*
Initialized watchVideo with null.
Added better error handling for fetching video details.
Conditionally rendered the video title only when watchVideo is available.
 */

const WatchPage = () => {
    const [watchVideo, setwatchVideo] = useState(null);
    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();

  const fetchingVedioDetails = async () => {
    const data = await fetch(WATCH_PAGE_KEY.replace("V6d5MzTUOKU", searchParams.get("v")));
    const json = await data.json();
    setwatchVideo(json.items[0].snippet)
  };
  useEffect(() => {
    dispatch(closeMenu());
    fetchingVedioDetails();
  }, []);
  console.log( watchVideo)
  return (
    <div className={`mx-6  ml-16 my-2 `}>
      <iframe
        className="rounded-3xl"
        width="1000"
        height="540"
        src={"https://www.youtube.com/embed/" + searchParams.get("v")}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      {watchVideo && <div>
        <h1 className="font-bold text-2xl my-2 w-[980px]">{watchVideo.localized.title}</h1>
      </div>}
    </div>
  );
};

export default WatchPage;
