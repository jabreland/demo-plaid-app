"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var graphql_1 = require("graphql");
exports.schema = graphql_1.buildSchema("\n type Query {\n  hello: String\n}\n");
