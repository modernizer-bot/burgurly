import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/currentpage/currentPage.action';
import './SidebarItem.scss'
const SidebarItem = ({children}) => {
    const dispatch = useDispatch();
    const page=useSelector((state)=>state.page.page);
    const [clicked,setclicked]=useState(false);
    return (
        <>
            <div onClick={()=>{
                setclicked(true)
                dispatch(setCurrentPage(children.name))
                }} className={`${clicked && page===children.name &&'sidebar__item--clicked'} sidebar__item`}><div className={`${clicked && page===children.name &&'svg-wrapper--clicked'} svg-wrapper`}>{children.item}</div></div>
        </>
    )
}

export default SidebarItem
