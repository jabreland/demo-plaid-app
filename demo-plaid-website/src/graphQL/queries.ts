import { gql } from '@apollo/client'

export const ALL_ACCOUNTS_QUERYS = gql`
{
  getAccounts {
		account_id
    name
    balances{
      current
      iso_currency_code
    }
    type
    subtype
  }
}
`
export const PUBLIC_KEY_QUERY = gql`
{
  getPublicKey
}
`

export const LINK_TOKEN = gql`
  mutation exchangeLinkToken(
    $token: String!
  ) {
    exchangeLinkToken(token: $token)
  }
`


