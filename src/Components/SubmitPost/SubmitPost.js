import React,{useState} from 'react'
import { Input } from "../controls/Input";

export var SubmitPost=()=>{

    let [formstate,updateformstate]=useState({
      author:{
          value:"",
          valid:false
      },
      email:{
        value:"",
        valid:false
    },
      post:{
        value:"",
        valid:false
    },
      gender:{
        value:"",
        valid:false
    }
    })

    let onchangeemail=(event)=>{
    debugger;
    let val=event.target.value;
        updateformstate({
            author:formstate.author,
            email:{value:val,valid:val.length >=event.target.minLength && val.length<=event.target.maxLength?true:false},
            post:formstate.post,
            gender:formstate.gender
        })
    }
    let onchangepost=(event)=>{
        let val=event.target.value;
        updateformstate({
            author:formstate.author,
            email:formstate.email,
            post:{value:val,valid:val.length >=event.target.minLength && val.length<=event.target.maxLength?true:false},
            gender:formstate.gender
        })
    }
    let onchangeauthor=(event)=>{
        let val=event.target.value;
        updateformstate({
            author:{value:val,valid:val.length >=event.target.minLength && val.length<=event.target.maxLength?true:false},
            email:formstate.email,
            post:formstate.post,
            gender:formstate.gender
        })
    }
    let onchangegender=(event)=>{
        let val=event.target.value;
        updateformstate({
            author:formstate.author,
            email:formstate.email,
            post:formstate.post,
            gender:{value:val,valid:val.length >0?true:false}
        })
    }

    let submitform=(event)=>{
        event.preventDefault();
debugger;
console.log(formstate)
    }
    let postMailStyle=
    {
      "display":"flex",
      "flexDirection":"row",
      "alignContent":"space-around",
      "flexWrap":"wrap",
      "width":"auto"
    };
    let invalid={
        "backgroundColor":"red"
    }
    let focusfix=(event)=>{
        if(event.target.value=="")
        formstate[event.target.id].valid=false;
    }
    return(
        <div>
       <fieldset>
                <legend>New Post</legend>
            <form onSubmit={submitform}>
                
                <div style={postMailStyle}>
            <label htmlFor="author">Enter author</label>
            <Input minLength="3" style={!formstate.author.valid?invalid:null} onFocus={focusfix.bind(this)}  maxLength="10" required={true} id="author" onChange={onchangeauthor} value={formstate.author.value} type="text" placeholder="Enter Author Name"/>
            </div>
            <div style={postMailStyle}>
            <label htmlFor="email">Enter Email</label>
            <Input  minLength="3" style={!formstate.email.valid?invalid:null}  maxLength="10"  required={true} id="email" onChange={onchangeemail.bind(this)} value={formstate.email.value} type="text" placeholder="Enter Email"/>
            </div>
            <div style={postMailStyle}>
            <label htmlFor="post">Enter Post</label>
            <textarea minLength="3" style={!formstate.post.valid?invalid:null}  maxLength="10" required={true} id="post" onChange={onchangepost}  value={formstate.post.value}  placeholder="Enter Post"></textarea>
            </div>
            <div style={postMailStyle}>
            <label htmlFor="options">Select Gender</label>
            <select  required={true} style={!formstate.gender.valid?invalid:null}   onChange={onchangegender} id="options">
            <option value=""></option>
                <option valu="Male">Male</option>
                <option valu="Female">Female</option>
                <option valu="TransGender">TransGender</option>
            </select>
            </div>
            <br/>
            <div style={postMailStyle}>
            <Input disabled ={!formstate.author.valid || !formstate.email.valid || !formstate.post.valid || !formstate.gender.valid}
             type="submit" value="Submit"/>
            </div>
            </form>
            </fieldset>
        </div>
    )
}