import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserData , UserState} from "../../../../types/type";

const initialState: UserState = {
    userData: null,
    loading: true,
    error: null,
};

export const fetchUser = createAsyncThunk(
    "usersdata/fetchUser",
    async () => {
        try {
            const response = await axios.get("/api/urlshortner");
            const result: UserData[] = response.data; 
            return result;
        } catch (error) {
            throw error;
        }
    }
);

const fetchUserSlice = createSlice({
    name: "usersdata",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
                state.error = null;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Koi masla paish aya.";
            });
    },
});

export default fetchUserSlice.reducer;