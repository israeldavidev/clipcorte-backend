const express = require('express');
const router = express.Router();
const { processVideo } = require('../services/processVideo');

router.post('/', async (req, res) => {
  const { videoUrl, theme } = req.body;

  if (!videoUrl || !theme) {
    return res.status(400).json({ error: 'Faltando vídeo ou tema' });
  }

  try {
    const finalUrl = await processVideo(videoUrl, theme);
    res.json({ url: finalUrl });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao processar vídeo', details: err.message });
  }
});

module.exports = router;
