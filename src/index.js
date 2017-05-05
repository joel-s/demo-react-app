import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import App from './App';
import Excel from './Excel';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">React Demo</Link>
            </Navbar.Brand>
            <Nav>
              <LinkContainer to="/spreadsheet">
                <NavItem eventKey={1}>Spreadsheet</NavItem>
              </LinkContainer>
            </Nav>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>

      // Main "routing table"
      <Route path="/" exact={true} component={App}/>
      <Route path="/spreadsheet" component={Excel}/>

    </div>
  </Router>,
  document.getElementById('root')
);
