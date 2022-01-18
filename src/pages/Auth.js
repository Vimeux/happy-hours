import { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm/LoginForm'
import RegisterForm from '../components/RegisterForm/RegisterForm'
import UserInfos from '../components/UserInfos/UserInfos'
import { actionTypes, loginUser, useAuth } from '../contexts/AuthContext'
import { getProfile, register } from '../services/api'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

function Auth () {
  // initialisation des état locaux
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isRegister, setIsRegister] = useState(false)
  const [profil, setProfil] = useState(null)
  const { dispatch, state: { error, user } } = useAuth()
  const navigate = useNavigate()

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
    if (isRegister) {
      // Appel de la fonction d'inscription
      await register(infos)
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
    navigate('/auth')
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
              {
                isRegister
                  ? <RegisterForm
                      submit={handleSubmit}
                      error={error}
                    />
                  : <LoginForm
                      submit={handleSubmit}
                      error={error}
                    />
              }
              <a href='#' onClick={() => setIsRegister(!isRegister)} className='register'>
                {isRegister ? 'Se connecter' : "S'inscrire"}
              </a>
            </div>
            )
      }
      <Button sx={{ m: 1.5 }} className='button' variant='contained' onClick={handleLoadProfile}>Load Profile</Button>
      <p>{profil && JSON.stringify(profil)}</p>
    </div>
  )
}

export default Auth
