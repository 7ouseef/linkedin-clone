import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Widgets from './Widgets';

import Feed from './Feed';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  useEffect(()=>{
    auth.onAuthStateChanged( userAuth => {
      if(userAuth){
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
        })
        );
      }
      else{
        dispatch(logout());
      }
    }) // eslint-disable-next-line
  },[])

  return (
    <div className="App">
      <Header />
      { !user ? (
        <Login />
      ) : (
        <div className="App_body">
        <Sidebar />
        <Feed />
        <Widgets />
        </div>
      ) }
    </div>
  );
}

export default App;
