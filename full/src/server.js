import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import frontendRoutes from './routes/frontend.js';
import apiRoutes from './routes/api.js';

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/public', express.static(path.join(__dirname, '../', 'public')));

app.use('/user', frontendRoutes);
app.use('/api/user', apiRoutes);
app.get("/", (req, res) => {
    res.status(301).redirect("/user")
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
