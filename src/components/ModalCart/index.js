import styles from './ModalCart.module.css';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart } from '../../reducers/cartSlice';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function ModalCart ({ isOpen, closeModal, productSelected }) {
    const dispatch = useDispatch();
    const [product, setProduct] = useState(productSelected);
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("");
    const [isOpenModal, setIsOpenModal] = useState(isOpen);
    const carts = useSelector((state) => state.cart.cart);

    useEffect(() => {
        setProduct(prevProduct => ({
            ...prevProduct,
            quantidadeCompra: 1
        }))
    }, [])
    useEffect(() => {
        setIsOpenModal(isOpen)
    }, [isOpen])
    const upQuantity = () => {
        if((product.quantidadeCompra) === product.quantidade) {
            setErrorAndMessage(true, `A quantidade máxima disponível é: ${product.quantidade}.`)
            return
        }
        setProduct(prevProduct => ({
            ...prevProduct,
            quantidadeCompra: prevProduct.quantidadeCompra + 1
          }));
        setErrorAndMessage(false, '')
    };
    const downQuantity = () => {
        if((product.quantidadeCompra-1) === 0) {
            setErrorAndMessage(true, `A quantidade mínima a ser comprada é: 1.`)
            setTimeout(() => {
                setErrorAndMessage(false, '')
            }, 3000)
            return
        }
       
        setProduct(prevProduct => ({
            ...prevProduct,
            quantidadeCompra: prevProduct.quantidadeCompra - 1
          }));
        setErrorAndMessage(false, '')
    };

    const handleAddProductToCart = (product) => {
        const index = carts.findIndex(objeto => objeto.id === product.id);
        console.log(carts)
        console.log(carts.findIndex(objeto => objeto.id === product.id))
        if (index !== -1) {
            const novoArrayObjetos = [...carts];
            
            novoArrayObjetos[index] = { ...novoArrayObjetos[index], ...product };
            console.log("novoArrayObjetos ", novoArrayObjetos)
            dispatch(addProductCart(novoArrayObjetos));
        } else {
            if(carts.length > 0){
                let listProducts = [...carts];
                dispatch(addProductCart(listProducts.concat(product)))
            } else {
                dispatch(addProductCart([product]))
            }
        }
    };

    const setErrorAndMessage = (error, message) => {
        setError(error);
        setMessage(message);
    };
    return (
        <Modal
            isOpen={isOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Adicionar ao carrinho"
        >
            <div className={styles.modalCart}>
                <h2>Adicionar ao carrinho</h2>
                <span>Quantidade disponível: {product.quantidade}</span>
                {error && <span>{message}</span>}
                <div className={styles.buttonGroup}>
                    <button onClick={() => downQuantity()} className={styles.fail}>-</button>
                     {product.quantidadeCompra &&
                        <span>{product.quantidadeCompra}</span>
                    } 
                    <button onClick={() => upQuantity()} className={styles.success}>+</button>
                </div>
                <div className={styles.buttonGroup}>
                    <button className={styles.empty} onClick={closeModal}>Fechar</button>
                    <button className={styles.info} onClick={() => handleAddProductToCart(product) && closeModal}>Salvar</button>
                </div>
            </div>
        
        </Modal>
    );
};

export default ModalCart;