import { useState } from 'react';
import styles from './Card.module.css';
import PriceFormat from '../Price';
import ModalCart from '../ModalCart';

function Card(props){
    const [isModalOpen, setIsModalOpen] = useState(false);

    const changeStatusModal= () => {
        setIsModalOpen(!isModalOpen)
    };
    return (
        <div className={styles.productCard}>
            <img src={props.linkImg} alt={props.nomeProduto}/>
            <div className={styles.productInfo}>
                <span>{props.nomeProduto}</span>
                <PriceFormat value={props.valor} />
            </div>
            <div className={styles.buttonGroup}>
                <button onClick={() => changeStatusModal()} className={styles.buttonInfo}>+ Carrinho</button>
            </div>
            <ModalCart productSelected={props} isOpen={isModalOpen} closeModal={() => changeStatusModal()}/>
        </div>
    );
}

export default Card;