import React, { useState } from 'react'
import { useCreateRecipeMutation } from '../../store/api/resipe.api'
import classes from './CreateRecipe.module.css'

const defaultValue = {
    name: '',
    image: '',
}

export default function CreateRecipe() {

    const [recipe, setRecipe] = useState(defaultValue);

    const [createRecipe] = useCreateRecipeMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        createRecipe(recipe).then(() => {
            setRecipe(defaultValue)
        })

    }
    return (
        <form className={classes.createForm} onSubmit={handleSubmit}>
            <p>Create New Recipe:</p>
            <label>
                <input
                    type="text"
                    placeholder='Name'
                    value={recipe.name}
                    onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
                />
            </label>
            <label>
                <input
                    type="text"
                    placeholder='Image'
                    value={recipe.image}
                    onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
                />
            </label>
            <button className={classes.createButton} type="submit">Create</button>

        </form>
    )
}
