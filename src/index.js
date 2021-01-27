import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Container/App';
import {Error} from './ErrorBoundry/errorpage'
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import {PersonReducer} from './ReduxContainer/Reducers/PersonReducer'
import thunk from 'redux-thunk'

var middlefunction=(store)=>{
  return (next)=>{
    return(action)=>{
     
      console.log('store',store.getState());
      console.log('action: ',action.type);
      
      return next(action)
    }
  }
}

var store=createStore(PersonReducer,applyMiddleware(middlefunction,thunk))



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
axios.defaults.baseURL="https://jsonplaceholder.typicode.com";

// create instance of axious for using idff base url for diff components if required
// let c = axios.create({
//   baseURL:"https://jsonplaceholder.typicode.com"
// })
axios.interceptors.request.use((request)=>{
  console.log('iterceptors request: ',request)
  request.headers['cool']="i am harsh";
  return request;
});
axios.interceptors.response.use((response)=>{
  console.log('iterceptors response: ',response)
  return response;
})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
