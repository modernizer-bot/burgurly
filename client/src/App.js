import './App.scss';
// import axios from 'axios';
import Header from './components/Header/Header';
import Sidebar from './pages/Sidebar/Sidebar';
import Order from './pages/Order/Order.jsx';
import {useDispatch} from 'react-redux'
import { useEffect } from 'react';
import { fetchUser } from './redux/auth/auth.action';
import Home from './pages/Home/Home';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    return () => {
      
    }
  }, [dispatch])
  // var options = {
  //   method: 'GET',
  //   url: 'https://api.spoonacular.com/food/menuItems/search',
  //   params: {
  //     query: 'burger',
  //     number: '1',
  //     apiKey:'5c2f750887994ff6949f5473bc20890e'
  //   },
  // };
  // axios.request(options).then(function (response) {
  //   console.log(response.data);
  // }).catch(function (error) {
  //   console.error(error);
  // });
  
  return (
    <div className="app">
      <Sidebar/>
      <div className="app__content">
        <Header/>
        <Home/>
      </div>
      <Order/>
    </div>
  );
}

export default App;
