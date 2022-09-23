import {useContext} from 'react';
import {CounterContext} from './CounterContext';

export default function Counter(){
    const [count,setcount]= useContext(CounterContext);
    return(
        <button onClick={() => setcount(count + 1)}>{count}</button>
    );
} 