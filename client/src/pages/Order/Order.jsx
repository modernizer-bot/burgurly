import React from 'react'
import './Order.scss'
import Button from '../../components/Button/Button'
import OrderItem from '../../components/OrderItem/OrderItem'
const Order = () => {
    return (
        <div className='order'>
            <div className="order__heading heading-3">Orders #34562</div>
            <div className="order__button"><Button type="primary">Dine In</Button></div>
            <div className="order__description">
                <div className="order__description-item order__description-item-1">Item</div>
                <div className="order__description-item order__description-item-2">Qty</div>
                <div className="order__description-item order__description-item-3">Price</div>
            </div>
            <div className="order__item"><OrderItem/></div>
            
        </div>
    )
}

export default Order
