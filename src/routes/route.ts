import express from 'express';
/* Calling Router from express.Router() method
router is a pluggable mini-Express app */
const router = express.Router();

import { commonController } from '../controllers/common';

/* Adding a Filter '/admin' before all Express routes below
in rootDir/app.js */
/* Registering http://localhost:3005/admin/add-product 
=> Express Router GET request handler */
router.get('/', commonController);

export { router };