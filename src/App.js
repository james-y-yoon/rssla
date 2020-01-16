import React from 'react';
import { Route, Switch, Router, BrowserRouter} from 'react-router-dom';
import './App.css'; 
import Header from './components/Header/Header'; 
import Footer from './components/Footer/Footer';
import Prospectives from './pages/Prospectives';  
import Programs from './pages/Programs'; 
import About from './pages/About'; 
import Board from './pages/Board';

// function AppRouter(){
//   return(
//     <Router>

//     </Router>
//   ); 
// }

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      
        <Route path='/' exact component={About} />
        <Route path='/prospectives' component={Prospectives} />
        <Route path='/board' component={Board} />
        <Route path='/programs' component={Programs} />
      
      <Footer/>
      </BrowserRouter> 
    </div>
  );
}

export default AppRouter;
