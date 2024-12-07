import React, {useContext} from 'react';
import { Outlet } from 'react-router-dom';
import {StoreContext} from "../context/store"
import Auth from './Auth';

function ProtectedRoute() {

  const {state} = useContext(StoreContext)

  if(!state.isLoggedIn){
    return <Auth />
  }

  return (
    <Outlet />
   
  );
}

export default ProtectedRoute;

