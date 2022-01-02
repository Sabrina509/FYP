import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './navbar.css'
import './sales.css'
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
        <div className='enter'>
          <div className='split'>
            <div className='leftSide'>
              <h1>Enter Sales</h1>
              <form className='form'>
                <div>
                  <label className='label' htmlFor='Name'>
                    {' '}
                    Name
                  </label>
                  <input
                    className='inp'
                    type='text'
                    id='productName'
                    name='productName'
                  ></input>
                </div>
                <div>
                  <label className='label1' htmlFor='Quantity'>
                    {' '}
                    Quantity
                  </label>
                  <input
                    className='inp'
                    type='text'
                    id='quantity'
                    name='quantity'
                  ></input>
                </div>
                <div>
                  <button className='AddBtn' type='submit'>
                    {' '}
                    <span>ADD</span>{' '}
                  </button>
                </div>
              </form>
            </div>
            <div className='rightSide'>
              <div className='App'>
                <table>
                  <tr>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                  <tr>
                    <td>Burger</td>
                    <td>1</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>Ice cream</td>
                    <td>1</td>
                    <td>100</td>
                  </tr>
                  <tr>
                    <td>Loaded Fries</td>
                    <td>1</td>
                    <td>350</td>
                  </tr>
                  <tr className='total'>
                    <td>Total</td>
                    <td></td>
                    <td>750</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Sales
