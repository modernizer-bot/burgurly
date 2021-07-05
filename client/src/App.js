import './App.scss';
// import axios from 'axios';
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
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(setCurrentPage("Home"));
    dispatch(setdishsection("main course"));
    return () => {
      
    }
  }, [dispatch])

  const currentPage=useSelector((state)=>state.page.page);
  return (
    <div className="app">
      <Sidebar/>
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
      </div>
      {currentPage==="Home" && <Order/>}
    </div>
  );
}

export default App;
