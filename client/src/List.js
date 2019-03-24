import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';
import { Provider } from 'react-redux';
import {ToastContainer} from 'react-toastify';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ShoppingList from './components/ShoppingList';

class List extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <AppNavbar />
       <Container>
         <ShoppingList/>
         <ToastContainer autoClose={2000}/>
         <ItemModal/>
         </Container>
      </div>
      </Provider>
    );
  }
}

export default List;
