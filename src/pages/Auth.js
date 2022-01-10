import { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import UserInfos from '../components/UserInfos/UserInfos'
import { actionTypes, loginUser, useAuth } from '../contexts/AuthContext'
import { getProfile } from '../services/api'

function Auth () {
  // initialisation des état locaux
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [profil, setProfil] = useState(null)
  const { dispatch, state: { error, user, loading } } = useAuth()

  // on vérifie à chaque fois si l'utilisatuer est connecté ou non
  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }, [user])

  // Soumission du formulaire
  const handleSubmit = async (infos) => {
    // let data
    if (isRegister) {
      // Appel de la fonction d'inscription
      // data = await register(infos)
    } else {
      // Appel de la fonction de login
      await loginUser(infos, dispatch)
    }
  }

  // charge le profile de l'utilisateur
  const handleLoadProfile = async () => {
    const profile = await getProfile()
    setProfil(profile)
  }

  // déconnecte l'utilisateur
  const logout = () => {
    dispatch({
      type: actionTypes.LOGOUT
    })
  }

  return (
    <div>
      {
        isLoggedIn
          ? <UserInfos
              logout={logout}
            />
          : (
            <div>
              <LoginForm
                submit={handleSubmit}
                error={error}
              />
            </div>
            )
      }
      <button onClick={handleLoadProfile}>Load Profile</button>
      <p>{profil && JSON.stringify(profil)}</p>
    </div>
  )
}

export default Auth
