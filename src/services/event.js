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