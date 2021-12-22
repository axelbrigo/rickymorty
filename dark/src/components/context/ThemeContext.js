import React from 'react'

 export const themes = {
    dark : {
        color: 'yellowgreen',
        background: 'black',


        
    },



    light: {
        color: 'black',
        background: 'yellowgreen',
   
    }
}




const ThemeContext = React.createContext()

export default ThemeContext