"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_graphql_1 = require("express-graphql");
var graphql_1 = require("graphql");
var schema = graphql_1.buildSchema("\n  type Query {\n    hello: String\n  }\n");
var root = {
    hello: function () {
        return 'Hello from GraphQl';
    }
};
var app = express_1.default();
app.use('/graphql', express_graphql_1.graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
}));
app.get("/api/hello", function (req, res) {
    var data = { hello: 'Hello world!' };
    console.log('Weve been hit Captain!');
    res.send(data);
});
var port = '7777';
app.listen(port, function () {
    console.log("server started at http://localhost:" + port);
});
