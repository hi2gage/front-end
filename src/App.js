import React from 'react'
import './App.css';
import axios from 'axios';




function App() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        getFromApi = () => {
            axios.get('https://csci-331-snow-project.herokuapp.com/apidb')
                .then(response => {
                    console.log(JSON.stringify(response.data, null, " "));
                    const info = response.data;
                    setData(info);
                })
                .catch(error => console.error(error));
        }
    }, []);


    if (!data) return null;

    return (
        <div>
            <h2>test start</h2>
            <h3>{data[0].hr}</h3>
            <h3>{data[0].min}</h3>
            <h3>{data[0].snow}</h3>
            <h2>test end</h2>
        </div>
    );
}

export default App;
