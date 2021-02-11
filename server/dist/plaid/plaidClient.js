"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var plaid_1 = __importDefault(require("plaid"));
function newPlaidClient(clientID, secret) {
    return new plaid_1.default.Client({
        clientID: clientID,
        secret: secret,
        env: plaid_1.default.environments.sandbox,
        options: {
            version: '2020-09-14',
        },
    });
}
exports.default = newPlaidClient;
