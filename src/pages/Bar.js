import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import Paper from '@mui/material/Paper'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { deleteBar } from '../services/api'

function Bar () {
  const { id } = useParams()
  const location = useLocation()
  const { from } = location.state
  const navigate = useNavigate()

  const handleDeleteBar = async () => {
    await deleteBar(id)
    navigate('/')
  }

  console.log(from)

  return (
    <div>
      <h1>{from.name}</h1>
      <p>{from.address}</p>
      <p>{from.phone}</p>
      <TableContainer component={Paper} sx={{ m: 1.5 }}>
        <Table sx={{ minWidth: 150 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>jour</TableCell>
              <TableCell align='right'>Ouverture</TableCell>
              <TableCell align='right'>Fermeture</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {from.schedules.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>{row.day}</TableCell>
                <TableCell align='right'>{row.start} h</TableCell>
                <TableCell align='right'>{row.end} h</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TableContainer component={Paper} sx={{ m: 1.5 }}>
        <Table sx={{ minWidth: 150 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>happy Hours</TableCell>
              <TableCell align='right'>Ouverture</TableCell>
              <TableCell align='right'>Fermeture</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {from.happyHours.map((row) => (
              <TableRow
                key={row._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>{row.day}</TableCell>
                <TableCell align='right'>{row.start} h</TableCell>
                <TableCell align='right'>{row.end} h</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button sx={{ m: 1.5 }} className='button' variant='contained' onClick={handleDeleteBar}>Supprimer le bar</Button>
    </div>
  )
}

export default Bar
