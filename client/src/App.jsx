import React, { useState, useEffect } from 'react';
import { Form } from './components/Form/Form';
import './style/App.css'

const App = () => {
  const [isExist, setIsExist] = useState(false);

  return (
    <div className='App'>
    <div className='left'>
      <h1 className='title'>Welcome!</h1>
      <h3>{!isExist?'Register first' : 'Sign in!' }</h3>
      {isExist
      ?(<Form isExist={isExist} setIsExist={setIsExist}/>)
      :(<Form isExist={isExist} setIsExist={setIsExist}/>)}
    </div>
    <div className='right'></div>
    </div>);
}
 
export default App;