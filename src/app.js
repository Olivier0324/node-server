import express from 'express';
import usersRoutes from './routes/users.routes.js';
export const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.status(200).send({
        message: 'API is running...'
    });
});
app.use('/api/v1/users', usersRoutes);

