import React from 'react'
import './Header.scss'
import moment from 'moment'
import {ReactComponent as Search} from '../../assets/search.svg'
const Header = () => {
    const time= moment().format('dddd, DD MMMM YYYY');  
    return (
        <div className='header'>
            {/* <a href="/auth/google">Sign In With Google</a> */}
            <div className="header__left">
                <div className="header__left-title heading-1">Jaegar Resto</div>
                <div className="header__left-time">{time}</div>
            </div>
            <div className="header__inputContainer">
                <Search/>
                <input placeholder='Search for food, coffee, etc'/>
            </div>
        </div>
    )
}

export default Header
