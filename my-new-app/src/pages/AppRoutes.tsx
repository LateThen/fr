import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home"
import PizzaOrder from "./PizzaOrder/PizzaOrder";
import NavBar from "../components/NavBar/NavBar";
import Cart from "../components/Cart/Cart";
import PCOrder from "./PCOrder/PCOrder";
import PCCart from "../components/PCCart/PCCart"

export default function AppRoutes(){
    return(

        <>
        <HashRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pizzaorder" element={<PizzaOrder/>} />
                <Route path="/pcorder" element={<PCOrder/>} />

            </Routes>
            <PCCart></PCCart>
            <Cart/>
        </HashRouter>
        </>
    )



}