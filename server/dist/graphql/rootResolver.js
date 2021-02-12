"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
var plaidClient_1 = __importDefault(require("../plaid/plaidClient"));
var config_1 = require("../config/config");
var luxon_1 = require("luxon");
var plaid = plaidClient_1.default(config_1.PLAID_CLIENT_ID, config_1.PLAID_SECRET);
var accessToken = null;
exports.resolvers = {
    getAccounts: function () {
        return __awaiter(this, void 0, void 0, function () {
            var accounts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, plaid.getAccounts(accessToken)];
                    case 1:
                        accounts = (_a.sent()).accounts;
                        return [2 /*return*/, accounts];
                }
            });
        });
    },
    getTransactions: function (_a) {
        var account_id = _a.account_id;
        return __awaiter(this, void 0, void 0, function () {
            var today, todayFormatted, minus30daysFormatted, response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        today = luxon_1.DateTime.local().setZone('America/New_York');
                        todayFormatted = today.toFormat('yyyy-MM-dd');
                        minus30daysFormatted = today.minus({ days: 30 }).toFormat('yyyy-MM-dd');
                        return [4 /*yield*/, plaid.getTransactions(accessToken, minus30daysFormatted, todayFormatted, {
                                account_ids: [account_id],
                            })];
                    case 1:
                        response = _b.sent();
                        return [2 /*return*/, __assign({}, response)];
                }
            });
        });
    },
    getPublicKey: function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, plaid
                            .createLinkToken({
                            user: {
                                client_user_id: '123-test-user-id',
                            },
                            client_name: 'JAB_DEMO_APP',
                            products: ['auth', 'transactions', 'investments'],
                            country_codes: ['CA', 'GB', 'US'],
                            language: 'en',
                        })
                            .catch(function (err) { return console.error(err); })];
                    case 1:
                        response = _a.sent();
                        if (response) {
                            return [2 /*return*/, response.link_token];
                        }
                        return [2 /*return*/];
                }
            });
        });
    },
    exchangeLinkToken: function (_a) {
        var token = _a.token;
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, plaid.exchangePublicToken(token).catch(function (e) {
                            console.log(e);
                        })];
                    case 1:
                        response = _b.sent();
                        if (response) {
                            accessToken = response === null || response === void 0 ? void 0 : response.access_token;
                        }
                        console.log('New Token:', accessToken);
                        return [2 /*return*/, accessToken];
                }
            });
        });
    },
};
/*{
      account_ids: [account_id],
    } */
