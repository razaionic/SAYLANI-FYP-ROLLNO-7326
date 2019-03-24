import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import ItemModal from './components/ItemModal';
import {Container} from 'reactstrap';
import {ToastContainer} from 'react-toastify';
import { Provider } from 'react-redux';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import ItemTable from './components/ItemTable';
import footer from './components/Footer/footer';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
       <AppNavbar />
       <Container>
         <ToastContainer autoClose={2000}/>
         <ItemTable/>
         </Container>
         <footer />
      </div>
      </Provider>
    );
  }
}

export default App;
