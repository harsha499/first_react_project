import Person from '../Person/Person'
import {ErrorPage} from '../../ErrorBoundry/errorpage'
import React,{useState,useEffect,memo} from 'react'
 import PropTypes from 'prop-types'

 var Persons=(props)=>{ 

  useEffect(()=>{
    console.log('Persons Effect first');
    
    return ()=>{console.log('clean 1');}
  },[])
  useEffect(()=>{
    console.log('Persons Effect second');
    return ()=>{console.log('clean 2');}
  },[props.Person])

  return  props.Person.map((x,y)=>{
  
        return <React.Fragment key={y+x.age} > <Person loginenabled={props.loginenabled}  name={x.name} props1={props.state} 
         change={props.onchange} click={props.clickme}  index={y} age={x.age}></Person>
         
         </React.Fragment>

      })
    
}


Persons.propTypes={
  Person:PropTypes.array,
  state:PropTypes.object,
  onchange:PropTypes.func,
  clickme:PropTypes.func,
  
}
export default memo(Persons);//Persons