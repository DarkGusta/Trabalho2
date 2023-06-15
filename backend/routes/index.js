import Router from 'express';

import { todoRoutes } from './todo.routes.js';
import { usersRoutes } from './user.routes.js';
import { workExpRoutes } from './workExp.routes.js';
import { educationRoutes } from './education.routes.js';

const api = Router();
// http://localhost:4242/api/todo ....
api.use('/todo', todoRoutes);

// http://localhost:4242/api/user ....
api.use('/user', usersRoutes);

// http://localhost:4242/api/workexp ....
api.use('/workexp', workExpRoutes);

// http://localhost:4242/api/education ....
api.use('/education', educationRoutes);

export { api };
