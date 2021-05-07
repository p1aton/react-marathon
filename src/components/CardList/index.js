import React from 'react';
import Card from '../Card';
import s from './style.module.css'




const CardList = ({item = []}) => {
    return (
        <div className={s.wrapper}>
            {
                item.map(({ eng, rus }, index) => (
                    <Card key={index} eng={eng} rus={rus} />
                ))
            }
        </div>
    )
}

export default CardList;