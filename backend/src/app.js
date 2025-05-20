import 'dotenv/config';
import express  from 'express';
import cors from 'cors';
import http from 'http';
import bodyParser from 'body-parser';
import { explainByAi } from './utils/ai-explain.js';

const app = express();

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/code-explain', async (req, res) => {
    try{        
        const { code } = req.body;
        if(!code){
            throw new Error("please provide Code");
        }

        const data = await explainByAi(code);
        res.json({ data });

    }catch(error){
        return res.json({ error: "Unable to explain the code!", message: error.message.toString() }, 400);
    }
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});