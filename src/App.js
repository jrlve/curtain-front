import React from 'react';
import './App.css';
import {Room} from "./Room";
import {Settings} from "./Settings";

function App() {
  return (
    <div className="room-container">
      <Room/>
      <Settings open={false}/>
    </div>
  );
}

export default App;
