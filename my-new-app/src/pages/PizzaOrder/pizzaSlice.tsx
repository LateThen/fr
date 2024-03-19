import { createSlice } from "@reduxjs/toolkit"

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState: {
        orders: {},
        counter: 0
    },
    reducers: {
        addPizza: (state, action) => {
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
export const { addPizza, remove } = pizzaSlice.actions;

export default pizzaSlice.reducer;

export type PizzaState = {
    pizza: {
        orders: { [id: number]: string },
        counter: number,
    }
}
