import { Button } from '@mui/material'
import { Box } from '@mui/system'

import { useState } from 'react'
import SelectField from '../SelectInput/SelectInput'
import TextInput from '../TextInput/TextInput'

import './AddBarForm.css'

function AddBarForm ({ submit }) {
  // stockage des données du formulaires
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: ''
  })
  const [schedules, setSchedules] = useState([
    {
      day: '',
      start: '',
      end: ''
    }
  ])
  const [happyHours, setHappyHours] = useState([
    {
      day: '',
      start: '',
      end: ''
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
    const element = { ...newSchedules[i], [e.target.name]: e.target.value }
    newSchedules[i] = element
    setSchedules(newSchedules)
  }

  const handleChangeHappyHours = (i, e) => {
    const newHappyHours = happyHours.slice()
    const element = { ...newHappyHours[i], [e.target.name]: e.target.value }
    newHappyHours[i] = element
    setHappyHours(newHappyHours)
  }

  const addFormFields = (type) => {
    if (type === 'schedule') {
      if (schedules.length < 5) {
        setSchedules([...schedules, { day: '', start: '', end: '' }])
      } else {
        window.alert(`limite atteinte ${JSON.stringify(schedules)}`)
      }
    } else if (type === 'happyHours') {
      if (happyHours.length < 5) {
        setHappyHours([...happyHours, { day: '', start: '', end: '' }])
      } else {
        window.alert(`limite atteinte ${JSON.stringify(schedules)}`)
      }
    }
  }

  const removeFormFields = (i, type) => {
    if (type === 'schedule') {
      const newSchedules = [...schedules]
      newSchedules.splice(i, 1)
      setSchedules(newSchedules)
    } else if (type === 'happyHours') {
      console.log('passe ici')
      const newHappyHours = [...happyHours]
      newHappyHours.splice(i, 1)
      setHappyHours(newHappyHours)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = { ...formData, schedules: schedules, happyHours: happyHours }
    // console.log(data)
    submit(data)
  }

  return (
    <Box sx={{ minWidth: 370 }}>
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
          {schedules.map((element, index) => (
            <div key={index}>
              <div className='hours'>
                <SelectField
                  value={element ? element.day : 'mon'}
                  label='Jour'
                  name='day'
                  onChange={e => handleChangeSchedules(index, e)}
                  itemValue={['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']}
                />
                <SelectField
                  value={element ? element.start : '00'}
                  label='Ouverture'
                  name='start'
                  onChange={e => handleChangeSchedules(index, e)}
                  itemValue={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                />
                <SelectField
                  value={element ? element.end : '00'}
                  label='Fermeture'
                  name='end'
                  onChange={e => handleChangeSchedules(index, e)}
                  itemValue={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                />
              </div>
              {
                index
                  ? <Button sx={{ m: 1.5 }} variant='contained' type='button' className='button remove' onClick={() => removeFormFields(index, 'schedule')}>Remove</Button>
                  : null
              }
            </div>
          ))}
          {
          schedules.length < 5
            ? <Button variant='contained' className='button add' type='button' onClick={() => addFormFields('schedule')}>Add</Button>
            : ''
        }
          {happyHours.map((element, index) => (
            <div key={index}>
              <div className='hours'>
                <SelectField
                  value={element ? element.day : 'mon'}
                  label='Jour'
                  name='day'
                  onChange={e => handleChangeHappyHours(index, e)}
                  itemValue={['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']}
                />
                <SelectField
                  value={element ? element.start : '00'}
                  label='Ouverture'
                  name='start'
                  onChange={e => handleChangeHappyHours(index, e)}
                  itemValue={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                />
                <SelectField
                  value={element ? element.end : '00'}
                  label='Fermeture'
                  name='end'
                  onChange={e => handleChangeHappyHours(index, e)}
                  itemValue={['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23']}
                />
              </div>
              {
                index
                  ? <Button sx={{ m: 1.5 }} variant='contained' type='button' className='button remove' onClick={() => removeFormFields(index, 'happyHours')}>Remove</Button>
                  : null
              }
            </div>
          ))}
          {
          schedules.length < 5
            ? <Button variant='contained' className='button add' type='button' onClick={() => addFormFields('happyHours')}>Add</Button>
            : ''
        }
        </div>
        <Button sx={{ m: 1.5 }} className='button' variant='contained' type='submit' value='Ajouter'>Ajouter</Button>
      </form>
    </Box>
  )
}

export default AddBarForm
