import { useState } from 'react'
import TextInput from '../TextInput/TextInput'

function RegisterForm ({ submit, error }) {
  // stockage des données du formulaires
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: ''
  })

  // gestion de la saisie du formaulaire
  const handleChange = (event) => {
    setFormData({
      ...formData, // "..." = on garde ce que l'on à et on rajoute
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Inscription</h2>
      <div>
        <TextInput
          name='firstName'
          label='Prénom: '
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextInput
          name='lastName'
          label='Nom: '
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextInput
          type='email'
          name='email'
          label='Email: '
          value={formData.email}
          onChange={handleChange}
        />
        <TextInput
          type='password'
          name='password'
          label='Mot de passe: '
          value={formData.password}
          onChange={handleChange}
        />
        <TextInput
          name='phone'
          label='Téléphone: '
          value={formData.phone}
          onChange={handleChange}
        />
      </div>
      <input type='submit' value="S'inscrire" />
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

export default RegisterForm
