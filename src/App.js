import React from 'react'
import './App.css';
import axios from 'axios';




function App() {
    const [data, setData] = React.useState(null);

    const getFromApi = () => {
        axios.get('https://csci-331-snow-project.herokuapp.com/apidb')
            .then(response => {
                console.log(JSON.stringify(response.data, null, " "));
                const info = response.data;
                setData(info);
            })
            .catch(error => console.error(error));
    }

    React.useEffect(() => getFromApi(), []);

    return (
        <div>
            <h2>test</h2>
            <h3>{ data[0].snow }</h3>
            <h2>test</h2>
            {/* <button onClick={getFromApi()}> this is a button</button> */}
        </div>
    );
}

export default App;
