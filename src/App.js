import React, {Component} from "react";
import {BrowserRouter,Route} from 'react-router-dom';
import AddToFavorite from "./components/AddToFavorite";
//import CreatePost from "./components/AddToFavorite";
import EditPost from "./components/EditPost";
//import FavoriteList from "./components/FavoriteList";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SearchCustomer from "./components/SearchCustomer";
import Navbar from "./components/Navbar";




export default class App extends Component {
  render() {
    return(


      <div style={{ 
        backgroundImage: `url("https://images.pexels.com/photos/360622/pexels-photo-360622.jpeg?cs=srgb&dl=pexels-pietro-jeng-360622.jpg&fm=jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
      }}>
     
      <BrowserRouter>

      <div className="container">

        <Navbar/>
        <Route path = "/" exact component={Home}></Route>
        <Route path = "/add" component={AddToFavorite}></Route>
        <Route path = "/fav/save" component={EditPost}></Route>
        <Route path = "/search" component={SearchCustomer}></Route>

  </div>
  <br/>
  <Footer/>


      </BrowserRouter>
     </div> 
    )

  }
}