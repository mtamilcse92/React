import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router-dom';
import routes from './routes';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
  
ReactDOM.render(<Router>{routes}</Router>, document.getElementById('app'));
