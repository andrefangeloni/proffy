import express from 'express';

import ClassesControllers from './controllers/ClassesControllers';

const routes = express.Router();

routes.get('/classes', ClassesControllers.index);
routes.post('/classes', ClassesControllers.create);

export default routes;
