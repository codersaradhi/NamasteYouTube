// import { use } from "react"
import ButtonList from "./ButtonList"
import VedioContainer from "./VedioContainer"
import {  useSelector } from "react-redux";



const MainContainer = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen)

  return (
    <div className={isMenuOpen ? `w-[84%]` : `w-[100%]`}>
      <ButtonList />
      <VedioContainer />
    </div>
  )
}

export default MainContainer
