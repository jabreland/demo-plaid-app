import { Account, TransactionsResponse, TransactionsRequestOptions } from 'plaid';
import newPlaidClient from '../plaid/plaidClient';
import { PLAID_CLIENT_ID, PLAID_SECRET } from '../config/config';
import { DateTime } from 'luxon';

const plaid = newPlaidClient(PLAID_CLIENT_ID, PLAID_SECRET);

let accessToken: string = null;

interface ExchangeLinkToken {
  token: string;
}

interface Transactions {
  account_id: string;
}

export const resolvers = {
  async getAccounts(): Promise<Account[]> {
    const { accounts } = await plaid.getAccounts(accessToken);
    return accounts;
  },

  async getTransactions({ account_id }: Transactions): Promise<TransactionsResponse> {
    const today = DateTime.local().setZone('America/New_York');
    const todayFormatted = today.toFormat('yyyy-MM-dd');
    const minus30daysFormatted = today.minus({ days: 30 }).toFormat('yyyy-MM-dd');

    const response = await plaid.getTransactions(accessToken, minus30daysFormatted, todayFormatted, {
      account_ids: [account_id],
    });
    return { ...response };
    //return account_id;
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

/*{
      account_ids: [account_id],
    } */
