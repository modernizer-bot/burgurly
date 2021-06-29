import React from 'react'
import './Button.scss'
const Button = ({children,type}) => {
    return (
        <div className={`button--${type} button`}>
            {children}
        </div>
    )
}

export default Button
