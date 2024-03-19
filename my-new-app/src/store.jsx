import { configureStore } from '@reduxjs/toolkit'
import pizzaSlice from './pages/PizzaOrder/pizzaSlice'


export default configureStore({
  reducer: {
    pizza: pizzaSlice

  }
})