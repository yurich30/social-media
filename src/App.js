import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';



const App = (props) => {
  return (
    <div className='app-wrapper'>
        <HeaderContainer/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render = { () => <ProfileContainer 
            store={props.store}
          /> }/>
          <Route path='/dialogs' render = { () => <DialogsContainer 
            store={props.store}
          /> }/>
          <Route path='/users' render = { () => <UsersContainer 
            store={props.store}
          /> }/>
          <Route path='/login' render = { () => <LoginPage /> }/>
        </div>
    </div>
  );
}



export default App;
