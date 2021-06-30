import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/currentpage/currentPage.action';
import './SidebarItem.scss'
const SidebarItem = ({children}) => {
    const dispatch = useDispatch();
    const page=useSelector((state)=>state.page.page);
    return (
        <>
            <div onClick={()=>{
                dispatch(setCurrentPage(children.name))
                }} className={`${page===children.name &&'sidebar__item--clicked'} sidebar__item`}><div className={`${page===children.name &&'svg-wrapper--clicked'} svg-wrapper`}>{children.item}</div></div>
        </>
    )
}

export default SidebarItem
