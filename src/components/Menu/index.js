import { useEffect, useState } from 'react';
import styles from './Menu.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Menu(){
    const [cartListLength, setCartListLength] = useState(0);
    const cartList = useSelector((state) => state.cart.cart);
    useEffect(() => {
        setCartListLength(cartList.length)
    }, [cartList])
    return (
        <ul className={styles.listMenu}>
            <li>
                <Link className={styles.link} to="/home">Home</Link>
            </li>
            <li className={styles.liNotification}>
                <Link className={styles.link} to="/carrinho">Meu carrinho</Link>
                {cartListLength > 0 && <span>{cartListLength}</span>}
            </li>
            <li>
                <Link className={styles.link} to="/">Sair</Link>
            </li>
        </ul>
    );
}

export default Menu;