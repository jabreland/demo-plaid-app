import React from 'react'

interface Balance {
    current: number;
    iso_currency_code: string;
}

export interface Account {
    name: string;
    account_id?: string;
    type: string;
    subtype: string;
    balances: Balance;
}

const convertToCurrency = ({current, iso_currency_code}: Balance) => new Intl.NumberFormat('en-CA', {style: 'currency', currency: iso_currency_code }).format(current);

export default function BankAccountTableRow({name, account_id, type, subtype, balances}: Account) {
    return (
        <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>{subtype}</td>
            <td>{convertToCurrency(balances)}</td>
        </tr>
        )
}
