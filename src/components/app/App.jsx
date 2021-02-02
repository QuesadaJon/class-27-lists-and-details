import React from 'react';
import {
  BrowserRouter as Router,
  Switch, 
  Route,
  Link
} from 'react-router-dom';
import ListPage from './ListPage.jsx';
import DetailsPage from './DetailsPage.jsx';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">List Page</Link>
            </li>
            <li>
              <Link to="/details">Details Page</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/details">
            <DetailsPage />
          </Route>
          <Route path="/">
            <ListPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
