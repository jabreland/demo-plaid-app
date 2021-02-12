import { useQuery } from '@apollo/client'
import React from 'react'
import { Table } from 'react-bootstrap';
import ContentLoader from 'react-content-loader';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ACCOUNT_TRANSACTION } from '../../graphQL/queries'

import { Account, convertToCurrency } from '../accountsTable/AccountTableRow';
import Transactions from './Transactions';

export interface Transaction {
    date: string;
    amount: string;
    location: {
        "city": string;
        "country": string;
    },
    name: string;
    payment_channel: string;
}

export interface IAccountTransactions{
    getTransactions : {
    transactions : Array<Transaction>,
    accounts: Array<Account>
    }
}

const OutterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    min-height: 100vh;
    padding: 2rem;
`;

const AccountBlock = styled.div`
    border: solid 1px black; 
    display: flex;
    flex-direction: column;
    width: 30vw;
    height: 20vw;
    padding: 2rem;
`;

const StyledTableWrapper = styled.div`
    width: 60vw;
`;


export default function AccountTransactions() {
    const { id } = useParams<{id:string}>();
        
    const { data, loading } = useQuery<IAccountTransactions>(ACCOUNT_TRANSACTION, {
        variables: { account_id: id}
    })

    console.log(data)
    if(loading) {
        return(<ContentLoader />)
    } else if(data?.getTransactions?.accounts[0]) {
        const {accounts, transactions} = data?.getTransactions;
        const {name, type, subtype, balances } = accounts[0];
    
        const balanceFormatted = convertToCurrency(balances);

        console.log(transactions);
        return (
            <OutterWrapper>
                <AccountBlock>
                    <h2 className="d-flex justify-content-between py-3"> <span>Account:</span><span>{name}</span> </h2>
                    <h3 className="d-flex justify-content-between py-3"> <span>Type:</span> <span>{type}</span></h3>
                    <h4 className="d-flex justify-content-between py-3">  <span>Sub Type:</span> <span>{subtype || "None"}</span></h4>
                    <h5 className="d-flex justify-content-between py-3"> <span>Available Balance</span> <span>{balanceFormatted}</span></h5>
                </AccountBlock>

                <StyledTableWrapper>
                  <div className="d-flex justify-content-between">
                  <h5>Transactions for the last 30 days</h5>
                   <Link to={'/accounts'}> Back To Accounts OverView</Link>
                  </div>
                <Table>
                    <thead>
                        <tr>
                           <th>Date of Transaction</th>
                           <th>Details</th>
                           <th>Location</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                {transactions.map((transaction: Transaction) => {
                    return(
                    <Transactions 
                        date ={transaction.date}
                        location={transaction.location}
                        name={transaction.name}
                        payment_channel={transaction.payment_channel}
                        amount={transaction.amount}
                     />
                    )
            })} 
            </Table>
           
                </StyledTableWrapper>
            </OutterWrapper>
    )
    }
    return(<h1>Error receiving data</h1>)
}
