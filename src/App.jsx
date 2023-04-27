import React from 'react';
import Calendar from './components/Calendar.jsx'

export default function App() {
  console.log('---------- APP ----------')
  return (
    <Calendar sx={{bgColor: 'background.paper'}}/>
  );
}