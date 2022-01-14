import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useState } from 'react'
import TextInput from '../TextInput/TextInput'

function AddBarForm ({ submit }) {
  // stockage des données du formulaires
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    schedules: [
      {
        day: '',
        start: null,
        end: null
      }
    ]
  })
  const day = ['monday']
  const [age, setAge] = useState('')

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
    setAge(event.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un Bar</h2>
      <div>
        <TextInput
          name='name'
          label='Nom'
          value={formData.name}
          onChange={handleChange}
        />
        <TextInput
          name='address'
          label='Adresse'
          value={formData.address}
          onChange={handleChange}
        />
        <TextInput
          type='tel'
          name='phone'
          label='Téléphone'
          value={formData.phone}
          onChange={handleChange}
        />
        {formData.schedules.map((element, index) => (
          <div key={index}>
            <FormControl>
              <InputLabel id='simple-select-label'>Age</InputLabel>
              <Select
                labelId='simple-select-label'
                id='simple-select'
                value={age}
                label='Age'
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
        ))}
      </div>
      <input type='submit' value='Ajouter' />
    </form>
  )

  // const [formValues, setFormValues] = useState([{ name: '', email: '' }])

  // const handleChange = (i, e) => {
  //   const newFormValues = [...formValues]
  //   newFormValues[i][e.target.name] = e.target.value
  //   setFormValues(newFormValues)
  // }

  // const addFormFields = () => {
  //   if (formValues.length < 5) {
  //     setFormValues([...formValues, { name: '', email: '' }])
  //   } else {
  //     alert(`limite atteinte ${JSON.stringify(formValues)}`)
  //   }
  // }

  // const removeFormFields = (i) => {
  //   const newFormValues = [...formValues]
  //   newFormValues.splice(i, 1)
  //   setFormValues(newFormValues)
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault()
  //   alert(JSON.stringify(formValues))
  // }

  // return (
  //   <form onSubmit={handleSubmit}>
  //     {formValues.slice(0, 5).map((element, index) => (
  //       <div className='form-inline' key={index}>
  //         <label>Name</label>
  //         <input type='text' name='name' value={element.name || ''} onChange={e => handleChange(index, e)} />
  //         <label>Email</label>
  //         <input type='text' name='email' value={element.email || ''} onChange={e => handleChange(index, e)} />
  //         {
  //               index
  //                 ? <button type='button' className='button remove' onClick={() => removeFormFields(index)}>Remove</button>
  //                 : null
  //             }
  //       </div>
  //     ))}
  //     <div className='button-section'>
  //       {
  //         formValues.length < 5
  //           ? <button className='button add' type='button' onClick={() => addFormFields()}>Add</button>
  //           : ''
  //       }
  //       <button className='button submit' type='submit'>Submit</button>
  //     </div>
  //   </form>
  // )
}

export default AddBarForm
