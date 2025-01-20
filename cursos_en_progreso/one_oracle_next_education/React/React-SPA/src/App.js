import './assets/css/base/base.css';
import './assets/css/componentes/card.css';

import Header from './components/Header';


import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Page404 from './pages/Page404';
import Post from './pages/Post';
import Categoria from './pages/Categoria'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  const location = window.location.pathname
  
   
  // const Router = () => {
  //   if (location === "/"){
  //     return <Home /> 
  //   } else if(location === "/sobre"){
  //     return <Sobre />
  //   }else {
  //     return <h2>Error 404 Page not found</h2>
  //   }
  // }

  return (
    <>
    {/* {Router()} */}
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/sobre' element={<Sobre />}/>
        <Route path='/posts/:id' element={<Post />}/>
        <Route path='/categorias/:id/*' element={<Categoria/>}/>
        <Route path='*' element={<Page404 />}></Route>
      </Routes>

    </Router>
    </>
  );
}

export default App;
