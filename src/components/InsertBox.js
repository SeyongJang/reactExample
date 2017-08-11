import React from 'react';
import './index.css';

const InsertBox = () => {
    return (
            <div className="inputBox">
                <input className="inputItem" type="text" placeholder="insert your task"/>
                <button>+</button>
            </div>
    );
};

export default InsertBox;