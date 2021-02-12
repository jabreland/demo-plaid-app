import React from 'react'
import { Link } from 'react-router-dom';

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

export const convertToCurrency = ({current, iso_currency_code}: Balance) => new Intl.NumberFormat('en-CA', {style: 'currency', currency: iso_currency_code || 'cdn' }).format(current);

export default function AccountTableRow({name, account_id, type, subtype, balances}: Account) {
    return (
        <tr>
            <td>{name}</td>
            <td>{type}</td>
            <td>{subtype}</td>
            <td className='d-flex justify-content-end pr-4'><span>{convertToCurrency(balances)}</span></td>
            <td>
            <Link to={`/accounts/${account_id}`}>
                View Account
            </Link>
            </td>
        </tr>
        )
}
