import React from 'react';
import {Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';



const App = () => {
  return (
    <div className='app-wrapper'>
        <Header/>
        <Navbar/>
        <div className='app-wrapper-content'>
			<Route path='/' exact render={() => (
				<Profile/>
				)}/>
			<Route path='/dialogs' component={Dialogs}/>
        </div>
    </div>
  );
}



export default App;
