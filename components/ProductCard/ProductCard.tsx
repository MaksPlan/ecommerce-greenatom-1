import React, {FC} from "react";
import styles from "./ProductCard.module.css";
import IconStar from "./icons/Star.svg";
import IconCompare from "./icons/scales.svg";
import IconLike from "./icons/like.svg";
import IconCart from "./icons/cart.svg";
import {IProduct} from '../../interface/entities/interface';
import Link from "next/link";
import {useAppDispatch, useAppSelector} from "../../hooks/redux-hooks";
import {addFav} from "../../store/favoritesSlice";
import {addToBasket} from "../../store/basketSlice";


interface IProps {
    item: IProduct,
    handleAddToBasket: (product: IProduct) => void,
    handleAddToFav: (product: IProduct) => void,
    handleDeleteToFav: (product: IProduct) => void,
    isFav: boolean
}

export const ProductCard: FC<IProps> = ({
                                            item,
                                            isFav,
                                            handleAddToBasket,
                                            handleAddToFav,
                                            handleDeleteToFav
                                        }): JSX.Element => {
    const {id, name, size, about, price, rating, description, img} = item

    const stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<IconStar key={i} className={styles.star}/>);
    }

    return (
        <Link className={styles.cart} href={`/catalog/${id}`}>
            <div>
                <div className={styles.images}>
                    <img src={img} className={styles.image}/>
                </div>
                <span className={styles.name}>{name}</span>
                <div className={styles.spec}>
                    <p>{size}</p>
                    <p>{about}</p>
                </div>
                <div className={styles.feedback}>
                    <div className={styles.rating}>
                        {stars.length == 0 ? "Нет рейтинга" : stars}
                    </div>
                    <div className={styles.reviews}>1 Отзыв</div>
                </div>
                <div className={styles.hr}>
                    <hr className={styles.line}/>
                </div>
                <div className={styles.footer}>
                    <div className={styles.price}>{price} р.</div>
                    <div className={styles.activity}>
                        <button className={styles.btn}><IconCompare/></button>
                        <button className={styles.btn}
                                onClick={(event) => isFav ? (event.preventDefault(), handleAddToFav(item)) : handleAddToFav(item)}>
                            <IconLike className={isFav ? styles.like : null}/>
                        </button>
                        <button className={styles.btn} onClick={(event) => {
                            event.preventDefault();
                            handleAddToBasket(item);
                        }}>
                            <IconCart/>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );
}
