import React from 'react';
import THECOMPANY from './Pages/THECOMPANY.js';
import OurVision from './Pages/OurVision.js';
import OurBranch from './Pages/OurBranch.js';
import Legal from './Pages/Legal.js';
import Report from './Pages/Report.js';
import Channel from './Pages/Channel.js';
import Recruitment from './Pages/Recruitment.js';
import Board from './Pages/Board.js';
import Terms from './Pages/Terms.js';
import Security from './Pages/Security.js';
import './App.css';

function App() {
  return (
    <div className="App">
        <THECOMPANY />
        <OurVision />
        <OurBranch />
        <Legal />
        <Report />
        <Channel />
        <Recruitment />
        <Board />
        <Terms />
        <Security />
    </div>
  );
}

export default App;
