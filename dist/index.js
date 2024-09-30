"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const route_1 = require("./routes/route");
const cluster_1 = __importDefault(require("cluster"));
console.log(`\ncluster.isPrimary: `);
console.log(cluster_1.default.isPrimary);
app.use('/', route_1.router);
const port = process.env.PORT || 3008;
// const DATABASE_URL = process.env.DATABASE_URL
app.listen(port, () => {
    console.log(`\nNode app is up & running on port: ${port}\n`);
});
//# sourceMappingURL=index.js.map