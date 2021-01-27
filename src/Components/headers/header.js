import logo from '../../logo.svg'
import React,{useEffect,useRef,useContext} from 'react'
import Higherorderdiv from '../HigherOrderComponent/MainOrder'
import PropTypes from 'prop-types'
import logoutContext from '../Context/Context'
import styled from 'styled-components'
import {NavLink,withRouter} from 'react-router-dom'
 var Header=(props)=>{

      var Lis=styled.li`
    cursor: pointer;
    `
    var Anchors=styled(NavLink)`
    text-decoration: none;
    color:white;
    font-size: 15px;
      &:hover{
        color: pink;
      }
      &:active{
        color:yellow
      }
    }
    `
   let refrence=useRef(null);
   let context=useContext(logoutContext)
    let style=[];
      if(props.currentpersonEnable)
      style.push(props.AppClasses.button)
      else
      style.push(props.AppClasses.button_off);

    useEffect(()=>{
     console.log('useeffect Header'); 
    refrence.current.click();
    },[props.AppClasses])
    console.log(props)
    return(
       <Higherorderdiv classList={props.AppClasses.colordiv}>
        <div>
        <header className={props.AppClasses.Appheader}>
          <nav >
          <ul className={props.AppClasses.Nav_ul}>
              <Lis><Anchors exact activeStyle={{
                'color':'red'
              }}  to="/">Home</Anchors></Lis>
              <Lis><Anchors exact activeStyle={{
                'color':'red'
              }}    to={{
                pathname:  '/AllPost',
                search:"?cool=1",
                hash:"#cool"
              }} >All Post</Anchors></Lis>
              <Lis><Anchors exact activeStyle={{
                'color':'red'
              }}  to="/SubmitPost">SubmitNewPost</Anchors></Lis>
            </ul>
           
          </nav>
        <p  ref={refrence}  onClick={props.clickparas}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button className={style.join(' ')} onClick={props.toogleclicks}>toogle</button>
        <button className={style.join(' ')} onClick={props.Login.bind(this)}>Login using props</button>
       
           <button className={style.join(' ')} onClick={context.logoutmethod}>Logout using context</button>
       
      <p style={{'color':'green'}}> {props.currentpersonEnable.toString()}</p>
      </header>
      </div>
      </Higherorderdiv>
    )
}
Header.propTypes={
  currentpersonEnable:PropTypes.bool,
  AppClasses:PropTypes.object
}
export default   withRouter(React.memo(Header))//Header