import React from 'react'
import './App.css';
import { useState } from 'react';

function App() {
  const [data, setData] = React.useState(null);
  const [value, onChange] = useState('10:00');

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <body class="bg-gray-200 bg-h-min text-center min-h-screen">

      <div class="flex h-screen ">
        <div class="m-auto text-grey-1000 font-">
          <h3>{data}</h3>
        </div>
      </div>
    </body>
    
  );
}

export default App;
