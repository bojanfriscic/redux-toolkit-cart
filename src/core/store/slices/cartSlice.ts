import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { STORE_KEYS } from "../../enums/storeKeys";
import { ICartItem } from "../../interfaces/ICartItem";

interface ICartSlice {
    data: Array<ICartItem>;
    message: string;
}

interface IUpdatePayload {
    id: number;
    quantity: number;
}

const cartInitialState: ICartSlice = {
    data: [],
    message: ''
};

const cartSlice = createSlice({
    name: STORE_KEYS.CART,
    initialState: cartInitialState,
    reducers: {
        addItem: ({ data }, { payload }: PayloadAction<ICartItem>) => {
            const index = data.findIndex(item => item.id === payload.id);

            if (index !== -1) {
                data[index].quantity = payload.quantity;
            } else {
                data.push(payload);
            }
        },
        removeItem: ({ data }, { payload }: PayloadAction<number>) => {
            const index = data.findIndex(item => item.id === payload);

            if (index !== -1) {
                data.splice(index, 1);
            }
        },
        updateQuantity: ({ data }, { payload }: PayloadAction<IUpdatePayload>) => {
            const { id, quantity } = payload;

            if (quantity < 1) {
                const index = data.findIndex(item => item.id === id);

                if (index !== -1) {
                    data[index].quantity = quantity;
                }
            }
        },
        emptyCart: state => {
            state.data = [];
        },
        setMessage: (state, { payload }: PayloadAction<string>) => {
            console.log(state.message, payload)
            state.message = payload;
        }
    }
});

export const { addItem, removeItem, updateQuantity, emptyCart, setMessage } = cartSlice.actions;
export default cartSlice.reducer;