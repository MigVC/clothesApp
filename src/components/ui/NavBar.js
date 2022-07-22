import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark px-2 sticky-top'>
        <div className='container-fluid'>
            <Link 
                to="/"
                className='navbar-brand'    
            >
                Home
            </Link>
            
            {/* Boton del menu */}

            <button 
                className='navbar-toggler' 
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#menu"
                aria-controls="navbarSupportedContent"
                aria-expanded = "false"
                aria-label="Toggle navigation"
            >
            <span className='navbar-toggler-icon'></span>

            </button>

            <div className='collapse navbar-collapse' id = "menu">
                <ul className='navbar-nav me-auto'>
                    <li className='nav-item'>
                    <NavLink 
                        className="nav-link"
                        to="/Electronic"
                    >
                        Electronic
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink
                        className="nav-link" 
                        to="Jewelery"
                    >
                        Jewelery
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink 
                        className="nav-link"
                        to="Men"
                    >
                        Men's clothing
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink 
                        className="nav-link"
                        to="Women"
                    >
                        Women's clothing
                    </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
  )
}
