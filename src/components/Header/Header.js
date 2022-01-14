import React from 'react'
import { Button } from '@mui/material'
import {
  Link
} from 'react-router-dom'

import './Header.css'

function Header () {
  return (
    <>
      <nav>
        <ul className='menu-list'>
          <li>
            <Button>
              <Link exact='true' to='/' className='menu-link'>Accueil</Link>
            </Button>
          </li>
          <li>
            <Button>
              <Link to='/bars' className='menu-link'>Bars</Link>
            </Button>
          </li>
          <li>
            <Button>
              <Link to='/addBar' className='menu-link'>Ajouter un bar</Link>
            </Button>
          </li>
          <li>
            <Button>
              <Link to='/auth' className='menu-link'>Connexion</Link>
            </Button>
          </li>
          <li>
            <Button>
              <Link to='/profile' className='menu-link'>Profil</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Header
