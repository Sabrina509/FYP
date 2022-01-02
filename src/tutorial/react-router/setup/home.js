import React, { Component } from 'react'
import { MenuItems } from './MenuItems'
import './navbar.css'

class Home extends Component {
  render() {
    return (
      <div className='start'>
        <nav className='NavbarItems'>
          <h1 className='navbar-logo'>Enterprise Resource Planning</h1>

          <ul className='nav-menu'>
            {MenuItems.map((item, index) => {
              return (
                <li key={index}>
                  <a className={MenuItems.cName} href={item.url}>
                    {item.title}
                  </a>
                </li>
              )
            })}
          </ul>
          <button className='logBtn'>Logout</button>
        </nav>
        <div className='row'>
          <div className='bg'></div>

          <div className='para'>
            <h1>OUR STORY</h1>
            <p>
              The Pizza Hut story begins in May 1958. Dan and Frank Carney
              opened their 550-square foot pizza restaurant in Wichita, Kansas.
              Dan and Frank, with friends Richard Beemer and John Bender, made
              the pizza themselves. Frank rolled the dough with a rolling pin.
              Richard tossed the dough in the air from the pie tin. Dan filled
              the unbaked crust with sauce. John flipped the pie from the tin
              during the baking process. Dan Carney recalled, "The people were
              enchanted with the product, watching us tossing the dough over our
              heads. They were really enjoying themselves" The Carneys created
              an innovative, high quality, engaging, informal eating experience
              in a friendly neighborhood restaurant. Pizza Hut became a popular
              place with the teenage and college crowd.
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default Home
