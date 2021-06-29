import React from 'react'
import Button from '../Button/Button'
import {ReactComponent as Delete} from '../../assets/Trash.svg'
import './OrderItem.scss'
const OrderItem = () => {
    return (
        <div className='orderitem'>
            <div className="orderitem__detail">
                <div className="orderitem__detail-primary">
                    <div className="orderitem__detail-primary-description">
                        <div className="orderitem__detail-primary-description-image"><img src="/burger.jpg" alt="order" /></div>
                        <div className="orderitem__detail-primary-description-text">
                            <div className="orderitem__detail-primary-description-text-heading heading-4">Spicy Seasoned...</div>
                            <div className="orderitem__detail-primary-description-text-cost u-color-light heading-5">$ 2.7</div>
                        </div>
                    </div>
                    <div className="orderitem__detail-primary-quantity"><Button type="backgroud-light">1</Button></div>
                    <div className="orderitem__detail-primary-price"><span className="u-margin-right-sm">$</span>5</div>
                </div>
                <div className="orderitem__detail-secondary">
                    <div className="orderitem__detail-secondary-inputContainer"><input placeholder='Order Note...'/></div>
                    <div className="orderitem__detail-secondary-delete"><Button type="ghost"><Delete/></Button></div>
                </div>
            </div>
        </div>
    )
}

export default OrderItem
