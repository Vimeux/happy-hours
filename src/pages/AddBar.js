import { useState } from 'react'
import AddBarForm from '../components/AddBarForm/AddBarForm'
import { addBar } from '../services/api'

function AddBar () {
  const [error, setError] = useState(null)

  const handleSubmit = async (infos) => {
    const bar = await addBar(infos)
    if (bar.error) {
      console.log('error')
      setError('une erreur s\'est produite, vueillez réessayer plus tard')
    } else {
      setError('Formulaire Soumis')
    }
  }

  return (
    <div>
      <AddBarForm
        submit={handleSubmit}
      />
      <p>{error}</p>
    </div>
  )
}

export default AddBar
