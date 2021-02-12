import React from 'react'
import { Transaction } from './AccountTransactions'

import { convertToCurrency } from '../accountsTable/AccountTableRow';

export default function Transactions({date, amount, location, name, payment_channel}: Transaction) {

  const cost = convertToCurrency({current: parseFloat(amount), iso_currency_code: 'CAD'});
    return (
        <tr>
            <td>{date}</td>
            <td>{name}</td>
            <td>{location.city} {location.country}</td>
            <td>{payment_channel}</td>
            <td>{cost}</td>
        </tr>
    )
}
