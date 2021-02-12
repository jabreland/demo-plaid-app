import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import AccountTable from '../accountsTable/AccountsTable';
import AccountTransactions from '../accountTransactionsView/AccountTransactions';

function BankAccountsView() {
    let {path} = useRouteMatch();
        return(
        <Switch>
            <Route exact path={path}>
            <AccountTable />
            </Route>
            <Route path={`${path}/:id`}>
                <AccountTransactions />
            </Route>
        </Switch>
    );
}

export default BankAccountsView
