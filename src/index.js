import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Excel, { excelHeaders, excelData } from './Excel';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
  <Router>
    <Excel headers={excelHeaders} initialData={excelData}/>
  </Router>,
  document.getElementById('excel')
);
