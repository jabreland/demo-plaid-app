import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { HELLO_QUERY } from './graphQL/queries';

interface State{
  hello: string;
}

function App() {
  const { data } = useQuery<State>(HELLO_QUERY);

  return (
    <div className="App">
      <header className="App-header">
        {data?.hello}
      </header>
    </div>
  );
}

export default App;
