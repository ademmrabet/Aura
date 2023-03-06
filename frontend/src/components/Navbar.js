import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'

function Navbar() {
  return (
    <nav>
        <div className='logo'>Jewls.</div>
        <ul>
            <li>Home</li>
            <li>Our Products</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>login</li>
            <li>Signup</li>
        </ul>
        <div className="search">
            <FontAwesomeIcon icon={solid('shopping-basket')} />
            <FontAwesomeIcon icon={solid('search')} />
        </div>
    </nav>
  )
}

export default Navbar