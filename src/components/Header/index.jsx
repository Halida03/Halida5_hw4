import React from 'react'
import '../Header/header.scss'
import user from '../../assets/user.png';

const Header = () => {
  return (
    <div className='header'>
        <h2>Movie App</h2>
        <img src={user} />
    </div>
  )
}

export default Header;