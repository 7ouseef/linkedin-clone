import React, { useState } from 'react'
import { auth } from './firebase';
import './Login.css'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';

function Login() {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [pic,setPic] = useState('');
    const dispatch = useDispatch();

    const loginToApp = (e) => {
      e.preventDefault();

      auth.signInWithEmailAndPassword(email,password)
      .then( (userAuth) =>{ dispatch(
        login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: userAuth.user.displayName,
          photoURL: userAuth.user.photoURL
        })
      )}).catch(error => alert(error));

    }

    const register = () => {
      if(!name){
        alert("Please enter a fullname");
      }
      auth
        .createUserWithEmailAndPassword(email,password)
        .then( userAuth => {
            userAuth.user.updateProfile({
            displayName: name,
            photoURL: pic
          })
          .then( ()  => {
            dispatch(login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: pic
            }))
          } )
        }).catch(error => alert(error));
    }

  return (
    <div className='login'>
        <img src="https://www.edigitalagency.com.au/wp-content/uploads/Linkedin-logo-png.png" alt="" />
        <form>
            <input type="text" 
            value={name} onChange={ e => setName(e.target.value)}
            placeholder='Full name (Required if registering)'/>

            <input type="email"
            value={email} onChange={ e => setEmail(e.target.value)} 
            placeholder='Email'/>

            <input type="password" 
            value={password} onChange={ e => setPassword(e.target.value)}
            placeholder='Password'/>

            <input type="text" 
            value={pic} onChange={ e => setPic(e.target.value)}
            placeholder='Profile picture url (optional)'/>
            <button type='submit' onClick={loginToApp} >Sign in</button>
        </form>
        <p>Not a member? <span className="login_register" onClick={register}>Register now</span></p>
    </div>
  )
}

export default Login