import React from 'react';
import { AppBar,Container,Toolbar,Typography } from '@mui/material';
import { ImCart } from "react-icons/im";

function NavBar() {
  return <div>
       <AppBar>
        <Container>
            <Toolbar>
                <Typography variant='h6'>Skije</Typography>
                <a className="cart-items">
                  <ImCart style={{marginLeft: 10}}/>
                  <div className="cart-num">0</div>
                </a>
            </Toolbar>
        </Container>
    </AppBar>
  </div>;
}

export default NavBar;