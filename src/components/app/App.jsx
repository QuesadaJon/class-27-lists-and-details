import React, { Component } from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import DetailsPage from '../../containers/DetailsPage';
import ListPage from '../../containers/ListPage';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route 
              path="/details/:id"
              exact
              component={DetailsPage}
            />
            <Route 
              path="/"
              exact
              component={ListPage}
            /> 
          </Switch>
        </div>
      </Router>
    );
  }
}
