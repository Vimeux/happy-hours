import { Button } from '@mui/material'
import { useState } from 'react'
import TextInput from '../TextInput/TextInput'

function LoginForm ({ submit, error }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    // anullation du comportement par défault du navigateur
    e.preventDefault()
    submit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Connexion</h2>
      <TextInput
        type='email'
        name='email'
        label='email :'
        value={formData.email}
        onChange={handleChange}
      />
      <TextInput
        type='password'
        name='password'
        label='Mot de passe :'
        value={formData.password}
        onChange={handleChange}
      />
      <Button className='button' variant='contained' type='submit' value='Se Connecter'>Se Connecter</Button>
      {
        error &&
        (
          <div>
            <h4>{JSON.stringify(error)}</h4>
          </div>
        )
      }
    </form>
  )
}

export default LoginForm
