"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
/* Calling Router from express.Router() method
router is a pluggable mini-Express app */
const router = express_1.default.Router();
exports.router = router;
const common_1 = require("../controllers/common");
/* Adding a Filter '/admin' before all Express routes below
in rootDir/app.js */
/* Registering http://localhost:3005/admin/add-product
=> Express Router GET request handler */
router.get('/', common_1.commonController);
//# sourceMappingURL=route.js.map