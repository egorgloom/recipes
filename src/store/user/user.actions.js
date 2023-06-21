import { createAsyncThunk } from "@reduxjs/toolkit"


const fetchUserByID = (userId) =>  //const fetchUserByID = userId =
    new Promise(resolve =>
        setTimeout(() => resolve({ id: 1, name: 'Egor' }), 1000)
    )

    export const getUserById = createAsyncThunk(
        'users/by-id', 
        async(userId, thunkApi) => {
            try {
                const response = await fetchUserByID(userId)
                return response
            } catch (error) {
                thunkApi.rejectWithValue({})
            }
        }
    )