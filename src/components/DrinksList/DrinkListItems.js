import { TableCell, TableRow } from '@mui/material'
import './DrinkList.css'

function DrinkListItems ({ drink }) {
  return (
    <TableRow>
      <TableCell component='th' scope='row'>{drink.name}</TableCell>
      <TableCell align='right'>{drink.drinkType}</TableCell>
      <TableCell align='right' className='drinkPrice'>{drink.price}</TableCell>
      <TableCell align='right'>{drink.happyPrice}</TableCell>
    </TableRow>
  )
}

export default DrinkListItems
