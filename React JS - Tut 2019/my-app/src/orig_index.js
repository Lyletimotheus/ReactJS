import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

function MyApp() {
    return (
        <div>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
            <ol>
                <li>Homework</li>
                <li>Grocery Shopping</li>
                <li>Petrol</li>
            </ol>
        </div>
    )
}

// JSX 
// ReactDOM.render(<div><h1>Hello World, from React!</h1><p>This is a paragraph</p></div>, document.getElementById("root"));

// Creating a list items of 3 with any items in it
ReactDOM.render(
    <MyApp /> ,
    document.getElementById("root")
);


