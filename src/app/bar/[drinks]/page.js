'use client'
import React, {useEffect} from 'react';
import {barCategories} from "../../../../data/categories";
import Prods from "@/components/Items/Items";
import styles from './style.module.scss';

const Page = ({params}) => {
    const data = barCategories.find(el => el.name = params.drinks);
    console.log(data)
    return (
        <div className={styles.barInner}>
            <div className="page-container">
                <div className={styles.barInnerContainer}>
                    <Prods data={data.prods}/>
                </div>
            </div>
            {/*{data.prods.map((el, i) => {*/}
            {/*  return (*/}
            {/*    el.name*/}
            {/*  )*/}
            {/*})}*/}
        </div>
    );
};

export default Page;