"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.context = void 0;
var async_hooks_1 = require("async_hooks");
exports.context = new async_hooks_1.AsyncLocalStorage();
