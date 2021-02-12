import { Account } from 'plaid';
import newPlaidClient from '../plaid/plaidClient';
import { PLAID_CLIENT_ID, PLAID_SECRET } from '../config/config';

const plaid = newPlaidClient(PLAID_CLIENT_ID, PLAID_SECRET);

let accessToken: string = null;

interface ExchangeLinkToken {
  token: string;
}

export const resolvers = {
  async getAccounts(): Promise<Account[]> {
    const { accounts } = await plaid.getAccounts(accessToken);
    console.log(accounts);
    return accounts;
  },
  async getPublicKey(): Promise<string> {
    const response = await plaid
      .createLinkToken({
        user: {
          client_user_id: '123-test-user-id',
        },
        client_name: 'JAB_DEMO_APP',
        products: ['auth', 'transactions', 'investments'],
        country_codes: ['CA', 'GB', 'US'],
        language: 'en',
      })
      .catch((err) => console.error(err));
    if (response) {
      return response.link_token;
    }
  },

  async exchangeLinkToken({ token }: ExchangeLinkToken): Promise<string> {
    console.log('Captain?');
    const response = await plaid.exchangePublicToken(token).catch((e) => {
      console.log(e);
    });
    if (response) {
      accessToken = response?.access_token;
    }
    console.log('New Token:', accessToken);
    return accessToken;
  },
};
