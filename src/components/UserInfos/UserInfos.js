import { Button } from '@mui/material'

function UserInfos ({ logout }) {
  return (
    <div>
      <h2>Vous êtes connecté !</h2>
      <Button sx={{ m: 1.5 }} className='button' variant='contained' onClick={logout}>Se déconnecter</Button>
    </div>
  )
}

export default UserInfos
