import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';
import TarefasController from './app/controllers/TarefasController';



const routes = new Router();
routes.post('/login', SessionController.store);
routes.post('/signup', UserController.store);
routes.use(authMiddleware);
/*rotas so serao acessadas com o jwttoken*/
routes.put('/admins/:id', UserController.update);
routes.delete('/admins/:id', UserController.delete);
routes.post('/tarefas', TarefasController.store);
routes.put('/tarefas/:id', TarefasController.update);
routes.get('/tarefas/:userId', TarefasController.listartarefas);
routes.delete('/tarefas/:id', TarefasController.delete);




module.exports = routes;