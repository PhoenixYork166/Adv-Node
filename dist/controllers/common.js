"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.commonController = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const doWork_1 = require("../util/doWork");
const commonController = (req, res, next) => {
    const route = `http://localhost:${process.env.PORT}/`;
    (0, doWork_1.doWork)(5000);
    console.log(`Express route:\nHosting ${route}\n`);
    res.send(`Hello world!`);
};
exports.commonController = commonController;
//# sourceMappingURL=common.js.map