import React from 'react';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function SmallCalendar({value, setValue}) {  
  return (
    <LocalizationProvider
    dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateCalendar', 'DateCalendar']}>
        <DemoItem>
          <DateCalendar showDaysOutsideCurrentMonth className='day-of-month' 
            views={['day']} 
            value={value} 
            onChange={(newValue) => setValue(newValue)} 
            />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}