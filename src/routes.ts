import { Router } from 'express';
import { UserController } from './controller/UserController';
import { CarController } from './controller/CarContoller';

const routes = Router();

//Users
routes.post('/user', new UserController().create);
routes.get('/user', new UserController().list);

routes.post('/car', new CarController().create);

export default routes;
