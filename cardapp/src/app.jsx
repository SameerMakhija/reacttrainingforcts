// var CardList = require('./card-list')
import CardList from './card-list'
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// 2. Create an object of the class
var obj = React.createElement(CardList, {})

// 3. Render it to the dom
ReactDOM.render(obj, document.getElementById('mount-point'))