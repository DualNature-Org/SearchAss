import React from 'react';
import 'tailwindcss/tailwind.css';
import './App.css';
import CurvedInputWithSearch from './components/curvedinputwithsearch';
import { Button } from '@mui/material';


const App = () => {
  return (
    <div className="flex flex-col items-center">
      <torchlight />
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

      {/* Add an outlined button from Material-UI */}
      <div className="sbutton">
        <Button variant="outlined" color="secondary" sx={{color: 'red', borderColor: 'red'}}>
          Find
        </Button>
      </div>
    </div>
  );
};

export default App;
