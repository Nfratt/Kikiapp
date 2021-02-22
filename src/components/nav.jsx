import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div className='navbar'>
      <Link className='navbar-brand' to='/'>
        <img className='logo' src='../assets/images/kikilogo1.png' alt='logo'></img>
      </Link>
      <ul>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://medium.com/@kikiapp'
          >
            <p>Visit our blog</p>
          </a>
        </li>
        <li>
          <Link to='/aboutUs'>
            <p>About us</p>
          </Link>
        </li>
        <li>
          <Link to='/MailinglistForm'>
            <p>Join Our Mailing List</p></Link>
        </li>
      </ul>
    </div>
  )
}
