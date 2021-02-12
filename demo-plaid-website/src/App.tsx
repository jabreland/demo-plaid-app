import React, { useState } from 'react';
import BankAccountsView from './components/pages/AllAccountsView';
import MainNav from './components/MainNav';
import PlaidLinkModal from './components/PlaidLinkModal';
import { Redirect, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { useQuery } from '@apollo/client';
import { PUBLIC_KEY_QUERY } from './graphQL/queries';

interface State{
  getPublicKey: string;
}

function App() {
  const { data, error, loading } = useQuery<State>(PUBLIC_KEY_QUERY);
  const [ connected, setConnected ] = useState<boolean>(false);
  const [ modalVisible, setModalVisible ] = useState<boolean>(true);

  const confirmLink = () => {
    setConnected(true);
    setModalVisible(false)
  }

  return (
    <div>
      <MainNav />
      <Router>
        <div>
          <Route exact path="/">
           {connected ? <Redirect to="/accounts" /> : <Home />}
          </Route>
          <Route path="/accounts">
            <BankAccountsView />
          </Route>
        </div>
      </Router>
      {(!loading && !error) && 
      (<PlaidLinkModal show={modalVisible} handleClose={setModalVisible} publicToken={data?.getPublicKey} confirmLinked={confirmLink} />)}
    </div>
  );
}

export default App;