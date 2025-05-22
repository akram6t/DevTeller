import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import http from 'http';
import { explainByAi } from './utils/ai-explain.js';

const app = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.use(cors({
    origin: [process.env.FRONTEND_URL, 'http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/code-explain', async (req, res) => {
    try {
        const { code } = req.body;
        if (!code) {
            throw new Error("please provide Code");
        }

        const data = await explainByAi(code);

        return res.json({ data });

    } catch (error) {
        return res.json({ error: "Unable to explain the code!", message: error.message.toString() }, 400);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



// This is a self-ping mechanism to keep the server alive
import https from 'https';
const SELF_URL = process.env.SELF_URL;

setInterval(() => {
    https.get(SELF_URL, (res) => {
        console.log("Self-ping successful");
    });
}, 1000 * 60 * 4); // Every 4 minutes   
