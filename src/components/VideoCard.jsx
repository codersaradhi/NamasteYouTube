import React from 'react'
import { useSelector } from 'react-redux';

const VideoCard = ({info}) => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen) 
    // console.log(info[0])
    // const {snippet,statistics} = info;
    // const {channelTitle,title,thumbnails} = snippet;
    // console.log(title)

  return (
   
    
    <div  className={isMenuOpen ? 'w-[405px] px-2 py-2 cursor-pointer ': 'w-[366px] px-2 py-2 cursor-pointer'} >
      <img className='rounded-2xl object-cover aspect-video' src={info?.snippet?.thumbnails?.high?.url} />
       <ul>
           <li className='font-bold '>{info?.snippet?.title}</li>
           <li className='font-semibold'>{Math.floor(info?.statistics?.viewCount/100000)+"M"}<span className=' text-gray-500'> views</span></li>
       </ul>
    </div>
  )
}


export default VideoCard;
