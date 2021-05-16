import React from 'react';
import styles from "./Header.module.scss";
import HeaderNavigation from "./HeaderNavigation";
import logoimg from "../../assets/images/logo.svg";
import Button from "../Button/Button";

const Header = ({openModalFn}) => (
    <header className={styles.wrapper}>
        <img src={logoimg} alt="Logo"/>
        <HeaderNavigation />
        <Button onClick={openModalFn}>New item</Button>
    </header>
);

export default Header;