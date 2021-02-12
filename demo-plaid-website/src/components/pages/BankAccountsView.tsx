import { useQuery } from '@apollo/client'
import React from 'react'
import { Spinner, Table } from 'react-bootstrap'
import { ALL_ACCOUNTS_QUERYS } from '../../graphQL/queries'
import BankAccountTable from '../bankAccountTable/BankAccountTable';

function BankAccountsView() {
        return(
        <div>
            <BankAccountTable />
        </div>
        );
}

export default BankAccountsView
