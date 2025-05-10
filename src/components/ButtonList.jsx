import { useSelector } from "react-redux";
import Button from "./Button"

const btnlist = [
    "All", "Gaming", "Music", "Movies", "Sports", "News", "Trending", "Fashion", 
    "Fitness", "Health", "Technology", "Food", "Lifestyle", "DIY", "Education", "Science"
  ];
const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)
  return (
    <div className={`mx-4 my-2 flex overflow-x-auto no-scrollbar`}>
      {btnlist.map((btnname,index) => <Button key={index} name={btnname} />)}
    </div>
  )
}

export default ButtonList
