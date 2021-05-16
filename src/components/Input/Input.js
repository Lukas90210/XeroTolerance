import React from 'react';
import PropTypes from "prop-types";
import styles from "./Input.module.scss";


const Input = ({tag: Tag, name, label, maxLength, ...props}) => (
    <div className={styles.form__item}>
        <Tag
            className={Tag === 'textarea' ? styles.textarea : 
                styles.input}
            type="text"
            name={name}
            id={name}
            required={(!name==='image' || name==='link')}
            maxLength={maxLength}
            placeholder=" "
            {...props}
        />
        <label className={styles.label} htmlFor={name}>{label}</label>
    </div>
);

Input.propTypes = {
    tag: PropTypes.string,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    maxLength: PropTypes.number,
}
Input.defaultProps = {
    tag: 'input',
    maxLength: 200,
}
export default Input;