import React, { useState } from 'react';
import "./NavBar.css"; 

export const NavBar = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="nav-container">
      <i class="mdi mdi-keyboard-backspace back-icon"></i>
    </div>
  );
};
