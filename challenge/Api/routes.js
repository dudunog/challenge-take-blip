import express from 'express';
const routes = express.Router();
import { repositoriesJson } from './src/controllers/repositories-controller.js'

routes.get('/', repositoriesJson)

export default routes;