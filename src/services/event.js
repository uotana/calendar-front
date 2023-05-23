export async function getAllEvents(){
  const response = await fetch("http://localhost:3000/events", {
    method: 'GET',
  });
  if (response.ok) {
    return response.json();
  } else {
    console.error('Erro:', response.statusText);
  }
}

export async function createEvent(data){
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: (JSON.stringify(data)),
  }
  const response = await fetch('http://localhost:3000/events', requestOptions);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error('Erro ao criar evento');
  }
}

export async function editEvent(
  event_id, 
  event_title, 
  event_description){
    console.log(event_id, 
      event_title, 
      event_description);
  const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({event_title, event_description})
    }  
  const response = await fetch(`http://localhost:3000/events/${event_id}`, requestOptions);
  if(response.ok){
    return response.json();}
  else {
    throw new Error('Erro ao editar evento');
  }   
}

export function deleteEvent(event_id){
  const requestOptions = {
      method: 'DELETE',
    }  
  fetch(`http://localhost:3000/events/${event_id}`, requestOptions)
  .then((response)=>{
      if(response.ok) return response.json();
  })
  .catch(error => {
      console.error('Error:', error);
    });   
}