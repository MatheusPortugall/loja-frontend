import styles from './Menu.module.css';

function Menu(){
    return (
        <ul className={styles.listMenu}>
            <li>Home</li>
            <li>Meu carrinho</li>
            <li>Sair</li>
        </ul>
    );
}

export default Menu;