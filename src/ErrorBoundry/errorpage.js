import React,{useState} from 'react'
export const ErrorPage=(props)=>{

    let [currentstate,changestate]=useState({
        error:false,
        message:''
    });

  let  componentDidCatch =(error,errorInfo)=>{
        changestate({error:true,
        message:error.message})
    }
    if(currentstate.error)
    {
        return
        (
           
            <div>
                 <p>ddd</p>
           {currentstate.errorInfo}
            </div>
        )
    }
    else
    return(
        <div>{props.children}</div>
    )

}