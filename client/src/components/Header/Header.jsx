import React,{useState,useEffect} from 'react'
import './Header.scss'
import moment from 'moment'
import {ReactComponent as Search} from '../../assets/search.svg'
import {useDispatch, useSelector} from 'react-redux'
import { SearchFood } from '../../redux/Home/home.actions'
import SearchItem from '../SearchItem/SearchItem'
// https://api.spoonacular.com/recipes/autocomplete
const Header = () => {
    const [inputdata,setinputdata]=useState('');
    const time= moment().format('dddd, DD MMMM YYYY');  
    const dispatch = useDispatch();
    useEffect(() => {
        const timer=setTimeout(() => {
            if(inputdata.length>0){
                dispatch(SearchFood(inputdata))
            }
        }, 500);
        return () => {
            clearTimeout(timer);
        }
    }, [inputdata,dispatch])

    const searchdata=useSelector((state)=>state.dish.search);
    return (
        <div className='header'>
            {/* <a href="/auth/google">Sign In With Google</a> */}
            <div className="header__left">
                <div className="header__left-title heading-1">Jaegar Resto</div>
                <div className="header__left-time">{time}</div>
            </div>
            <div className={`${inputdata && "header__inputContainer-flat"} header__inputContainer`}>
                <Search/>
                <input onChange={(e)=>setinputdata(e.target.value)} value={inputdata} placeholder='Search for food, coffee, etc'/>
                {!!searchdata.length && <div className="header__inputContainer-suggestions">
                    {searchdata.map((item,index)=>{
                        return <SearchItem key={index} item={item}/>
                    })}
                </div>}
            </div>
        </div>
    )
}

export default Header
