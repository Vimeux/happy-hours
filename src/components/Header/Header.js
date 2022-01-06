import React from 'react'
import { Button } from '@mui/material'
import {
  NavLink
} from 'react-router-dom'

import './Header.css'

function Header () {
  return (
    <>
      <nav>
        <ul className='menu-list'>
          <li>
            <Button>
              <NavLink exact to='/' activeClassName='isActive' className='menu-link'>Accueil</NavLink>
            </Button>
          </li>
          <li>
            <Button>
              <NavLink to='/bars' activeClassName='isActive' className='menu-link'>Bars</NavLink>
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
