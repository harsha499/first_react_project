import React from 'react';
import Persons from '../Persons/Persons'
export var MainPerson=(props)=>{

    return (
      props.currentpersonEnable?
            <div>
            <Persons loginenabled={props.currentstate.loginenabled} state={props.currentstate} Person={props.currentstate.Person} 
            onchange={props.onchange} clickme={props.clickme} />
          </div>
          :null
    )
}