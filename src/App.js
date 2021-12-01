import React from 'react'
import './App.css';


function App() {
    const [data, setData] = React.useState(null);

    const getFromApi = () => {
        axios.get('https://csci-331-snow-project.herokuapp.com/apidb')
            .then(response => {
                // console.log(JSON.stringify(response.data, null, " "));
                const info = response.data;
                setData(info);
            })
            .catch(error => console.error(error));
    }

    useEffect(() => getFromApi(), []);

    return (
        <div>
            <h2>test</h2>
            <h3>{data}</h3>
            <h2>test</h2>
        </div>
    );
}

export default App;
