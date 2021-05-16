import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./HeaderNavigation.module.scss";

const HeaderNavigation = () => (
   <nav>
        <ul className={styles.wrapper}>
        <li className={styles.NavItem}>
            <NavLink 
                exact
                activeClassName={styles.NavItemLinkActive}
                className={styles.NavItemLink} to="/">Links</NavLink>
        </li>
        <li className={styles.NavItem}>
            <NavLink 
                activeClassName={styles.NavItemLinkActive}
                className={styles.NavItemLink} to="/Articles">Articles</NavLink>
        </li>
        <li className={styles.NavItem}>
            <NavLink 
                activeClassName={styles.NavItemLinkActive}
                className={styles.NavItemLink} to="/Notes">Notes</NavLink>
        </li>
    </ul>
   </nav>
);

export default HeaderNavigation;