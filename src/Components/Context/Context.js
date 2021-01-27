import React from 'react';
 var logoutContext=React.createContext({
LogOut:false,
logoutmethod:()=>{
    console.log('make me logout')
}
});
export default logoutContext