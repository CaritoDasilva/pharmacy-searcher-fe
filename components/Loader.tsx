import React from 'react';
import styles from '../styles/Loader.module.scss'
const Loader = () => (
    <div className={styles.loaderContainer}>
        <h1 className={styles.animate}>Cargando...</h1>
    </div>
)

export default Loader;