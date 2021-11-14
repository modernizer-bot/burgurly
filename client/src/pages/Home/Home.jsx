import React from 'react'
import './Home.scss'
import styled,{css} from 'styled-components'
import Dishes from '../../components/Dishes/Dishes'
import {useDispatch, useSelector} from 'react-redux';
import { setdishsection } from '../../redux/Home/home.actions'
import MenuCard from '../Settings/MenuCard/MenuCard';

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
    // const dishes=useSelector((state)=>state.dish.dish);
    const user=useSelector((state)=>state.auth?.user);
    return (
        <div className="home">
            <div className="home__section">
                <StyledItem section={currentSection} name="MainCourse" onClick={()=>dispatch(setdishsection("MainCourse"))}>Main Course</StyledItem>
                <StyledItem section={currentSection} name="sideDish" onClick={()=>dispatch(setdishsection("sideDish"))}>Side Dish</StyledItem>
                <StyledItem section={currentSection} name="soup" onClick={()=>dispatch(setdishsection("soup"))}>Soup</StyledItem>
                <StyledItem section={currentSection} name="drink" onClick={()=>dispatch(setdishsection("drink"))}>Drink</StyledItem>
                <StyledItem section={currentSection} name="appetizer" onClick={()=>dispatch(setdishsection("appetizer"))}>Appetizer</StyledItem>
                <StyledItem section={currentSection} name="dessert" onClick={()=>dispatch(setdishsection("dessert"))}>Dessert</StyledItem>
            </div>
            {user?.type==='customer' ? 
            <>
            <div className="home__heading heading-2">Choose Dishes</div>
            <div className="home__overflowfix">
                <div className="home__dishes">
                    {user && !!user[currentSection] && user[currentSection].dishes.map((dish,index)=>{
                        return <Dishes key={index} dish={dish} />
                    })}
                </div>
            </div>
            </>
            :
            <>
            <div className="home__heading heading-2">Avaialble Dishes</div>
            <div className="home__overflowfix">
                <div className={`${user?.type==='Partner' && 'home__dishes--partner'} home__dishes`}>
                    {user&&!!user[currentSection] && user[currentSection].map((dish,index)=>{
                        console.log(dish);
                        const {name,image,price,stock}=dish;
                        return <MenuCard key={index} title={name} src={image} price={price} stock={stock}/>
                    })}
                </div>
            </div>
            </>
            }

            
        </div>
    )
}

export default Home
