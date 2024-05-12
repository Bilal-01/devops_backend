// backend/server.js

const express = require('express');
const cors = require('cors');
const dataRoutes = require('./src/routes/dataRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use('/api/data', dataRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
