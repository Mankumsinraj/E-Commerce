import React , {useContext, useEffect}from 'react';
import "./App.css"
import {
  BrowserRouter,
  Routes,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
} from 'react-router-dom';
import Auth from './components/Auth';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Order from './Pages/Order';
import Favorites from './Pages/Favorites';
import Cartitem from './components/Cartitem';
import Sidebar from './components/Sidebar';

import { StoreContext } from './context/store';
import { Actions } from './context/action';


function App() {

  const { dispatch} = useContext(StoreContext)

  const isLoggedIn = localStorage.getItem("auth")

  useEffect(()=>{
    if(isLoggedIn === "1"){
      dispatch({type: Actions.LOGIN})
    }
  },[isLoggedIn])

 return(
      <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route element={<ProtectedRoute />} >
        {/* <Route path="/" element={<Auth />} /> */}
        <Route path="/" element={ <Home />} />
        {/* <Route path="/login" element={<Auth />} /> */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<Order />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/cartitem" element={<Cartitem />} />
        {/* Protected Routes */}
       
        </Route>
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
