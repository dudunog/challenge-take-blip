import http from 'http'
import debug from 'debug'
import express from 'express';
import routes from './routes.js';

const app = express();

const server = http.createServer(app);

app.use(routes);

app.listen(process.env.PORT || 3000);