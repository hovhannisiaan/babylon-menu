import React from 'react';
import styles from './style.module.scss';
import Cards from "@/components/Cards/Cards";
import {kitchenCategories} from "../../../data/categories";

const Page = () => {
    return (
        <div className={styles.kitchenPage}>
            <div className="inner-page-container">
            <Cards data={kitchenCategories} multiCol />
            </div>
        </div>
    );
};

export default Page;