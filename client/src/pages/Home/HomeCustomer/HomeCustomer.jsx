import React, { useEffect } from 'react'
import styled,{css} from 'styled-components'
import {useDispatch, useSelector} from 'react-redux';
import { setdishsection } from '../../../redux/Home/home.actions'
import RestaurantCard from '../../../components/RestaurantCard/RestaurantCard'
import { getRestaurants } from '../../../redux/restaurant/restaurant.actions';
import './HomeCustomer.scss'
const PseudoClass=css`
    color:#ea7c69;
    &::after{
        content: "";
        position: absolute;
        bottom: calc(-1rem - 2px);
        left: 0;
        width: 4rem;
        height: 3px;
        border-radius: 7px;
        background-color: #ea7c69;}
    `
const StyledItem=styled.div`
    position: relative;
    cursor:pointer;
    ${props=>props.section===props.name && PseudoClass} 
    ${props=>props.section==="main course" && `margin-right:1.25rem`} 
`
const HomeCustomerCustomer = () => {
    const dispatch = useDispatch();
    const currentSection=useSelector((state)=>state.dish.dishsection);
    // const dishes=useSelector((state)=>state.dish.dish);
    const user=useSelector((state)=>state.auth?.user);
    const restaurants=useSelector((state)=>state.restaurants);
    useEffect(() => {
        dispatch(getRestaurants());
        return () => {
            
        }
    }, [currentSection,dispatch,user])

    const fetchMenu=()=>{

    }
    return (
        <div className="homeCustomer">
            <div className="homeCustomer__section">
                <StyledItem section={currentSection} name="MainCourse" onClick={()=>dispatch(setdishsection("MainCourse"))}>Main Course</StyledItem>
                <StyledItem section={currentSection} name="sideDish" onClick={()=>dispatch(setdishsection("sideDish"))}>Side Dish</StyledItem>
                <StyledItem section={currentSection} name="soup" onClick={()=>dispatch(setdishsection("soup"))}>Soup</StyledItem>
                <StyledItem section={currentSection} name="drink" onClick={()=>dispatch(setdishsection("drink"))}>Drink</StyledItem>
                <StyledItem section={currentSection} name="appetizer" onClick={()=>dispatch(setdishsection("appetizer"))}>Appetizer</StyledItem>
                <StyledItem section={currentSection} name="dessert" onClick={()=>dispatch(setdishsection("dessert"))}>Dessert</StyledItem>
            </div>
            <div className="homeCustomer__heading heading-2">Choose Dishes</div>
            <div className="homeCustomer__overflowfix">
                <div className="homeCustomer__dishes">
                    {restaurants && restaurants?.restur?.map((restaurant,index)=>{
                        const {RestaurantAddress,RestaurantName,location,_id}=restaurant;
                        return <RestaurantCard fetchMenu={fetchMenu} key={_id} id={_id} address={RestaurantAddress} name={RestaurantName} location={location}/>
                    })}
                </div>
            </div>                
        </div>
    )
}

export default HomeCustomerCustomer
