import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {

    return (
        <div sx={{
              alignItems: 'center',
              display: 'flex',
              height: '100%',
              justifyContent: 'center',
              width: '100%',
              '& > * + *': {
                  margin: 0
              },
            }}>
            <CircularProgress />
        </div>
    );
}

export default Loading;