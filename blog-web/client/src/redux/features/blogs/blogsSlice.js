import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    blogs: [],
    isLoading: false,
    isError: false,
    error: '',
}

const blogsSlice = createSlice({
    name:"blogs",
    initialState,
})