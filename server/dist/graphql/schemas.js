"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var graphql_1 = require("graphql");
exports.schema = graphql_1.buildSchema("\ntype Balance {\n  available: Float\n  current: Float\n  iso_currency_code: String\n  limit: String\n  unofficial_currency_code: String\n}\n\ntype Account {\n  account_id: String,\n  balances: Balance\n  mask: String\n  name: String\n  official_name: String\n  subtype: String\n  type: String\n} \n\ntype Items {\n  available_products: [String]\n  billed_products: [String],\n    consent_expiration_time: String\n    error: String\n    institution_id: String\n    item_id: String\n    webhook: String\n}\n\ntype Accounts {\n  accounts: [Account]\n}\n\ntype Query {\n  getAccounts: [Account]\n  getPublicKey: String\n}\n\ntype Mutation {\n  exchangeLinkToken(token: String): String\n}\n");
