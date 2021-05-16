import React from 'react';
import ListItem from './ListItem';
import styles from './List.module.scss';

const ListWrapper = ({itemki}) => (
   <>
    {itemki.length ? (
         <ul className={styles.List}>
         {itemki.map(item => (
             <ListItem key={item.name}{...item}/>
         ))}
     </ul>
    ) : (
        <h2>Nie ma żadnej notatki jeszcze. Dodać coś :)</h2>
    )}
   </>
)
export default ListWrapper;