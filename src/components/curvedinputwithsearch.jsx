import pencilIcon from '../assets/pencil.png';
import micIcon from '../assets/mic.png';
import React from 'react';
import './style.css';


const CurvedInputWithSearch = () => {

    const handle_mic_click = ()=>{
        console.log('hello')
    }

    return (
        <div className="searchcontainer">
        <span className="icon">
            <img src={pencilIcon} alt="Pencil Icon" />
        </span>
        <input
            type="text"

            placeholder="     Search Your Topic..... "
            style={{
            borderRadius: '2rem',
            padding: '0.7rem 2rem',
            width: '55vw',
            outline: 'none',
            }}
        />
        <span className="mic-icon">
            <img src={micIcon} alt="Mic" onClick={handle_mic_click}/>
        </span>
        </div>
    );
    };

export default CurvedInputWithSearch;
