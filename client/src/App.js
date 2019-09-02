import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
const App = () => {
    const [message, setMessage] = useState({text: ''});

    useEffect(() => {
        fetch('/api/test-data')
        .then((response) => response.json() )
        .then((data) => setMessage(data));
    }, []);
        
    return (
        <div>
            <h1>Hello from React!</h1>
            <p>Message from server: {message.text }</p>
        </div>
    );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
