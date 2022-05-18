// THINGS WE ONLY IMPORT
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// react router, app component 

// import logo from './assets/logo.png';

// ****** Creating a custom component *****
// function MainContent() {
//   return <h1>I'm learning react!</h1>
// }

// ReactDOM.render(
//   <div>
//     <MainContent />
//   </div>, 
//   document.getElementById("root")
// );


// ****** This is how we would write the code imperatively ****** 
// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.textContent += "I am a heading 1";
// heading.className += "header";
// root.appendChild(heading);


// ****** JSX ****** 
// We need to return only one element when we are using JSX (wrap the content in a div for example)
// const page = (
//   <div>
//     <h1 className="header">This is JSX</h1>
//     <p>This is a p tag.</p>
//   </div>
// );

// seeing what the page constant returns 
// console.log(page);

// ReactDOM.render(
//   page,
//   document.getElementById('root')
// );


// ****** CHALLENGE ******
// Create a navbar in JSX 
// const root = document.getElementById('root');
// const navBar = (
//   <nav>
//     <h1>Brand Name</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// ****** using append instead of render to display our JSX ******
// root.append(JSON.stringify(navBar));
// The above returns ----- 
// {
//   "type":"nav",
//   "key":null,
//   "ref":null,
//   "props":{
//     "children":[{
//       "type":"h1",
//       "key":null,
//       "ref":null,
//       "props":{
//         "children":"Brand Name"
//       },
//       "_owner":null,
//       "_store":{}
//     },
//       {
//         "type":"ul",
//         "key":null,
//         "ref":null,
//         "props":{
//           "children":[{
//             "type":"li",
//             "key":null,
//             "ref":null,
//             "props":{
//               "children":"Pricing"
//             },
//             "_owner":null,
//             "_store":{}
//           },
//           {
//             "type":"li",
//             "key":null,
//             "ref":null,
//             "props":{
//               "children":"About"
//             },
//             "_owner":null,
//             "_store":{}
//           },
//           {
//             "type":"li",
//             "key":null,
//             "ref":null,
//             "props":{
//               "children":"Contact"
//             },
//             "_owner":null,
//             "_store":{}
//           }]},
//           "_owner":null
//           ,"_store":{}
//         }]},
//         "_owner":null,
//         "_store":{}}

// PROJECT ONE - STATIC CONTENT 
// const page = (
//   <div>
//     <img src={logo} alt="React Logo" width="40"/>
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100k stars on Github</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

ReactDOM.render(<App />, document.getElementById('root')); 
