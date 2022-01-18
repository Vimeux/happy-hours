import { TextField } from '@mui/material'
import './TextInput.css'

function TextInput (props) {
  return (
    <label className='label'>
      <TextField
        {...props}
        value={props.value}
        onChange={props.onChange}
      />
    </label>
  )
}

export default TextInput
