import React from 'react'
import {BsBookmarkHeartFill} from 'react-icons/bs'
import { useFavorites } from './../../hooks/useFavorites';


export default function Header() {
    const {favorites} = useFavorites()
  return (
    <>
            <BsBookmarkHeartFill />
      <span>{favorites.length}</span>
    </>
  )
}
