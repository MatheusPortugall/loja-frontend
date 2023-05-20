import styles from './Price.module.css';

function PriceFormat({ value }) {
    const formattedValue = value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  
    return <span className={styles.price}>{formattedValue}</span>;
}

export default PriceFormat;