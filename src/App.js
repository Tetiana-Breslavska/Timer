import TimeShow from './components/TimeShow/TimeShow.js'
import Button from './components/Button/Button.js'
import Container from './components/Container/Container'

import { useState, useEffect } from 'react';



const App = () => {

  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);


    const start = () => {
      setTimer(setInterval(() => {
        setTime(prevValue => prevValue + 1);
      }, 1))
    }

    const stop = () => {
      // clearInterval(timer);
      setTimer(null);
    }

    const reset = () => {
      // clearInterval(timer);
      setTimer(null);
      setTime(0);
    }

    useEffect(() => {
      return () => {
        if(timer) clearInterval(timer);
      };
    }, [timer]);

  return (
    <div>
      <Container>
        <TimeShow time={time}/>
        <Button onClick={start}>Start</Button>
        <Button onClick={stop}>Stop</Button>
        <Button onClick={reset}>Reset</Button>
      </Container>
    </div>
  );
};

export default App;