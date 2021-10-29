import React from 'react';
import { render } from 'react-dom';
import OnePromoRoot from '../roots/OnePromoRoot';

var app = document.getElementById('app');
if (app && window){
  render(<OnePromoRoot data={window.__PROMO__} />, app);
}
