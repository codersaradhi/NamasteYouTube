

export const YOUTUBE_VIDEOS_API =
  `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${import.meta.env.VITE_GOOGLE_API_KEY}`;

export const WATCH_PAGE_KEY = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=V6d5MzTUOKU&key=${import.meta.env.VITE_GOOGLE_API_KEY}`

export const YOUTUBE_SEARCH_API = `https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=`

export const OFFSET_LIVE_CHAT = 15;