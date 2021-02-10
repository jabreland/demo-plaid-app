import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface State{
  hello: string;
}

async function getHello(): Promise<State>{
  const { data } = await axios.get('/api/hello');
    return data;
}

function useGreeting(): State {
 const [data, setData] = useState<State>({hello:''})
  
  useEffect(() => {
    const fetchData = async () => {
      const result = await getHello()
      setData(result)
      
    }
    fetchData();
  }, [data])
  return data;
}

function App() {
 const data = useGreeting();
  return (
    <div className="App">
      <header className="App-header">
        {data.hello}
      </header>
    </div>
  );
}

export default App;
