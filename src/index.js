import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Navbar } from 'react-bootstrap';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import Excel, { excelHeaders, excelData } from './Excel';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Router>
    <div>
      <Navbar inverse fixedTop>
        <Grid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">React App</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
        </Grid>
      </Navbar>
      <Excel headers={excelHeaders} initialData={excelData}/>
    </div>
  </Router>,
  document.getElementById('excel')
);
