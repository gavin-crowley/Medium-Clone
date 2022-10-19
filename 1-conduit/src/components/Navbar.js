import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState('');

  return {
    searchTerm,
    renderNavBar: (
      <>
        <nav className='navbar navbar-light'>
          <div className='container'>
            <Link to='/' className='navbar-brand'>
              conduit
            </Link>

            <input
              type='text'
              placeholder='Search here...'
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />

            <ul className='nav navbar-nav pull-xs-right'>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>
                  Home
                </Link>
              </li>

              <li className='nav-item'>
                <Link to='/create' className='nav-link'>
                  <i className='ion-compose' />
                  &nbsp;New Post
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </>
    ),
  }
}
