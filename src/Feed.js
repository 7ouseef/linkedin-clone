import React,{useEffect, useState} from 'react'
import './Feed.css'
import Posts from './Posts';
import {db} from './firebase'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import FlipMove from 'react-flip-move';

import CreateIcon from '@material-ui/icons/Create';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import InputOptions from './InputOptions';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function Feed() {
  const [input,setInput] = useState("")
  const [posts,setPosts] = useState([]);
  const user = useSelector(selectUser);

  useEffect( () =>  (
    db.collection('posts').orderBy('timestamp','desc').onSnapshot( snapshot => (
      setPosts( snapshot.docs.map( doc => ( {
        id: doc.id,
        data: doc.data()
      } ) ) )
    ) )
  ),[])

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: user.displayName,
      des: user.email,
      msg: input,
      pic: user.photoURL || '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
    setInput('');
  }

  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon />
                <form >
                  <input value={input} onChange={ e => setInput(e.target.value)} placeholder='Share a post' type="text" />
                  <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
              <InputOptions Icon={ImageIcon} title='Photo' color='#378fe9' />
              <InputOptions Icon={SubscriptionsIcon} title='Video' color='#5f9b41' />
              <InputOptions Icon={EventNoteIcon} title='Event' color='#c37d16' />
              <InputOptions Icon={CalendarViewDayIcon} title='Write article' color='#e16745' />
            </div>
        </div>

        {/* Posts */}
        <FlipMove>
        {posts.map( ({id,data: { name,msg, des ,pic }}) =>(
          <Posts key={id} name={name} des={des} msg={msg} pic={pic || name[0]} />
        ) )}
        </FlipMove>
    </div>
  )
}

export default Feed