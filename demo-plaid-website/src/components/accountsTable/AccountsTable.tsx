import { useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import {Table } from 'react-bootstrap'
import ContentLoader from 'react-content-loader'
import styled from 'styled-components'
import { ALL_ACCOUNTS_QUERYS } from '../../graphQL/queries'
import AccountTableRow, {Account} from './AccountTableRow'

export interface Accounts {
  getAccounts: Array<Account>;
}

const Wrapper = styled.div`
    padding: 3em;
`;

const StyledTable = styled(Table)`
    border: solid 2px black;
`;


export default function AccountTable() {
    const [accounts, setAccounts] = useState<Array<Account>>([])
    const { data, loading } = useQuery<Accounts>(ALL_ACCOUNTS_QUERYS)

    useEffect(() =>{
        if(data?.getAccounts) {
            setAccounts(data.getAccounts)
        }
    }, [loading])

    console.log(data);
    
    if(loading) {
    return <ContentLoader />
    }
    return (
        <Wrapper>
            <h1>Accounts Overview</h1>
        <StyledTable>
            <thead>
                <tr>
                    <th>Account Name</th>
                    <th>Type</th>
                    <th>Version</th>
                    <th className='d-flex justify-content-end pr-4'><span>Available Balance</span></th>
                </tr>
            </thead>
            <tbody>
                   {accounts.map((account: Account, index: number) => 
                       <AccountTableRow
                        key={index}
                        name={account.name} 
                        account_id={account.account_id} 
                        balances={account.balances} 
                        type={account.type} 
                        subtype={account.subtype} />
                      )
                    }
             </tbody>
        </StyledTable>
        </Wrapper>
        )
        
}