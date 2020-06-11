import React from 'react';
import Countdown from './countdown';
import useScreenDimensions from './useScreenDimensions';

import './App.css';

const targetDate = new Date('June 29, 2020 00:00:00');

function App() {
  const { screenWidth, screenHeight } = useScreenDimensions();

  return (
    <div className="container" style={{width: `${screenWidth}px`, height: `${screenHeight}px`}}>
      <Countdown targetDate={targetDate} />
    </div>
  );
}

export default App;
