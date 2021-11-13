import './App.scss';
import Header from './components/Header/Header';
import Sidebar from './pages/Sidebar/Sidebar';
import Order from './pages/Order/Order.jsx';
import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from 'react';
import { fetchUser } from './redux/auth/auth.action';
import Home from './pages/Home/Home';
import { setCurrentPage } from './redux/currentpage/currentPage.action';
import { setdishsection } from './redux/Home/home.actions';
import Dashboard from './pages/Dashboard/Dashboard';
import CustomerLogin from './pages/Login/Customer/CustomerLogin';
import RestaurantLogin from './pages/Login/Restaurant/RestaurantLogin.jsx';
import { Route, Switch } from 'react-router';
import Settings from './pages/Settings/Settings';
function App() {
  const dispatch = useDispatch();
  const user=useSelector((state)=>state.auth?.user?.type);
  useEffect(() => {
    dispatch(fetchUser());
    if(user?.type==='Partner' && user.RestaurantName==='' && user.location===''){
      dispatch(setCurrentPage("Settings"));
    }
    dispatch(setCurrentPage("Home"));   
    dispatch(setdishsection("main course"));
    return () => {
      
    }
  }, [dispatch])

  const currentPage=useSelector((state)=>state.page.page);
  return (
    <div className="app">
      <Switch>
      <Route exact path='/' component={CustomerLogin}/>
      <Route exact path='/restaurant' component={RestaurantLogin}/>

      <Route exact path='/restaurant/partner'>
      {
        currentPage!=='Login' && <Sidebar/>
      }
      <div className="app__content">
      {currentPage==="Home" && 
          <>
          <Header page="Home"/>
          <Home/>
          </> 
    }
     {currentPage==="Dashboard" && 
       <>
       <Header page="Dashboard"/>
       <Dashboard/>
       </>
     }
     {currentPage==="Settings" && 
       <>
       <Header page="Settings"/>
       <Settings/>
       </>
     }
      </div>
      {currentPage==="Home" && <Order/>}
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
