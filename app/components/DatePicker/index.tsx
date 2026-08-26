import { LocalizationProvider } from '@mui/x-date-pickers'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { Moment } from 'moment';

interface CustomDatePickerProps {
  format: string,
  onChange: () => void,
  value: Moment
}

const CustomDatePicker = (props: CustomDatePickerProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      <DatePicker {...props}/>
    </LocalizationProvider>
  )
}
 
export default CustomDatePicker