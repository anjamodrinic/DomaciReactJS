import React, { useContext } from 'react';
import { SkijeContext } from '../../store/SkijeContext';
import KorpaItem from './KorpaItem';

const KorpaList = () => {

    const skijeCtx=useContext(SkijeContext);

  return <Grid container>
      {skijeCtx.skije.map(s=>{
          return <Grid item xs={4} key={s.id}>
              <KorpaItem skije={s}/>
          </Grid>
      })}
  </Grid>
};

export default KorpaList;