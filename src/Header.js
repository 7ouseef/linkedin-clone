import React from 'react'

import logo from './img/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';

import './Header.css';
import HeaderOptions from './HeaderOptions';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { auth } from './firebase';

function Header() {

  const dispatch = useDispatch();
  const logoutFromApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
        
        <div className='header_left'>
          <img src={logo} alt="" />
          <div className='header_search'>
            <SearchIcon />
            <input type='text' placeholder='Search'></input>
          </div>
        </div>
        <div className='header_right'>
          <HeaderOptions title='Home' Icon={HomeIcon}/>
          <HeaderOptions title='My Network' Icon={SupervisorAccountIcon} />
          <HeaderOptions title='Jobs' Icon={BusinessCenterIcon}/>
          <HeaderOptions title='Messaging' Icon={ChatIcon} />
          <HeaderOptions title='Notifications' Icon={NotificationsIcon} />
          <HeaderOptions title='Me' avatar={true} onClick={logoutFromApp} />
        </div>

    </div>
  )
}

export default Header