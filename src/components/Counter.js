import React ,{useState} from 'react'
const Counter =()=>{
    const [count,setCount]=useState(1);
    const increment=()=>setCount(count*3)
    const decrement=()=>setCount(count/3)
    return (
        <div>
            <button onClick={decrement} style={{ padding : "20px",fontSize: "50px",fontWeight: "bold", }}>-</button>
            <text style={{ padding : "20px",fontSize: "50px",fontWeight: "bold", }}>{count}</text>
            <button onClick={increment} style={{ padding : "20px",fontSize: "50px",fontWeight: "bold", }}>+</button>
        </div>
    )
}

export default Counter;