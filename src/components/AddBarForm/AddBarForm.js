import { Button } from '@mui/material'

import { useState } from 'react'
import SelectField from '../SelectInput/SelectInput'
import TextInput from '../TextInput/TextInput'

function AddBarForm ({ submit }) {
  // stockage des données du formulaires
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  })
  const [schedules, setSchedules] = useState([
    {
      day: ''
    }
  ])
  // const [age, setAge] = useState()

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleChangeSchedules = (i, e) => {
    // slice sert de dupliquer le tableau sinon javascript réutilise l'objet en mémoire et ne refresh pas la data
    const newSchedules = schedules.slice()
    const element = { day: e.target.value }
    newSchedules[i] = element
    setSchedules(newSchedules)
  }

  const addFormFields = () => {
    if (schedules.length < 5) {
      setSchedules([...schedules, { day: '' }])
    } else {
      window.alert(`limite atteinte ${JSON.stringify(schedules)}`)
    }
  }

  const removeFormFields = (i) => {
    const newSchedules = [...schedules]
    newSchedules.splice(i, 1)
    // console.log(newSchedules)
    setSchedules(newSchedules)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { ...formData, schedules: schedules }
    // console.log(data)
    submit(data)
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
        <pre>{JSON.stringify(schedules)}</pre>
        {schedules.map((element, index) => (
          <div key={index}>
            <SelectField
              value={element ? element.day : 'mon'}
              label='Jour'
              onChange={e => handleChangeSchedules(index, e)}
              itemValue={['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']}
            />
            {
                index
                  ? <button type='button' className='button remove' onClick={() => removeFormFields(index)}>Remove</button>
                  : null
              }
          </div>
        ))}
      </div>
      {
          schedules.length < 5
            ? <button className='button add' type='button' onClick={() => addFormFields()}>Add</button>
            : ''
        }
      <Button className='button' variant='contained' type='submit' value='Ajouter'>Ajouter</Button>
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
