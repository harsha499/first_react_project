import styled from 'styled-components'
import { Component,PureComponent,Fragment } from 'react';
import PropTypes from 'prop-types'
import logoutContext from '../Context/Context'
import {Input} from '../controls/Input'
import React from 'react'
//  var Person=(props)=>{

// let Divs=styled.div`
// box-shadow: 0px 2px 4px 4px grey;
// padding: 10px;
// margin: 40px 500px;
// width: 30%;
// color:green;
// &:hover{
//     color:red
// }
// `
// let Inputs=styled.input`
// color:${prop=>prop.alt.length>2?'pink':'red'}
// `
// debugger;
//     return(
//         <Fragment>
//           <Divs>
//              <h3 onClick={props.click.bind(this,"cool")}  >my name is {props.name} with age {props.age}</h3>
//                     <Inputs type="text"  onChange={props.change.bind(this,props.index)}
//                                  value={props.name} />
//                             </Divs>
//                              <h3>i am your friend</h3>
//                              </Fragment>
//     )
//  }
// }
 class Person extends  Component//PureComponent
{
    constructor(props)
    {
        super(props);
        console.log('constuctor');
        this.xx=null;
      
    }
    static contextType=logoutContext;
    componentWillUnmount()
    {
        console.log('Unmount');
    }
    shouldComponentUpdate(prop,state)
    {
      
        console.log('shouldComponentUpdate');
        if(prop.props1.Person!=this.props.props1.Person)
        {
        return true;
        }
            return false;
    }
    getSnapshotBeforeUpdate(prop,state)
    {
       
        console.log('getSnapshotBeforeUpdate')   ;
        return {a:1};
    }
    componentDidUpdate(prop,state,snapshots)
    {
       
        console.log('componentDidUpdate')
    }
    static getDerivedStateFromProps(props,state)
    {
    
        console.log('GetDerivedStateFromProps',props);
        return null//state;
    }
      componentDidMount()
    {
       
        console.log('componentDidMount')
        console.log(this.context)
       // this.xx.focus();
    }
    componentWillUnmount()
    {
        console.log('componentWillunMount')
        
    }
    render()
    {
        console.log('render');
        let Divs=styled.div`
box-shadow: 0px 2px 4px 4px grey;
padding: 10px;
margin: 19px 0 ;
width: 100%;
color:green;
&:hover{
    color:red
}
`;


// let Inputs=styled.input`
// color:${prop=>prop.alt.length>2?'pink':'red'}`;


        return(
            <Fragment  >
               
                    <Divs style={{
         'display': 'flex',
         'flexWrap': 'wrap',
         'justifyContent': 'space-around',
         'flexDirection': 'row',
         'listStyleType': 'none',
         'alignItems':'center'
      }}>
                        <h3 onClick={(x)=>this.props.click("cool",x)}  >my name is {this.props.name} with age {this.props.age}</h3>
                        <Input  ref={(x)=>{this.xx=x}} type="text" alt={this.props.name}  onChange={(y)=>this.props.change(this.props.index,y)}
                         value={this.props.name} />
                           {
                        this.props.loginenabled?
                        <p>Authicated</p>:
                        <p>Please login</p>
                            }
                            {
                            this.context.LogOut?
                            <p>Not LogOut</p>:
                            <p>LogOut</p>
                              }
                    </Divs>
                     
                     </Fragment>
                )
    }

}
Person.propTypes={
    props1:PropTypes.object,
    click:PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    change:PropTypes.func
//    keys:PropTypes.number
}
export default Person