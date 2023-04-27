// import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

export default function Labels({checkedLabels, setCheckedLabels}) {
  console.log("---------- LABEL ----------")
  const [allTags, setAllTags] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checkedLabels.indexOf(value);
    const newCheckedLabels = [...checkedLabels];
    console.log('newCheckedLabels: ' + newCheckedLabels);
    if (currentIndex === -1) {
      newCheckedLabels.push(value);
    } else {
      newCheckedLabels.splice(currentIndex, 1);
    }
    setCheckedLabels(newCheckedLabels);
  };

  useEffect(() => {
    fetch("http://localhost:3000/tags", {
      method: 'GET',
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Erro ao criar evento:', response.statusText);
      }
    })
    .then(data => {
      setAllTags(data);
    })
    .catch(error => {
      console.error('Erro ao criar evento:', error);
    });
  }, []);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <Box sx={{display:'flex', justifyContent:'center'}}>
        <Typography variant='h6'>Minhas agendas</Typography>
      </Box>
      
      {allTags.map((value) => {
        return(
          <ListItem key={value['tag_id']} disablePadding>
            <ListItemButton onClick={handleToggle(value)} dense>
                <Checkbox
                    checked={checkedLabels.indexOf(value) !== -1}
                />
                <Typography>{value['tag_name']}</Typography>
            </ListItemButton>
            
        </ListItem>
        );
      })}
    </List>
  );
}