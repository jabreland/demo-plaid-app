"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlEndPoint = void 0;
var express_graphql_1 = require("express-graphql");
var root_1 = require("./root");
var schemas_1 = require("./schemas");
exports.graphqlEndPoint = express_graphql_1.graphqlHTTP({
    schema: schemas_1.schema,
    rootValue: root_1.root,
    graphiql: true,
});
