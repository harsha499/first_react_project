import React from 'react'

export var Input=(props)=>{

    let InputElement;
    switch(props.type)
    {
        case 'text':
            {
                InputElement=<input {...props} />
            }
            break;
            case 'textarea':
                {
                    InputElement=<input  {...props} />
                }
                break;
                case 'submit':{
                    InputElement=<input  {...props} />
                }
                break;
                default:
                    InputElement=<input  {...props} />      
    }

    return (
        <span>
            {InputElement}
        </span>
    )
}