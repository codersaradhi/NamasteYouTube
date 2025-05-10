import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  //this below line is called early return
  if (!isMenuOpen) return null;
  return (
    <div
      className="w-52  px-5 py-5 ">
      <div>
        <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
          <li>Shots</li>
          <li>Subscriptions</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>You</li>
          <li>History</li>
        </ul>
      </div>
      <div>
        <p>
          Sign in to like videos,
          <br /> comment, and subscribe.
        </p>
        <button>Sign in</button>
      </div>
      <div>
        <h3 className="font-bold">Explore</h3>
        <ul>
          <li>Trending</li>
          <li>Shopping</li>
          <li>Music</li>
          <li>Movie</li>
          <li>Live</li>
          <li>Gaming</li>
          <li>News</li>
          <li>Sports</li>
          <li>Courses</li>
          <li>Fashion & Beauty</li>
          <li>Podcasts</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold">More from YouTube</h3>
        <ul>
          <li>YouTube Premium</li>
          <li>YouTube Music</li>
          <li>YouTube Kids</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Settings</li>
          <li>Report History</li>
          <li>Help</li>
          <li>Send feedback</li>
        </ul>
      </div>
      <div>
        <p className="text-[10px] font-bold text-gray-400">
          About Press Copyright <br />
          Contact us Creators <br />
          Advertise Developers <br />
          Terms Privacy Policy & Safety <br />
          How YouTube works <br />
          Test new features © 2025 Chaitu LLC
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
