import React from 'react'
import { Suspense } from 'react';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import NotFound from './components/notfound'

const Photo = React.lazy(() => import('./features/photo'))

function App() {
  return (
    <div className="photo-app">
      <Suspense fallback={<div>Loading ...</div>}>
        <BrowserRouter>
          <Header/>
          {/* <ul>
            <li><Link to="/photos">Go to photo page</Link></li>
            <li><Link to="/photos/add">Go to add new photo page</Link></li>
            <li><Link to="/photos/edit">Go to edit photo page</Link></li>
          </ul> */}

          <Switch>
            <Redirect exact from="/" to="/photos"/>
            <Route path="/photos" component={Photo}/>
            <Route component={NotFound}/>
          </Switch>
        </BrowserRouter>       
      </Suspense>
    </div>
  );
}

export default App;
