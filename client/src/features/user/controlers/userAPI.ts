import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface Register{
    name: string;
    password: string;
}

export const registerAsync = createAsyncThunk(
    'users/registerUser',
    async ({name, password}: Register, thunkAPI) => {
       try {
         const {data} = await axios.post(`/api/users/add-user`, { name, password })
         if(!data.user) throw new Error(data.error)
         return data.user
       } catch (error) {
        console.error(error);
       }
    }
)