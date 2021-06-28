import React,{useState} from 'react'
import './Sidebar.scss'
import {ReactComponent as Logo} from '../../assets/Logo.svg'
import {ReactComponent as Home} from '../../assets/Home.svg'
import {ReactComponent as Discount} from '../../assets/Discount.svg'
// import Button from '../../components/Button/Button'
const Sidebar = () => {
    const [clicked,setclicked]=useState(false);
    return (
        <div className='sidebar'>
            <div className="sidebar__brand"><Logo/></div>
            <div onClick={()=>setclicked(!clicked)} className={`${clicked && 'sidebar__item--clicked'} sidebar__item`}><div className={`${clicked && 'svg-wrapper--clicked'} svg-wrapper`}><Home/></div></div>
            <div onClick={()=>setclicked(!clicked)} className={`${clicked && 'sidebar__item--clicked'} sidebar__item`}><div className={`${clicked && 'svg-wrapper--clicked'} svg-wrapper`}><Discount/></div></div>
            
        </div>
    )
}

export default Sidebar
