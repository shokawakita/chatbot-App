import React from "react";
import Button from '@mui/material/Button';

const Answer = (props) => {



  return (
    <Button sx={{
      borderColor: '#ffb549',
      color: '#ffb549',
      fontWeight: 600,
      marginBottom: '8px',
      "&:hover": {
        backgroundColor: '#ffb549',
        borderColor: '#ffb549',
        color: '#eee'
      }
    }}
    variant="outlined" onClick={() => props.select(props.content, props.nextId)}>
      {props.content}  
    </Button>
  )
}

export default Answer;