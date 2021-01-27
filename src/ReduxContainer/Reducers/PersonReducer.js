
var initialState={
    personEnable:false,
    cool:true
}

export var  PersonReducer=(state=initialState,action)=>{

    switch(action.type)
    {
        case 'toogle':
            {
                return   {
                    ...state,
                    personEnable:!state.personEnable

                }
            }
            break;
            case 'clickpara':
                {
                    return   {
                        ...state,
                        cool:!state.cool
    
                    }
                }
                break;
    }

    return state;

}