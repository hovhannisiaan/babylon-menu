import React from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import logoImg from '../../../public/img/logo.png';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} page-container`}>
                <div className={styles.logoContainer}>
                    <div className="img-container">
                        <Image src={logoImg} alt="logo" width={57.81} height={61}/>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;