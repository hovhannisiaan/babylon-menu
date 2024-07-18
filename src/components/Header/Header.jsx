import React from 'react';
import styles from './style.module.scss';
import Image from "next/image";
import logoImg from '../../../public/img/logo.png';
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styles.headerContainer} page-container`}>
                <Link href={'/'} className={styles.logoContainer}>
                    <span className="img-container">
                        <Image src={logoImg} alt="logo" width={57.81} height={61}/>
                    </span>
                </Link>
            </div>
        </header>
    );
};

export default Header;