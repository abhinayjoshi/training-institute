const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5001;

app.use(express.static(path.join(__dirname, 'dist/training-institute')));

app.listen(PORT, (req, res) => {
  console.log('Running');
})

app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/training-institute/index.html'))
});


