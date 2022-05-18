import React from 'react';
import ReactDOM from 'react-dom';

// Creating a custom component
function MainContent() {
  return <h1>I'm learning react!</h1>
}


ReactDOM.render(
  <div>
    <MainContent />
  </div>, 
  document.getElementById("root")
);

// This is how we would write the code imperatively 
// const root = document.getElementById("root");
// const heading = document.createElement("h1");
// heading.textContent += "I am a heading 1";
// heading.className += "header";
// root.appendChild(heading);
