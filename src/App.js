import React from 'react'
import './App.css';


function App() {
  // const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://csci-331-snow-project.herokuapp.com/api/')
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      }).catch(err=>{
      console.log(err)
  })}, []);

  

  return (
    <body>
      <h2>test</h2>
      {/* <h3>{data}</h3> */}
      <h2>test</h2>

    </body>
  );
}

export default App;
