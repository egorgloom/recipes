import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const API_RECIPE = 'http://localhost:4300/recipes'
export const api = createApi({
    reducerPath: 'api',
    tagTypes: ['Recipe'],
    baseQuery: fetchBaseQuery({
        baseUrl: API_RECIPE
    }),
    endpoints: builder => ({
        getRecipes: builder.query({
            query: ()=> '/?_sort=id&_order=desc',
            providesTags: ()=> [{
                type: 'Recipe'
            }]
        }),
        
    })
})

export const {useGetRecipesQuery} = api