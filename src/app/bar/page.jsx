import React from 'react';
import Cards from "@/components/Cards/Cards";
import {barCategories} from "../../../data/categories";
import styles from "./style.module.scss"
const Page = () => {
    return (
        <div className={styles.bar}>
            <div className="inner-page-container">
                <Cards data={barCategories} multiCol/>
            </div>
        </div>
    );
};

export default Page;