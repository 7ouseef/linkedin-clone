import React from 'react'
import './Sidebar.css'
import { Avatar } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar_recentItem">
            <span className="hashtag">#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className='sidebar'>

        <div className="sidebar_top">
            <img src="https://images.unsplash.com/photo-1689702095123-a20606125fd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80" alt="" />
            <Avatar src={user.photoURL} className='sidebar_avatar' >{user.email[0]}</ Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

        <div className="sidebar_stats">
            <div className="sidebar_stat">
                <p>Who viewed you</p>
                <p className='sidebar_statNumber'>2,340</p>
            </div>
            <div className="sidebar_stat">
                <p>Views on posts</p>
                <p className='sidebar_statNumber'>1,453</p>
            </div>
        </div>

        <div className="sidebar_bottom">
            <p>Recent</p>
            {recentItem('fast')}
            {recentItem('reactjs')}
            {recentItem('css')}
            {recentItem('html')}
            {recentItem('javascript')}
        </div>
    </div>
  )
}

export default Sidebar