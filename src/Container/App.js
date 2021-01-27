import  AppClasses  from './App.css'
import React,{useState,useEffect} from 'react'
import Header from '../Components/headers/header'
import logoutContext from '../Components/Context/Context'
import AllPost from '../Components/AllPost/AllPost'
import {BrowserRouter,Route,Switch, Redirect} from 'react-router-dom'
import {MainPerson} from '../Components/MainPerson/MainPerson'
import {Showpost} from '../Components/showpost/showpost'
import {SubmitPost} from '../Components/SubmitPost/SubmitPost'
import {connect} from 'react-redux'
function App(props) {

  let[currentstate,updatestate]= useState({
    'Person':[
      {
        'name':"harsh",'age':31},
       { 'name':"garima",'age':29,
      }
    ],
    'Loginenabled':false,
    'LogOutEnabled':true
  })


  useEffect(()=>{
    console.log('load app.js')
  },[currentstate])

  let clickme=(name)=>{
    let copy= [...currentstate.Person];
    copy[0].name=name;
    updatestate({'Person':copy,
    'Loginenabled':currentstate.loginenabled,
    'LogOutEnabled':currentstate.LogOutEnabled});
  }
  let onchange=(y,event)=>{
    debugger;
    let copy= [...currentstate.Person];
    copy[y].name=event.target.value;
    updatestate({'Person':copy,
    'Loginenabled':currentstate.loginenabled,
    'LogOutEnabled':currentstate.LogOutEnabled});
    debugger;
  }
  

  let loginMethod=()=>{
    let copy= currentstate.loginenabled;
    copy=!copy;
    updatestate({loginenabled:copy,'Person':currentstate.Person,LogOutEnabled:currentstate.LogOutEnabled,
    'posts':currentstate.posts});
  }
  
  let logoutMethod=()=>{
    let copy= currentstate.LogOutEnabled;
    copy=!copy;
    updatestate({LogOutEnabled:copy,'Person':currentstate.Person,loginenabled:currentstate.loginenabled,
    'posts':currentstate.posts});
  }
  return (
    <BrowserRouter basename="/cool">
    <div className={AppClasses.app}>
      <logoutContext.Provider value={{LogOut:currentstate.LogOutEnabled,logoutmethod:logoutMethod.bind(this)}}>
      <Header AppClasses={AppClasses} clickparas={props.clickpara} 
      change={onchange} Login={loginMethod} toogleclicks={props.tooglebutton} name={currentstate.Person[0].name} 
      currentpersonEnable={props.personEnables} />
      <div style={{
         'display': 'flex',
         'flexWrap': 'wrap',
         'justifyContent': 'center',
         'flexDirection': 'row',
         'listStyleType': 'none',
         'alignItems':'center',
         'width': '120px',
         'margin': 'auto'
      }}>
        <Switch>
        {/* <Redirect from='/' to ='/AllPost'/> */}
        <Route path="/" exact component={()=>{return <MainPerson currentpersonEnable={props.personEnables}
           currentstate={currentstate} onchange={onchange} clickme={clickme} />}}/>
           <Route path="/AllPost"  component={()=>{return <AllPost currentpersonEnable={props.personEnables} />}}/>
           <Route path="/SubmitPost" component={SubmitPost}/>
           <Route  render={()=><div>Not Found</div>}/>

          
           {
           //for parent route
           /* <Route path="/AllPost" exact component={AllPost}/> */}
           {/* <Route path="/post/:id" exact component={Showpost}/> */}
           </Switch>
          {/* {
           
          }  */}
          </div>
      </logoutContext.Provider>      
    </div>
    </BrowserRouter>
  );
}

var statefromprops=(state)=>{
    return {
      personEnables:state.personEnable,
      cool:state.cool 
    }
}
var ActionStatefromprops=(dispatch)=>{
  return {
    tooglebutton: ()=>{
        setTimeout(() => {
          dispatch({type:'toogle'})
        }, 2000);
      },
    clickpara:()=>dispatch({type:'clickpara'})
  }
}

export default connect(statefromprops,ActionStatefromprops)(App);
