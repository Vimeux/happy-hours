import { Button } from '@mui/material'

function ProfileInfos ({ logout, profil }) {
  // const [profil, setProfil] = useState(null)

  return (
    <div>
      <p>{profil.firstName}</p>
      <p>{profil.lastName}</p>
      <p>{profil.email}</p>
      <p>{profil.phone}</p>
      <Button className='button' variant='contained' onClick={logout}>Se déconnecter</Button>
    </div>
  )
}

export default ProfileInfos
