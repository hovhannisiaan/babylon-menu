import React from 'react';
import styles from './style.module.scss'
import {Inria_Serif} from "next/font/google";

const inriaSerif = Inria_Serif({subsets: ['latin'], weight: ['400']});

const Prods = ({data}) => {
    data.forEach(el => {
        el.price = el.price + '';
        el.price = el.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    })

    return (
        <ul className={styles.prods}>
            {data.map((el, i) => {
                return (
                    <li key={i} className={`${styles.prodsItem} ${inriaSerif.className}`}>
                            <span>
                                {el.name}
                            </span>
                        <span>
                                {el.price}
                            </span>
                    </li>
                )
            })}
        </ul>
    );
};

export default Prods;