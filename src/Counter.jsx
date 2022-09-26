export default function Counter({count,setcount,showh1=true}){
    return(
    <div>
        {showh1 &&        <h1>Counter</h1>
    }
        <button onClick={()=>setcount(count+1)}>{count}</button>
    </div>
    );
}