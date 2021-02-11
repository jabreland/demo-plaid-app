import dotenv from 'dotenv';

const result = dotenv.config();

if (result.error) {
  console.error(result.error);
}

export const { PORT, PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV } = process.env;

// export { PORT, PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV };
