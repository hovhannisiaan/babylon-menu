import React from 'react';
import styles from './style.module.scss'
import {Inria_Serif} from "next/font/google";

const inriaSerif = Inria_Serif({subsets: ['latin'], weight: ['400']});

const Prods = ({data}) => {
    let finalData;
    data.forEach(el => {
        if (Array.isArray(el.price)) {
            finalData = [];
            el.price.map(element => {
                let n = element + '';
                n = n.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                console.log(n + 'n')
                finalData.push(n)
            })

        } else {
            el.price = el.price + '';
            finalData = el.price.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        }
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