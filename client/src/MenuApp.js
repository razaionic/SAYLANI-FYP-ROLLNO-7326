import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import MenuCard from './components/MenuCard';
import {Container} from 'reactstrap';
import {ToastContainer} from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Main from './components/Main';

class MenuApp extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="MenuApp">
       <AppNavbar />
       <Container>
       
           <MenuCard />
           <ToastContainer autoClose={2000}/>
         </Container>
       
      </div>
      </Provider>
    );
  }
}

export default MenuApp;
