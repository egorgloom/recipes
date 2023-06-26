import React from 'react'


import { useActions } from '../../hooks/useActions';
import { useFavorites } from '../../hooks/useFavorites';
import { useDeleteRecipeMutation } from '../../store/api/resipe.api';
import classes from './RecipeItem.module.css'


export default function RecipeItem({recipe}) {
  const {favorites} = useFavorites();
  const {toggleFavorites} = useActions()
  const isExist = favorites.some(elem => elem.id === recipe.id)

  const [deleteRecipe, setDeleteRecipe] = useDeleteRecipeMutation()
  return (
    <div className={classes.recipe}>
        <img className={classes.recipeImg} src={recipe.image} alt={recipe.name} />
        <p className={classes.recipeTitle}>{recipe.name}</p>
        <button className={classes.recipeButton} onClick={()=> toggleFavorites(recipe)}>{isExist ? 'Remove to favorites' : 'Add to favorites'}</button>
        <button className={classes.recipeButton} onClick={()=> deleteRecipe(recipe.id)}>Delete recipe</button>
      
    </div>
  )
}
