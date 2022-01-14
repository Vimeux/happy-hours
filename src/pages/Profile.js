import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileInfos from '../components/ProfileInfos/ProfileInfos'
import { actionTypes, useAuth } from '../contexts/AuthContext'

function Profile () {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const { dispatch, state: { user } } = useAuth()
  const navigate = useNavigate()

  useEffect(async () => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [user])

  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
    navigate('/auth')
  }

  return (
    <div>
      {
        isLoggedIn
          ? <ProfileInfos
              logout={logout}
              profil={user}
            />
          : (
            <h1>Vous n'êtes pas connecté</h1>
            )
      }
    </div>
  )
}

export default Profile
