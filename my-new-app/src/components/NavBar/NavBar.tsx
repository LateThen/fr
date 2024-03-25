import { Link } from "react-router-dom"
import "./NavBar.css"

export default function NavBar(){
return (
    <>
    <ul className="navbar-ul">
        <Link to={"/"}>
        <li>Home</li>
        </Link>
        <Link to={"/pizzaorder"}>
        <li>Pizza Order</li>
        </Link>
    </ul>
    </>
)






}