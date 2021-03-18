import React from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



const App = (props) => {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
          <Route path='/profile' render = { () => <Profile 
            state={props.state.profilePage} 
            dispatch={props.dispatch}
          /> }/>
          <Route path='/dialogs' render = { () => <Dialogs 
            dispatch={props.dispatch}
            state={props.state.messagesPage}/> }/>
        </div>
    </div>
  );
}



export default App;
