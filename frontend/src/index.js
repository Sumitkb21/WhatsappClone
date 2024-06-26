import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));


export const Context = createContext();
const AppWrapper = ()=>{
  
  const [isAuth , setIsAuth] = useState();
  const [person ,setPerson] = useState({});

  return (
    <Context.Provider
    value={{
      isAuth , setIsAuth , person , setPerson
    }}
    >

      <App/>
    </Context.Provider>

  )


}







root.render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
