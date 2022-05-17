import React from 'react';
import ReactDOM from 'react-dom';

function MyInfo() {
    return (
        <div>
            <h1 style={{color: "red"}}>Lyle Timotheus</h1>
            <p style={{fontSize: "18px"}}>I5 am doing my first react js project from scratch.</p>
            <hr/>
            <ul>
                <li>South America</li>
                <li>USA</li>
                <li>France</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<MyInfo />, document.getElementById('root'));