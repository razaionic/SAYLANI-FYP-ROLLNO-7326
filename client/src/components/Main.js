import React from 'react';
import {Switch, Route} from 'react-router-dom';
import App from '../App';
import MenuApp from '../MenuApp';
import List from '../List'



const Main = () => {
   return ( <main>
        <Switch>
        <Route  path="/" exact component={MenuApp} />
            <Route path="/kitchen" component={App} />
            <Route path="/predict" component={List} />
        </Switch>
        </main>)
}            

export default Main;