import {  useEffect } from "react";
import styles from './Home.module.css';
import Menu from '../../components/Menu';
import Card from '../../components/Card';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../actions/productActions';

function Home() {
    const dispatch = useDispatch();
    const productsList = useSelector((state) => state.product.products);
    useEffect(() =>{
        dispatch(listProducts())
    },[dispatch])
    
    return (
        <>
            <Menu />
            <section className={styles.containerProducts}>
                <h1 className={styles.homeTitle}>Home page</h1>
                <div className={styles.listCards}>
                    {productsList?.map((item) => {
                        return <Card 
                                    key={item.id} 
                                    nomeProduto={item.nome} 
                                    valor={item.valor_unitario} 
                                    linkImg={item.url_imagem}
                                    quantidade={item.quantidade}
                                    id={item.id}
                                />
                    })}
                </div>
            </section>
        </>
    );
}

export default Home;