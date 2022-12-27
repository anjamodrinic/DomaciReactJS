import { Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material';
import React from 'react';

const KorpaItem = ({skije}) => {
  return <Card>
      <CardHeader title={<Typography variant='h2'>{skije.model}</Typography>}/>
      <CardMedia image={skije.slikaUrl}/>
       <Typography variant='h6'>
           {skije.model}
       </Typography>
       <CardContent>{skije.brojPonavljanja}</CardContent>
  </Card>;
};

export default KorpaItem;