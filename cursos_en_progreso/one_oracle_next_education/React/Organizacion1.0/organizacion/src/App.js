import { useState } from 'react';

import './App.css';

// Importamos componentes
import Header from './components/header/Header';
import Form from './components/Form/Form'
import MyOrg from './components/MyOrg/MyOrg';


// Formas de invocar los componentes
// {Header()}}
// <Header></Header>
// <Header />
function App() {

  const [formShow, showForm] = useState(false);


  const changeShow =() => {
    showForm(!formShow)
  } 

  return (
    <div>
      <Header></Header>
      {formShow === true ? <Form /> : <></> }
      <MyOrg changeShow={changeShow}></MyOrg>
    </div>
  );
}

export default App;
