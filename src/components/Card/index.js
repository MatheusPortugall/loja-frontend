import styles from './Card.module.css';

function Card(){
    return (
        <div className={styles.productCard}>
            <img src="https://cdn.pixabay.com/photo/2014/01/22/19/38/boot-250012_1280.jpg" alt="sapato"/>
            <div className={styles.productInfo}>
                <span>Sapato marrom</span>
                <span>R$190,00</span>
            </div>
            <div className={styles.buttonGroup}>
                <button className={styles.buttonInfo}>+ Carrinho</button>
            </div>
        </div>
    );
}

export default Card;