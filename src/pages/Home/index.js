//import { useEffect } from 'react';
import styles from './Home.module.css';
import Menu from '../../components/Menu';
import Card from '../../components/Card';

function Home() {
    return (
        <>
        <Menu />
            <section className={styles.containerProducts}>
                <h1 className={styles.homeTitle}>Home page</h1>
                <div className={styles.listCards}>
                    <Card />
                </div>
            </section>
        </>
    );
}

export default Home;