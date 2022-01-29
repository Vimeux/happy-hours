import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import DrinkListItems from './DrinkListItems'

function DrinkList ({ drinks }) {
  // visiblement lenght ne fonctionne pas directement sur un tableau d'objet, on utilise Object.key qui récupère les élément de l'objet et on lenght dessus
  if (!drinks || Object.keys(drinks).length < 1) {
    return (
      <h3>Aucune boisson répertorié sur ce bar</h3>
    )
  }
  return (
    <div>
      <TableContainer component={Paper} sx={{ m: 1.5 }}>
        <Table sx={{ minWidth: 150 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell align='right'>Type</TableCell>
              <TableCell align='right'>Prix</TableCell>
              <TableCell align='right'>Happy Prix</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drinks.map(drink => {
              return (
                <DrinkListItems key={drink._id} drink={drink} />
              )
            })}
            {/* {from.happyHours.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>{row.day}</TableCell>
                <TableCell align='right'>{row.start} h</TableCell>
                <TableCell align='right'>{row.end} h</TableCell>
              </TableRow>
            ))} */}
          </TableBody>
        </Table>
      </TableContainer>

    </div>
  )
}

export default DrinkList
