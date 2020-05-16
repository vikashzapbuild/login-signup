import React from 'react';
import {BrowserRouter as Router ,Route,Link,Switch} from "react-router-dom";
import './App.css';
import Login from './Login';
import Signup from './Signup';
import StudentSignup from './StudentSignup';
import Loggedin from './Loggedin';
import StudentAccount from './StudentAccount';


function App() {
  return (
    <div className="App">
<Router> 
  <div>
     
    </div>
    <div>
      <ul>
        < Link to="/"></Link>
      </ul>
        <Switch>
            <Route exact path ='/' component = {Login}/>
            <Route exact path ='/Signup' component = {Signup}/>
            <Route exact path ='/StudentSignup' component = {StudentSignup}/>
            <Route exact path ='/Login' component = {Login}/>
            <Route exact path ='/Loggedin' component = {Loggedin}/>
            <Route exact path ='/StudentAccount' component = {StudentAccount}/>

        </Switch>
    </div>
    </Router>      
    </div>
  );
}

export default App;
