import React from 'react'
import './Dishes.scss'
import random from 'random'
const Dishes = ({dish}) => {
    return (
        <div className="dishes">
            <div className="dishes__image"><img src={dish.image} alt={dish.title} /></div>
            <div className="dishes__description">
                <div className="dishes__description-heading dishes-text">{dish.title}</div>
                <div className="dishes__description-price dishes-text"><span className="u-margin-right-sm">$</span>{random.float(0, 25).toString().substring(0,4)}</div>
                <div className="dishes__description-available dishes-text">{dish.id.toString().substring(1,3)} bowls available</div>
            </div>
        </div>
    )
}

export default Dishes
