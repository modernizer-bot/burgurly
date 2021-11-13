import React from 'react'
import './MenuCard.scss'
import {ReactComponent as Edit} from '../../../assets/Edit.svg'
const MenuCard = (props) => {
    console.log(props);
    return (
        <div className={`${props.formCalled && 'menuCard--dark'} menuCard`}>
            <div className="menuCard__image"><img src={`data:image/jpeg;base64,${props.src}`} alt={props.title} /></div>
            <div className="menuCard__description">
                <div className="menuCard__description-heading menuCard-text">{props.title}</div>
                <div className="menuCard__description-price menuCard-text"><span className="u-margin-right-sm">$</span>{props.price}</div>
                <div className="menuCard__description-available menuCard-text">{props.price} bowls available</div>
            </div>
            {!props.formCalled && <div className="menuCard__Edit"><Edit/>&nbsp;&nbsp;Edit Dish</div>}
        </div>
    )
}

export default MenuCard
