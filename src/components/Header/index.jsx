import React from 'react'
import '../Header/header.scss'
import user from '../../assets/user.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <Link to="/">
        <div>Movie App</div>
      </Link>
        <img src={user} />
    </div>
  )
}

export default Header;