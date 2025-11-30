import express from 'express';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Helper function to read data
async function getPortfolioData() {
    const dataPath = join(__dirname, '../data/data.json');
    const data = await readFile(dataPath, 'utf-8');
    return JSON.parse(data);
}

// GET /api/portfolio - Get all portfolio data
router.get('/', async (req, res) => {
    try {
        const data = await getPortfolioData();
        res.json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch portfolio data' });
    }
});

// GET /api/portfolio/profile - Get profile data
router.get('/profile', async (req, res) => {
    try {
        const data = await getPortfolioData();
        res.json(data.profile);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch profile data' });
    }
});

// GET /api/portfolio/skills - Get skills data
router.get('/skills', async (req, res) => {
    try {
        const data = await getPortfolioData();
        res.json(data.skills);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch skills data' });
    }
});

// GET /api/portfolio/experience - Get experience data
router.get('/experience', async (req, res) => {
    try {
        const data = await getPortfolioData();
        res.json(data.experience);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch experience data' });
    }
});

// GET /api/portfolio/projects - Get projects data
router.get('/projects', async (req, res) => {
    try {
        const data = await getPortfolioData();
        res.json(data.projects);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch projects data' });
    }
});

// GET /api/portfolio/about - Get about data
router.get('/about', async (req, res) => {
    try {
        const data = await getPortfolioData();
        res.json(data.about);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch about data' });
    }
});

export default router;
