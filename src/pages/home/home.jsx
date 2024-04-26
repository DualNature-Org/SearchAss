import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import CurvedInputWithSearch from '../../components/curvedinputwithsearch';

function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1 className='name'>
        <span className='word'>S</span>
        <span className='word'>e</span>
        <span className='word'>a</span>
        <span className='word'>r</span>
        <span className='word'>c</span>
        <span className='word'>h</span>
        <span className='word'>A</span>
        <span className='word'>s</span>
        <span className='word'>s</span>
      </h1>
      <CurvedInputWithSearch />
      <div className="sbutton">
        <Button variant="outlined" color="secondary" sx={{color: 'red', borderColor: 'red'}}>
            <Link to="/results">Find</Link>
        </Button>
      </div>
    </div>
  );
}

export default Home;
