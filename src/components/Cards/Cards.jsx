import React from 'react';
import styles from './style.module.scss';
import Link from "next/link";
import Image from "next/image";
import {Inria_Serif} from "next/font/google";

const inriaSerif = Inria_Serif({subsets: ['latin'], weight: ['400']});

const Cards = ({data, multiCol = false}) => {
    return (
        <ul className={`${styles.cardsList}${multiCol ? ` ${styles.multi}` : ''}`}>
            {data.map((el, i) => {
                return (
                    <li key={i} className={styles.cardsItem}>
                        <Link className={styles.cardsLink} href={el.link}>
                            <span className={inriaSerif.className}>
                                {el.name}
                            </span>
                        </Link>
                        <Image className={styles.cardsImage} src={el.img} alt={el.name} width={100}
                               height={100}/>
                        <div className={styles.opacity}/>
                    </li>
                )
            })}
        </ul>
    );
};

export default Cards;