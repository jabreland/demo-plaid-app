import { useQuery } from '@apollo/client'
import React from 'react'
import { Spinner, Table } from 'react-bootstrap'
import ContentLoader from 'react-content-loader'
import { ALL_ACCOUNTS_QUERYS } from '../../graphQL/queries'
import BankAccountTableRow, {Account} from './BankAccountTableRow'


interface Accounts {
  getAccounts: Array<Account>;
}

export default function BankAccountTable() {
    const { data, loading } = useQuery<Accounts>(ALL_ACCOUNTS_QUERYS)
    
    if(loading) {
    return <ContentLoader />
    }
    return (
        <Table>
            <thead>
                <tr>
                    <th>Account Name</th>
                    <th>Type</th>
                    <th>Version</th>
                    <th>Available Balance</th>
                </tr>
            </thead>
            <tbody>
                   {!loading && data?.getAccounts.map((account: Account) => 
                       <BankAccountTableRow 
                        name={account.name} 
                        account_id={account.account_id} 
                        balances={account.balances} 
                        type={account.type} 
                        subtype={account.subtype} />
                      )
                    }
             </tbody>
        </Table>
        )
        
}