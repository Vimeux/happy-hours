import React, { useState } from 'react'
import { Box, Divider, Drawer, IconButton, List, ListItem, ListItemButton, Stack } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import {
  Link
} from 'react-router-dom'

import './Header.css'
import logo from '../../logoBeer.png'

function Header () {
  const [menu, setMenu] = useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setMenu(open)
  }

  const menuList = () => (
    <Box
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Stack
        direction='row'
        justifyContent='flex-end'
        className='menu-close'
      >
        <IconButton aria-label='menu' onClick={toggleDrawer(false)}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Divider />
      <List>
        <ListItem>
          <ListItemButton>
            <Link exact='true' to='/' className='menu-link'>Accueil</Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to='/addBar' className='menu-link'>Ajouter un bar</Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to='/auth' className='menu-link'>Connexion</Link>
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <Link to='/profile' className='menu-link'>Profil</Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div className='menu'>
      <Link exact='true' to='/' className='menu-link'>
        <Stack
          direction='row'
          alignItems='center'
          spacing={2}
        >
          <img src={logo} className='logo' />
          <h4>Happy Pinte</h4>
        </Stack>
      </Link>
      <IconButton aria-label='menu' onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor='right'
        open={menu}
        onClose={toggleDrawer(false)}
      >
        {menuList()}
      </Drawer>
    </div>
  )
}

export default Header
