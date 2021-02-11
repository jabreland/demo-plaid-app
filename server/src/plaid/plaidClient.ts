import plaid from 'plaid';

export default function newPlaidClient(clientID: string, secret: string): plaid.Client {
  return new plaid.Client({
    clientID,
    secret,
    env: plaid.environments.sandbox,
    options: {
      version: '2020-09-14',
    },
  });
}
