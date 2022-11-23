import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "../interface/entities/interface";
import { RootState } from "./rootReducer";


type TBasketState = { basket: IProduct[], }


const initialState: TBasketState = {
  basket: [],
};

export const basketSlice = createSlice({
  name: "favoriets",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<IProduct>) => {

      const isUnique = state.basket.some((item) => item.id === action.payload.id)

      if (!isUnique) state.basket = [...state.basket, action.payload]

    },
    deleteItem: (state, action: PayloadAction<IProduct>) => {
      state.basket = state.basket.filter(
        (item) => item.id !== action.payload.id
      );
    },

  },
});

export const getFavoriets = (state: RootState) => state.favoriets

export const { addItem, deleteItem } = basketSlice.actions; // 
export default basketSlice.reducer;