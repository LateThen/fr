import "./PC-Cart.css"
import { useDispatch, useSelector } from "react-redux"
import { PCState, remove} from "../../pages/PCOrder/pcSlice"
import { render } from "react-dom";


export default function Cart(){
    const orders = useSelector((state: PCState) => state.pc.orders)
    const dispatch = useDispatch();
    const removePC = (index: number) => {
        dispatch(remove(index));
    }
    const renderOrders = () => {
      const foo = [];
      for (const [key, value] of Object.entries(orders)) {
            foo.push(
                <p key={key}>
                    {key}: {value}
                    <button className="cart-delete-button" onClick={() => removePC(key as unknown as number)}>X</button>
                </p>
            )
      }
      return foo;
    }
    return(
        <>
            <p>Your orders:</p>
            {renderOrders()}
        </>
    )
}