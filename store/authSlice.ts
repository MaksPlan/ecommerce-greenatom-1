import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../interface/entities/interface";

type TUserState = IUser;

const initialState: TUserState = {
    email: null,
    token: null,
    id: null,
}

export const authSlice = createSlice(
    {
        name: 'auth',
        initialState,
        reducers: {
            setUser: (state, action: PayloadAction<IUser>) => {
                state.email = action.payload.email;
                state.id = action.payload.id;
                state.token = action.payload.token
            },
            removeUser: (state) => {
                state.email = null;
                state.id = null;
                state.token = null;
            },
        }
    }

)
export const { setUser, removeUser } = authSlice.actions
export default authSlice.reducer

