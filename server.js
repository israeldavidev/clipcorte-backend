import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Simula processamento de vídeo
app.post('/process-video', (req, res) => {
  res.json({ jobId: '12345' });
});

// Simula verificação de status
app.get('/video-status', (req, res) => {
  res.json({ status: 'completed', videoUrl: 'https://example.com/edited-video.mp4' });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
