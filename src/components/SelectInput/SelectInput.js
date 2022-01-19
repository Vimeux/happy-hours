import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

function SelectField (props) {
  return (
    <FormControl fullWidth>
      <InputLabel id='simple-select-label'>{props.label}</InputLabel>
      <Select
        labelId='simple-select-label'
        id='simple-select'
        value={props.value}
        label={props.label}
        onChange={props.onChange}
      >
        {props.itemValue.map((element, index) => (
          <MenuItem key={index} value={element}>{element}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectField
