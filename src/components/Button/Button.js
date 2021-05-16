import React from 'react';
import styles from "../Button/Button.module.scss";

const Button  = ({href, children, ...props}) => (
    <>
        {
            href ? 
            (<a
                className={styles.form__button}
                target="_blank"
                href={href}
                rel="noopener noreferrer"
            >{children}</a>) : (
            <button className={styles.form__button} {...props}>{children}</button>)
        }
    </>
);

export default Button;