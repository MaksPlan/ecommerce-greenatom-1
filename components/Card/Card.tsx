import React from 'react';
import styles from  './Card.module.css';

export const Card = (): JSX.Element => { 
    return (
        <section className={styles.sectionCart}>
            <div className={styles.sectionCartHeader}>
                <div className={styles.container}>
                    <h1 className={styles.title}>
                        Корзина 
                    </h1>
                </div>
            </div>
            <div className={styles.sectionCartBody}>
                    <div className={styles.container}>
                        <div className={styles.cart}>
                            <div className={styles.cartHeader}>
                                <div className={styles.cartHeaderTitle}>товар</div>
                                <div className={styles.cartHeaderPrice}>цена</div>
                                <div className={styles.cartHeaderCount}>количество</div>
                                <div className={styles.cartHeaderCost}>сумма</div>           
                            </div>
                                <div className={styles.product}>
                                    <div className={styles.wrapper}>
                                        Нож Бекас
                                    </div>
                                </div>
                                <div className={styles.cartFooter}>
                                    итого:
                                </div>
                        </div>
                    </div>
            </div>
    </section>
    );

}