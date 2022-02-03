import React,{useState,useEffect} from "react";
const Rest=()=>{
    const[data, setData]=useState(null)
    useEffect(()=>{
fetch('https://gorest.co.in/public/v1/todos')
.then(res=>res.json())
.then(jres=>{
    setData(jres.data);
})
    },[])
    console.log(data);
    return(
        <div style={{ backgroundcolor:'black'}}>
        <div style={{border: '2px', width: '100%',backgroundColor:'black', display:'flex', flexWrap:'wrap'}}>
            {
                data && data.map((item)=>
                (
                   <div style={{height: '250px', width: '350px',backgroundColor:'white',margin: '30px'}}> 
                       <div><text> due_on: {item.due_on}</text></div>
                        <div><text> id: {item.id}</text></div>
                       <div><text> status: {item.status}</text></div>
                        <div><text> title: {item.title}</text></div>
                        <div><text> user_id: {item.user_id}</text></div>
                    </div>

                ))
            }
        </div>
        </div>
    )
}

export default Rest;