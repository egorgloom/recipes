import React from 'react'


import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';
import { useDeleteRecipeMutation } from '../../store/api/resipe.api';


export default function RecipeItem({recipe}) {
  const {favorites} = useFavorites();
  const {toggleFavorites} = useActions()
  const isExist = favorites.some(elem => elem.id === recipe.id)

  const [deleteRecipe, setDeleteRecipe] = useDeleteRecipeMutation()
  return (
    <div>
        <img src={recipe.image} alt={recipe.name} width={100}/>
        <h2>{recipe.name}</h2>
        <button onClick={()=> toggleFavorites(recipe)}>{isExist ? 'Remove to favorites' : 'Add to favorites'}</button>
        <button onClick={()=> deleteRecipe(recipe.id)}>DELETE RECIPE</button>
      
    </div>
  )
}
