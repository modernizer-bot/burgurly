import React from 'react'
import './Home.scss'
import styled,{css} from 'styled-components'
import Dishes from '../../components/Dishes/Dishes'
import {useDispatch, useSelector} from 'react-redux';
import { setdishsection } from '../../redux/Home/home.actions'

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
const Home = () => {
    const dispatch = useDispatch();
    const currentSection=useSelector((state)=>state.dish.dishsection);
    const dishes=useSelector((state)=>state.dish.dish);
    return (
        <div className="home">
            <div className="home__section">
                <StyledItem section={currentSection} name="main course" onClick={()=>dispatch(setdishsection("main course"))}>Main Course</StyledItem>
                <StyledItem section={currentSection} name="side dish" onClick={()=>dispatch(setdishsection("side dish"))}>Side Dish</StyledItem>
                <StyledItem section={currentSection} name="soup" onClick={()=>dispatch(setdishsection("soup"))}>Soup</StyledItem>
                <StyledItem section={currentSection} name="drink" onClick={()=>dispatch(setdishsection("drink"))}>Drink</StyledItem>
                <StyledItem section={currentSection} name="appetizer" onClick={()=>dispatch(setdishsection("appetizer"))}>Appetizer</StyledItem>
                <StyledItem section={currentSection} name="dessert" onClick={()=>dispatch(setdishsection("dessert"))}>Dessert</StyledItem>
            </div>
            <div className="home__heading heading-2">Choose Dishes</div>
            <div className="home__overflowfix">
                <div className="home__dishes">
                    {!!dishes && dishes.map((dish,index)=>{
                        return <Dishes key={index} dish={dish} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
