import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Cambiar __dirname para ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();


// Ruta para el formulario de registro
router.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/form.html'));
});

// Ruta para el listado de usuarios
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/list.html'));
});

export default router;
