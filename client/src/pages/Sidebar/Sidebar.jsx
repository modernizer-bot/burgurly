import React from 'react'
import './Sidebar.scss'
import {ReactComponent as Logo} from '../../assets/Logo.svg'
import {ReactComponent as Home} from '../../assets/Home.svg'
import {ReactComponent as Discount} from '../../assets/Discount.svg'
import {ReactComponent as Dashboard} from '../../assets/Dashboard.svg'
import {ReactComponent as Message} from '../../assets/Message.svg'
import {ReactComponent as Notification} from '../../assets/Notification.svg'
import {ReactComponent as Setting} from '../../assets/Setting.svg'
import {ReactComponent as Log} from '../../assets/log.svg'
import SidebarItem from '../../components/SidebarItem/SidebarItem'
const Sidebar = () => {
    const arraylist=[{item:<Home/>, name:"home"},
                    {item:<Discount/>,name:"discount"},
                    {item:<Dashboard/>,name:"dashboard"},
                    {item:<Message/>,name:"message"},
                    {item:<Notification/>,name:"notification"},
                    {item:<Setting/>,name:"setting"},
                    {item:<Log/>,name:"logout"},
                ];
    return (
        <div className='sidebar'>
            <div className="sidebar__brand"><Logo/></div>
            {arraylist.map((item)=>{
                return <SidebarItem key={item.name}>{item}</SidebarItem>
            })}
        </div>
    )
}

export default Sidebar
