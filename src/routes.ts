import { Router } from 'express';
import { UserController } from './controller/UserController';
import { CarController } from './controller/CarContoller';

const routes = Router();

//Users
routes.get('/user', new UserController().list);
routes.post('/user', new UserController().create);
routes.post('/user-login', new UserController().login);

//Cars
routes.get('/car', new CarController().list);
routes.post('/car', new CarController().create);

export default routes;
