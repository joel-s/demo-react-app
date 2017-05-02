import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Navbar, Nav, NavItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import App from './App';
import Excel from './Excel';
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React App</a>
            </Navbar.Brand>
            <Nav>
              <NavItem eventKey={1} href="spreadsheet">Spreadsheet</NavItem>
            </Nav>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
      <Route path="/spreadsheet" component={Excel}/>
    </div>
  </Router>,
  document.getElementById('root')
);
