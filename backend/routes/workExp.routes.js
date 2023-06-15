import { Router } from 'express';
import { createWorkExp, getAllWorkExp, deleteWorkExpByName, updateWorkExpByName } from '../controllers/workExp.controller.js';

// Create a new router
const workExpRoutes = Router();

// Route: POST /api/workexp/create
workExpRoutes.post('/create', createWorkExp);

// Route: GET /api/workexp/getall
workExpRoutes.get('/getall', getAllWorkExp);

// Route: DELETE /api/workexp/delete/:name
workExpRoutes.delete('/delete/:name', deleteWorkExpByName);

// Route: PUT /api/workexp/edit
workExpRoutes.put('/edit/:name', updateWorkExpByName);

export { workExpRoutes };
