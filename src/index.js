import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

const PORT = process.env.PORT || 3333;
const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('combined'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
