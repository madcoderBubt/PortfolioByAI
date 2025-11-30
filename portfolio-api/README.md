# Portfolio API

API server for the portfolio application.

## Installation

```bash
npm install
```

## Running the Server

Development mode (with auto-restart):
```bash
npm run dev
```

Production mode:
```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

- `GET /health` - Health check endpoint
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/profile` - Get profile data
- `GET /api/portfolio/about` - Get about data
- `GET /api/portfolio/skills` - Get skills data
- `GET /api/portfolio/experience` - Get experience data
- `GET /api/portfolio/projects` - Get projects data
