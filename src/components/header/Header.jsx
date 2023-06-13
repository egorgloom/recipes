import React from 'react'
import { BsFillBookmarkHeartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';


export default function Header() {
  const {favorites} = useSelector(state=> state)
  return (
    <div>
      <BsFillBookmarkHeartFill />
      <span>{favorites.length}</span>
    </div>
  )
}
