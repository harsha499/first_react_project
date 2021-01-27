import { useEffect,useState } from "react";
import axios from 'axios'
export var Showpost=(props)=>{
    console.log(props);

 let [state,updatestate]=   useState({
        body:[],
        loaded:false
    })

useEffect(()=>{
    if(!state.loaded)
    {
        
        axios.get(`/posts/${props.match.params.id}/comments`).then((resp)=>
        {
            updatestate({
            body:[...resp.data],
            loaded:true
             });
        });
    
        }}
        ,[]);

    return (<div style={{
        'display': 'flex',
        'flexWrap': 'wrap',
        'justifyContent': 'center',
        'flexDirection': 'row',
        'listStyleType': 'none',
        'alignItems':'center',
        'width': '120px',
        'margin': 'auto'
     }}>{state.loaded?state.body[0].body:null}</div>)
     
    
}