import React from 'react';
import { NavLink } from 'react-router-dom'
export const Navbar: React.FC = () => {
   return (
      <nav>
         <div className="nav-wrapper light-green darken-2 px1">
            <a href="/" className="brand-logo">React+TS</a>
            <ul className="right hide-on-med-and-down">
               <li><NavLink to="/">Todo</NavLink></li>
               <li><NavLink to="/about">Information</NavLink></li>
            </ul>
         </div>
      </nav>
   )
}
