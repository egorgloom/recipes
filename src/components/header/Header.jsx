import React from 'react'
import { BsBookmarkHeartFill } from 'react-icons/bs'
import { useFavorites } from './../../hooks/useFavorites';
import classes from './Header.module.css'


export default function Header() {
  const { favorites } = useFavorites()
  return (
    <>
    <header className={classes.header}>
    <BsBookmarkHeartFill />
      <span className={classes.headerSpan} >{favorites.length}</span>
    </header>
    </>
  )
}
