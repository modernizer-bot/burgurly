import React from 'react'
import './Dishes.scss'
import random from 'random'
import { useDispatch } from 'react-redux'
import { addCartItem } from '../../redux/Order/order.action'
const Dishes = ({dish}) => {
    const dispatch = useDispatch();
    const price=random.float(1, 25).toFixed(2);
    const bowls=dish.id.toString().substring(1,3);
    const fulldish={
        ...dish,
        price,bowls
    }
    return (
        <div className="dishes" onClick={()=>dispatch(addCartItem(fulldish))}>
            <div className="dishes__image"><img src={dish.image} alt={dish.title} /></div>
            <div className="dishes__description">
                <div className="dishes__description-heading dishes-text">{dish.title}</div>
                <div className="dishes__description-price dishes-text"><span className="u-margin-right-sm">$</span>{price}</div>
                <div className="dishes__description-available dishes-text">{bowls} bowls available</div>
            </div>
        </div>
    )
}

export default Dishes
