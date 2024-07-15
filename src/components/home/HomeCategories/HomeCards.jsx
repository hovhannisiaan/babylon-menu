import React from 'react';
import styles from './style.module.scss';
import {categories} from "../../../../data/categories";
import {Inria_Serif} from "next/font/google";
import Cards from "@/components/Cards/Cards";

const HomeCards = () => {
    return (
        <div className={styles.cards}>
            <div className="page-container">
                <Cards data={categories} />
            </div>
        </div>
    );
};

export default HomeCards;