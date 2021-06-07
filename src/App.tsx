import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar'
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const App: React.FC = () => {

   return (
      <BrowserRouter>
         <Navbar />
         <div className="container">
            <Switch>
               <Route component={TodosPage} path='/' exact />
               <Route component={AboutPage} path='/about' />
            </Switch>
         </div>
      </BrowserRouter>
   );
}

export default App;
