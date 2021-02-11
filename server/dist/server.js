"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var graphql_1 = require("./graphql/graphql");
var config_1 = require("./config/config");
var app = express_1.default();
app.use('/graphql', graphql_1.graphqlEndPoint);
var port = config_1.PORT || 7777;
app.listen(port, function () {
    console.log("Server started at http://localhost:" + port);
});
