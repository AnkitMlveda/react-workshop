import './App.css';
import Header from './Header';
import Body from './Body';
import { useState } from 'react';
import Counter from './Counter';

function App() {
  const [count,setcount] = useState(0);

  return (
    <div className="App">
      <Header>
      <Counter count={count} setcount={setcount}/>
      </Header>
      <Body>
      <Counter count={count} setcount={setcount}/>
      </Body>
    </div>
  );
}

export default App;
