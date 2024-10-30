import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getComments = createAsyncThunk("comments/get", async(id) => {
    const response = await axios.get("http://localhost:3004/comments?book=" + id)
    return response.data
})

export const addComment = createAsyncThunk("comments/add", async({id, commentData}) => {
    const response = await axios.post("http://localhost:3004/comments?book=" + id, commentData)
    console.log(response.data)
    return response.data 
})