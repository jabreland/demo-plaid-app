import { buildSchema } from 'graphql';

export const schema = buildSchema(`
type Balance {
  available: Float
  current: Float
  iso_currency_code: String
  limit: String
  unofficial_currency_code: String
}

type Account {
  account_id: String,
  balances: Balance
  mask: String
  name: String
  official_name: String
  subtype: String
  type: String
} 

type Items {
  available_products: [String]
  billed_products: [String],
    consent_expiration_time: String
    error: String
    institution_id: String
    item_id: String
    webhook: String
}

type Accounts {
  accounts: [Account]
}

type Query {
  getAccounts: [Account]
  getPublicKey: String
}

type Mutation {
  exchangeLinkToken(token: String): String
}
`);
