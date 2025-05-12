// import YTlogo from "/youtube-svgrepo-com.svg";
import { useDispatch, useSelector } from "react-redux";
import HamburgerIcon from "/hamburger-menu-more-svgrepo-com.svg";
import SearchIcon from "/search-svgrepo-com.svg";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestions] = useState([]);
  const [showsuggestions, setshowsuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  /**
   * searchCache ={
   *         "iphone": ["iphone 13","iphone 16"]
   * }
   * searchQuery= iphone
   *
   */

  useEffect(() => {
    //api call
    //make an api call after every keypress
    //but if the diffrence between every keypress is morethan 200ms decline the api call
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestions(searchCache[searchQuery]);
      } else {
        getQuerySuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getQuerySuggestions = async () => {
    const data = await fetch(`${YOUTUBE_SEARCH_API}${searchQuery}`);
    const json = await data.json();
    setsuggestions(json[1]);
    //updating our cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  return (
    <>
      <div className="grid grid-flow-col  px-6 py-2 items-center ">
        <div className="flex">
          <img
            onClick={() => toggleMenuHandler()}
            className="w-8 h-8 cursor-pointer"
            src={HamburgerIcon}
          />

          <Link to="/">
            <img
              className=" ml-3 w-24 h-6 mt-[4px] cursor-pointer"
              src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg"
            />
          </Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex  justify-between ">
            <input
              className="w-[550px] h-10 rounded-l-full pl-4 border-2 border-r-0"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setsearchQuery(e.target.value)}
              onFocus={() => setshowsuggestions(true)}
              onBlur={() => setshowsuggestions(false)}
            />
            <button>
              <img
                className="h-10 w-16  py-2  bg-gray-300 rounded-r-full "
                src={SearchIcon}
              />
            </button>
          </div>
          {showsuggestions && (
            <div className="absolute top-12 py-2 px-5 w-[36%] bg-white shadow-lg rounded-lg border border-gray-100">
              <ul>
                {suggestions.map((s) => (
                  <li
                    key={s}
                    className="py-0.5 px-1 hover:bg-gray-100 rounded-sm"
                  >
                    {" "}
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div>
            <img
              className="h-10 w-10 cursor-pointer"
              src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Head;
