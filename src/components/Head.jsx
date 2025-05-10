// import YTlogo from "/youtube-svgrepo-com.svg";
import { useDispatch } from 'react-redux';
import HamburgerIcon from '/hamburger-menu-more-svgrepo-com.svg'
import SearchIcon from '/search-svgrepo-com.svg'
import { toggleMenu } from '../utils/appSlice';
import { Link } from 'react-router-dom';


const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () =>{
        dispatch(toggleMenu())
    }
  return (
    <>
      <div className="grid grid-flow-col  px-6 py-2 items-center justify-between ">
        <div className='flex'>
          <img
            onClick={()=>toggleMenuHandler()}
            className="w-8 h-8 cursor-pointer"
            src={HamburgerIcon}
          />
     
      <Link to="/"><img className=" ml-3 w-24 h-6 mt-[4px] cursor-pointer" src="https://www.gstatic.com/youtube/img/branding/youtubelogo/svg/youtubelogo.svg" /></Link>

       
        </div>
        <div className='flex items-center'>
          <input className='w-[550px] h-10 rounded-l-full pl-4 border-2 border-r-0' type="text" placeholder="Search" />
          <button><img className='h-10 w-16  py-2  bg-gray-300 rounded-r-full ' src={SearchIcon}/></button>
        </div>
        <div>
          <img className='h-10 w-10 cursor-pointer' src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" />
        </div>
      </div>
    </>
  );
};
export default Head;
