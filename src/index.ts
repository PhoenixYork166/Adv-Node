import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
const app = express();
import { router } from './routes/route';

import cluster from 'cluster';


console.log(`\ncluster.isPrimary: `);
console.log(cluster.isPrimary);

app.use('/', router);

const port = process.env.PORT || 3008;
// const DATABASE_URL = process.env.DATABASE_URL
app.listen(port, () => {
    console.log(`\nNode app is up & running on port: ${port}\n`);
})