import React, { useContext } from 'react';
import { AppBar,Container,Toolbar,Typography } from '@mui/material';
import { ImCart } from "react-icons/im";
import { SkijeContext } from '../../store/SkijeContext';

function NavBar() {

  const skijeCtx=useContext(SkijeContext);


  return <div>
       <AppBar>
        <Container>
            <Toolbar>
                <Typography variant='h6'>Skije</Typography>
                <a className="cart-items">
                  <ImCart style={{marginLeft: 10}}/>
                  
                  <div className="cart-num">{skijeCtx.ukupanBrojSkija}</div>
                </a>
            </Toolbar>
        </Container>
    </AppBar>
  </div>;
}


export default NavBar;