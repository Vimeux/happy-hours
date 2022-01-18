import { Link } from 'react-router-dom'
import React from 'react'
import { Card, CardActionArea, CardContent, Typography } from '@mui/material'

import './BarList.css'

function BarsListItem ({ bar }) {
  // liste les éléments que l'on veut affché pour un bar
  return (
    <Link
      to={`/bar/${bar._id}`}
      state={{ from: bar }}
      className='card'
    >
      <Card sx={{ width: 345 }} elevation={4}>
        <CardActionArea>
          <CardContent className='card-content'>
            <Typography gutterBottom variant='h4' component='h2'>
              {bar.name}
            </Typography>
            <Typography variant='subtitle1'>
              - {bar.address}
            </Typography>
            <Typography variant='subtitle1'>
              - {bar.phone}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}

export default BarsListItem
