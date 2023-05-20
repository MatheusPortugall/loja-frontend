//import styles from './CartResume.module.css';
import { useSelector } from 'react-redux';

function CartResume() {
    const carts = useSelector((state) => state.cart.cart);
    console.log(carts)
    return (
        <ul>
            {carts.map((cart) => {
                return <li key={cart.id}>{cart.nomeProduto}</li>
            })}
        
        </ul>
        
    );
}

export default CartResume;