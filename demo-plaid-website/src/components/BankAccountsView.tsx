import { useQuery } from '@apollo/client'
import React, { useCallback } from 'react'
import { ALL_ACCOUNTS_QUERYS } from '../graphQL/queries'

interface Balance {
    current: number;
    iso_currency_code: string;
}

interface Account {
    name: string;
    id: string;
    type: string;
    subtype: string;
    balance: Balance;
}

interface Accounts {
  getAccounts: Array<Account>;
}

function BankAccountView() {
    const {data, loading, } = useQuery<Accounts>(ALL_ACCOUNTS_QUERYS)
    
    if(loading) {
    return (<div>
        Loading
        </div>)
    } else {
        return(
        <div>
            {data?.getAccounts.map((account: Account) =><div>{account.name}</div>)}
        </div>
        );
    }
}

export default BankAccountView
