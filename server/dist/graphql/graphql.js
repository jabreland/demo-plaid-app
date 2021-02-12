"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlEndPoint = void 0;
var express_graphql_1 = require("express-graphql");
var rootResolver_1 = require("./rootResolver");
var schemas_1 = require("./schemas");
exports.graphqlEndPoint = express_graphql_1.graphqlHTTP({
    schema: schemas_1.schema,
    rootValue: rootResolver_1.resolvers,
    graphiql: true,
});
