import React from 'react'
import { NavLink, Route } from "react-router-dom"

function Header() {
  return (
    <div >
        <img className='headerPic' src = "https://thumbs.dreamstime.com/b/donation-charity-logo-label-hand-holding-heart-icon-vector-symbol-isolated-white-background-97894491.jpg"></img>
        <h1 className='headerText'>One Person's Trash is Another's Treasure</h1>
       <div className="header">
        <Route >
        <NavLink  exact to="/signup">Sign Up | </NavLink>
        <NavLink  exact to="/login">Login | </NavLink>
        <NavLink  exact to='/items'> Items </NavLink>
        <NavLink  exact to="/">Main</NavLink>
        </Route>
        </div>
    </div>
  )
}

export default Header