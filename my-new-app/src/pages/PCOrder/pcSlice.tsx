import { createSlice } from "@reduxjs/toolkit"

export const pcSlice = createSlice({
    name: "pc",
    initialState: {
        orders: {},
        counter: 0
    },
    reducers: {
        addPC: (state, action) => {
          state.counter = state.counter + 1
          state.orders = {
            ...state.orders,
            [state.counter]: action.payload
          }
        },
        remove: (state, action) =>{
                delete state.orders[action.payload as keyof typeof state.orders]
        }
    }
})
export const { addPC, remove } = pcSlice.actions;

export default pcSlice.reducer;

export type PCState = {
    pc: {
        orders: { [id: number]: string },
        counter: number,
    }
}
