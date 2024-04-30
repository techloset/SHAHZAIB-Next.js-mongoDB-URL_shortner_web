import { configureStore } from '@reduxjs/toolkit'
import  fetchUserSliceReducer  from './slices/userSlice'
import  fetchUserProfileSliceReducer  from './slices/authSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    fetchUser : fetchUserSliceReducer ,
    fetchUserData : fetchUserProfileSliceReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;