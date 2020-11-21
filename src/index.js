import React from 'react';
import ReactDOM from 'react-dom';
import './common/App.css';

import Applinks from './Applink'


ReactDOM.render(
  // <Provider>
  <React.StrictMode>
    <Applinks />
  </React.StrictMode>,
  // </Provider>,
  document.getElementById('root')
);


