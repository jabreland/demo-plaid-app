"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var graphql_1 = require("./graphql");
var app = express_1.default();
app.use('/graphql', graphql_1.graphqlEndPoint);
app.get("/api/hello", function (req, res) {
    var data = { hello: 'Hello world!' };
    console.log('Weve been hit Captain!');
    res.send(data);
});
var port = '7777';
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});