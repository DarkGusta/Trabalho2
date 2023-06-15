import Router from 'express';
import { createEducation, getAllEducation, deleteEducationByName , updateEducationByName } from '../controllers/education.controller.js';

// Create a new router
const educationRoutes = Router();

// Route: POST /api/education/create
educationRoutes.post('/create', createEducation);

// Route: GET /api/education/getall
educationRoutes.get('/getall', getAllEducation);

// Route: DELETE /api/education/delete
educationRoutes.delete('/delete/:name', deleteEducationByName);

// Route: PUT /api/education/edit
educationRoutes.put('/edit/:name', updateEducationByName);

export { educationRoutes };
