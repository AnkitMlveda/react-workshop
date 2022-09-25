export default function Counter({count,setcount}){
    return(
    <div>
        <h1>Counter</h1>
        <button onClick={()=>setcount(count+1)}>{count}</button>
    </div>
    );
}