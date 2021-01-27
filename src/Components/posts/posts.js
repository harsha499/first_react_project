import React,{useState} from 'react'
import postclasses from './post.css'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

var  PostComponent=(props)=>{

    let clickme=()=>{
        props.history.push({pathname:"/AllPost/post/"+props.id})
    }
   
    console.log(props)
    return(
        <React.Fragment>
            <div onClick={clickme}  className={postclasses.title}>{props.postsval.title}</div>
          
            </React.Fragment>  
    )
}
export default withRouter(PostComponent);