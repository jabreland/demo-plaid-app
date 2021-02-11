"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PLAID_ENV = exports.PLAID_SECRET = exports.PLAID_CLIENT_ID = exports.PORT = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var result = dotenv_1.default.config();
if (result.error) {
    console.error(result.error);
}
exports.PORT = (_a = process.env, _a.PORT), exports.PLAID_CLIENT_ID = _a.PLAID_CLIENT_ID, exports.PLAID_SECRET = _a.PLAID_SECRET, exports.PLAID_ENV = _a.PLAID_ENV;
// export { PORT, PLAID_CLIENT_ID, PLAID_SECRET, PLAID_ENV };
