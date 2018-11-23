import React, { Component } from 'react';
import { repeat } from '../modules/helpers.js';

const Hearts = ({count}) => (
  <div className="hearts-container">
    {repeat(count, index => <div className="heart" key={index}></div>)}
  </div>
);

export default Hearts;
