import React from 'react';
import { render } from 'react-dom';
import ListRoot from '../roots/ListRoot';

var app = document.getElementById('app');
if (app && window){
  render(<ListRoot data={window.__PROMO__} />, app);
}
