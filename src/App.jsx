import { useState } from 'react';
import './App.css';
import Header from './Header';
import Body from './Body';
import { CounterContext } from './CounterContext';

function App() {
  const [count,setcount]= useState(0);

  return (
 
    <div className="App">
         <CounterContext.Provider value={[count,setcount]}>
      <Header/>
      <Body/>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
