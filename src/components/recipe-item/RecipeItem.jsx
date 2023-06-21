import React from 'react'


import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';


export default function RecipeItem({recipe}) {
  const {favorites} = useFavorites();
  const {toggleFavorites} = useActions()
  const isExist = favorites.some(elem => elem.id === recipe.id)
  return (
    <div>
        {/* <img src="" alt="" /> */}
        <h2>{recipe.name}</h2>
        <button onClick={()=> toggleFavorites(recipe)}>{isExist ? 'Remove to favorites' : 'Add to favorites'}</button>
      
    </div>
  )
}
