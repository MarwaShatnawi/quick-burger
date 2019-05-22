import React,{Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from './Home/Home';
import  './App.css';
import Header from './Header/Header';
import AddItem from './AddItem/AddItem';
class App extends Component {
  
  render(){
    return(
      <Router>
        <Header />
        
        <Route exact path="/" component={Home} />
        <Route path="/item-add" component={AddItem} />
      </Router>
    );
  }

}
export default App;


