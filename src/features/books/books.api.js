import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk("books/get", async() => {
    const response = await axios.get("http://localhost:3004/books")
    return response.data
})

export const getBook = createAsyncThunk("book/get", async(id) => {
    const response = await axios.get("http://localhost:3004/books/"+id)
    return response.data
})
