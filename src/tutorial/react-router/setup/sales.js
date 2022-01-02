import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './navbar.css'
import { Link } from 'react-router-dom'

class Sales extends Component {
  render() {
    return (
      <div>
        <nav className='NavbarItems'>
          <h1 className='navbar-logo'>Cafe Aylanto</h1>

          <ul className='nav-menu'>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className='nav-links' href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <button className='logBtn'>
            <span>Logout</span>
          </button>
        </nav>
      </div>
    )
  }
}
export default Sales
