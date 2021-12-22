
import React, {useState, useContext, createContext} from 'react';
import './App.css';
import Characters from './components/Characters';
import ThemeContext, {themes} from './components/context/ThemeContext';

import Header from './components/Header';



function App() {
  const [darkTheme, setDarkTheme] = useState(false)

  const color = useContext(ThemeContext)

  const handleClick = () => {
    setDarkTheme(!darkTheme)
  }
 

 
  return (
<div className='div_principal' style={!darkTheme ? color.light : color.dark}>
      <Header/>
      <button className='btn-app' type='button' onClick={handleClick}>{darkTheme ? 'Light Mode' : 'Dark Mode'}</button>
      <Characters/>
</div >
      

 

    
  )
}

export default App;
