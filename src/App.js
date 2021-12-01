import React from 'react'
import './App.css';


function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch('https://csci-331-snow-project.herokuapp.com/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
            .then(returnedData => {
                setData(returnedData)

            })
    }, []);

    return (
        <div>
            <h2>test</h2>
            <h3>{data}</h3>
            <h2>test</h2>
        </div>
    );
}

export default App;
