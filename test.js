const redux = require('redux')

let initialState={
    count:0
}

let reducer=(states=initialState,action)=>{

    switch(action.type)
    {
       case "add":
        {
            return {
                ...states,
                count:action.value+1
            }
        }
        break;
        default:
            return states;
    }
}

let store=redux.createStore(reducer);

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({type:"add",value:1})

console.log(store.getState())