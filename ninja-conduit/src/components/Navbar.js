import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    // <nav className='navbar'>
    //   <h1>The Dojo Blog</h1>
    //   <div className='links'>
    //     <Link to='/'>Home</Link>
    //     <Link
    //       to='/create'
    //       style={{
    //         color: 'white',
    //         backgroundColor: '#f1356d',
    //         borderRadius: '8px',
    //       }}
    //     >
    //       New Blog
    //     </Link>
    //   </div>
    // </nav>
    <>
      <nav className='navbar navbar-light'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            {/* {appName.toLowerCase()} */}
            conduit
          </Link>

          {/* {isAuthenticated ? <LoggedInNavbar /> : <LoggedOutNavbar />} */}
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
  );
}
