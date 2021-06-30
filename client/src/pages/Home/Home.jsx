import React from 'react'
import './Home.scss'
import styled,{css} from 'styled-components'
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
    ${props=>props.click && PseudoClass} 
`
const Home = () => {
    return (
        <div className="home">
            <div className="home__section">
                <StyledItem click={true}>Hot Dishes</StyledItem>
                <StyledItem>Cold Dishes</StyledItem>
                <StyledItem>Soup</StyledItem>
                <StyledItem>Grill</StyledItem>
                <StyledItem>Appetizer</StyledItem>
                <StyledItem>Dessert</StyledItem>
            </div>
        </div>
    )
}

export default Home
