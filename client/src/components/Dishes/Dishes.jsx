import React from 'react'
import './Dishes.scss'
const Dishes = () => {
    return (
        <div className="dishes">
            <div className="dishes__image"><img src="/burger.jpg" alt="burger" /></div>
            <div className="dishes__description">
                <div className="dishes__description-heading">Spicy seasoned seafood noodles</div>
                <div className="dishes__description-price"><span className="u-margin-right-sm">$</span>2.29</div>
                <div className="dishes__description-available">20 bowls available</div>
            </div>
        </div>
    )
}

export default Dishes
