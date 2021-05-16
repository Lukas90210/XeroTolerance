import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';
import Button from "../Button/Button";
import Title from "../Title/Title";

const ListItem = ({
    image,
    title,
    description,
    link
}) => {

    const ImageTag = image ? "img" : "div";

    return (
        <li className={styles.ListItem__wrapper}>
            <ImageTag
        src={image}
        className={image ? styles.ListItem__img : styles.ListItem__imgNone}
        alt={title}
      />
            <div>
                <Title>{title}</Title>
                <p className={styles.ListItem__description}>{description}</p>
               {link && <Button href={link}>go to link</Button>}
            </div>
        </li>
    )
};
ListItem.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    link: PropTypes.string,
    
};
ListItem.defaultProps = {
    image: null,
    link: null,
  };
export default ListItem;