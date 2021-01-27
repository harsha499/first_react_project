import React,{useState,useEffect} from 'react'
import {Link,Route} from 'react-router-dom'
import axios from 'axios'
import PostComponent from '../posts/posts'
import {Showpost} from '../showpost/showpost'
import styles from './AllPost.css';
 var AllPost=(props)=>{
  let [commentstate,updatecommentstate]= useState({
    body:[],
     ispresent:false,
     posts:[]
 })
 useEffect(()=>{
  if(!commentstate.ispresent)
  {
    console.log('use effect app.js');
    axios.get('/posts').then((resp)=>{
      updatecommentstate({
        posts:resp.data,
        ispresent:true
      });
    });
  }
   });

      let postMailStyle=
      {
        "display":"flex",
        "flexDirection":"row",
        "alignContent":"space-around",
        "flexWrap":"wrap"
      }
      
    return(
      
        <div style={postMailStyle}>
      {

        props.currentpersonEnable? commentstate.posts.map((x,y)=>{
          if(y<5)
          {
            //way to rdirect without programically to next page using Link
            // return <Link key={y} style={{'marginTop':'10px','width':'400px'}}  to={"/post/"+(y+1)}><PostComponent postsval={x} /> </Link>
            return <div className={styles.test} key={y} style={{'marginTop':'10px','width':'400px'}}><PostComponent   id={(y+1)} postsval={x} /> </div>
          }
        })
        :null
      }
       <Route path="/AllPost/post/:id"  component={Showpost}/>
      </div>
    
    );
    }

    export default AllPost