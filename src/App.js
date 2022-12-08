
import { useEffect, useState } from 'react';
import './App.css';
import Thermometer from './Thermometer/thermometer';

function App() {
  const [goal, setCurrentGoal] = useState(2000);
  const [currentBalance, setCurrentBalance] = useState(435);

  useEffect(() => {
    (async() => {
      //const { access_token } = await doAuth();
      //const balance = await getBalance(access_token);
      //setCurrentBalance(balance);    
    })()
  
  }, [])

  const doAuth = async() => {
    return { access_token: 123 }
  }

  const getBalance = async(access_token) => {
    return 100;
  }

  return (
    <div className='main'>
      <div className='goal'>£{goal}</div>
      <Thermometer goal={goal} currentTotal={currentBalance} />
    </div>
  );
}

export default App;
