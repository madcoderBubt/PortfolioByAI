import express from 'express';
import cors from 'cors';
import portfolioRoutes from './routes/portfolio.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/portfolio', portfolioRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'OK', message: 'Portfolio API is running' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Portfolio API server is running on port ${PORT}`);
});
