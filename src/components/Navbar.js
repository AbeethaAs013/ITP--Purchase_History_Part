import React, { useState, Fragment } from 'react'
//import { FaBars } from 'react-icons/fa';
import {
Nav,
NavContainer,
NavLogo,
NavItem,
NavLinks,
NavMenu,
MobileIcon,
} from './NavbarStyles';
import './App.css';
const Navbar = () => {
const [colorChange, setColorchange] = useState(false);
const changeNavbarColor = () =>{
	if(window.scrollY >= 80){
	setColorchange(true);
	}
	else{
	setColorchange(false);
	}
};
window.addEventListener('scroll', changeNavbarColor);
return (
	<Fragment>
		<Nav style={{color:"red"}} className={colorChange ? 'navbar colorChange' : 'navbar'}>
		<NavContainer>
			<NavLogo href="/">REMEDI</NavLogo>
			<MobileIcon>
			
			</MobileIcon>
			<NavMenu>
				<NavItem>
				<NavLinks href="/">Home</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="/search">Admin Search</NavLinks>
				</NavItem>
				<NavItem>
				<NavLinks href="/add">Customer Favorites</NavLinks>
				</NavItem>
				

        <a href="/search">
  <img src="https://i.ibb.co/kqwb4BQ/logo.jpg" width="50" height="40" alt=""/>&nbsp;&nbsp;
</a>

			</NavMenu>
		</NavContainer>
		</Nav>
	</Fragment>
	)
}

export default Navbar;






































































































































































































































/*import React, {Children, Component} from "react";

export default class Navbar extends Component {
    render(){
        return(

          
        <nav class="navbar navbar-expand-lg navbar-light bg-light"> 

        
          <a className="navbar-brand"href="#!">&nbsp;REMEDI</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/search">Search</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/add">Favorite</a>
      </li>
      <li class="nav-item">
        <a className="nav-link disabled" href="#!">Disabled</a>

        


      </li>
    </ul>
  </div>
  <a href="/search">
  <img src="https://i.ibb.co/kqwb4BQ/logo.jpg" width="50" height="40" alt=""/>&nbsp;&nbsp;
  </a>
</nav>


            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        )
    }
}*/