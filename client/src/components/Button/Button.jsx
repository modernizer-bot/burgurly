import React from 'react'
import './Button.scss'
const Button = ({children,type,config}) => {
    return (
        <div className={`button--${type} button button--${config}`}>
            {children}
        </div>
    )
}

export default Button
