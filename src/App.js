import React from 'react'
import './App.css';


function App() {
  const [data, setData] = React.useState(null);


  React.useEffect(() => {
    fetch("https://csci-331-snow-project.herokuapp.com/api")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  return (
    <body>
      <h2>test</h2>
      <h3>Before +{data} After</h3>

    </body>
  );
}

export default App;
