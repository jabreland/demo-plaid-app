import React, { ReactElement, useCallback } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { LINK_TOKEN, PUBLIC_KEY_QUERY } from './graphQL/queries';
import { usePlaidLink } from 'react-plaid-link';
import BankAccountView from './components/BankAccountsView';

interface State{
  getPublicKey: string;
}

interface LinkButtonProps {
  publicToken: string
}

function LinkButton({publicToken}: LinkButtonProps): ReactElement {
  const [sendLinkToken, {data}] = useMutation(LINK_TOKEN);
  
  const onSuccess = useCallback((token) => {

    try{
    sendLinkToken({variables: { token: token }})
    } catch(e) {
      console.log(e.message)
    }
  }, []);

  const config = {
    token: publicToken,
    onSuccess
  }

  const { open, ready, error } = usePlaidLink(config)

  if(error) {
    console.log("Error:", error?.message)
  } 

  return  <div>
    Access Token {(data) ? data.toString() : ''}
    <button onClick={() => open()} disabled={!ready}>Click ME!</button>
    </div>
}


function App() {
  const { data, error } = useQuery<State>(PUBLIC_KEY_QUERY);

  return (
    <div className="App">
      {error?.message}
      <header className="App-header">
        Linktoken {data?.getPublicKey}
        Here we be!
        {data?.getPublicKey && <LinkButton publicToken={data.getPublicKey} /> }
      </header>
      <BankAccountView />
    </div>
  );
}

export default App;
