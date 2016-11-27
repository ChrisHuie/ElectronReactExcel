// @flow
import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactDOM from 'react-dom';
//import styles from './Home.css';



const headers = [
  "Books" , "Author" , "Language" , "Published" , "Sales"
];
const data = [
  ["The Lord of the Rings" , "J.R.R. Tolkien" , "English" , "1954-1955" , "150 million"],
  ["Le Petit Prince (The Little Prince)" , "Antoine de Saint-Exupery" , "French" , "1943" , "140 million"],
  ["Harry Potter and the Sorcerer's Stone" , "J.K. Rowling" , "English" , "1997" , "107 million"],
  ["And Then There Were None" , "Agatha Christie" , "English" , "1939" , "100 million"],
  ["Dream of the Red Chamber" , "Cao Xueqin" , "Chinese" , "1754-1791" , "100 million"],
  ["The Hobbit" , "J.R.R. Tolkien" , "English" , "1937" , "100 million"],
  ["She: A History of Adventure" , "H. Rider Haggard" , "English" , "1887" , "100 million"]
];


var Excel = React.createClass ({
  render: function () {
    return (
      React.DOM.table(null,
        React.DOM.thead(null,
          React.DOM.tr(null,
            this.props.headers.map(function(title){
              return React.DOM.th(null,title);
            })
          )
        )
      )
    )
  }
});

ReactDOM.render(
  React.createElement(Excel,{
    headers: headers,
    initialData: data,
  }),
  document.getElementById("app")
);
