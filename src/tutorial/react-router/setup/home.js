import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './navbar.css'

class Home extends Component {
  render() {
    return (
      <div className='start'>
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
        <div className='textt'>
          <h1>WELCOME TO ERP SYSTEM</h1>
        </div>
        <div className='text2'>
          <p>
            <em>An Efficicent Way to Manage your Resources</em>
          </p>
        </div>
      </div>
    )
  }
}
export default Home
