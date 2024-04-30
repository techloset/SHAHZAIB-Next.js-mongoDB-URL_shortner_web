import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserProfileData , UserProfileState} from "../../../../types/type";

const initialState: UserProfileState = {
    userData: null,
    loading: true,
    error: null,
};

export const fetchUserData = createAsyncThunk(
    "authSlice/fetchUserProfile",
    async () => {
        try {
            const response = await axios.get("/api/profileData");
            const result: UserProfileData = response.data; 
            return result;
        } catch (error) {
            throw error;
        }
    }
);

const fetchUserProfileSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.userData = action.payload;
                state.error = null;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Koi masla paish aya.";
            });
    },
});

export default fetchUserProfileSlice.reducer;