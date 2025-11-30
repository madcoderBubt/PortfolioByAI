# Portfolio Repository

This repository contains a full-stack portfolio application with multiple implementations demonstrating different approaches.

## Projects

### 1. Portfolio API (`portfolio-api`)
A Node.js/Express REST API server that provides portfolio data endpoints.

**Tech Stack:**
- Node.js
- Express
- CORS

**Getting Started:**
```bash
cd portfolio-api
npm install
npm run dev
```

The API server runs on `http://localhost:5000`

**API Endpoints:**
- `GET /health` - Health check
- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/profile` - Get profile data
- `GET /api/portfolio/skills` - Get skills data
- `GET /api/portfolio/experience` - Get experience data
- `GET /api/portfolio/projects` - Get projects data

---

### 2. Portfolio React (`portfolio-react`)
A modern, component-based implementation using React and Vite with SCSS styling.

**Tech Stack:**
- React 19
- Vite
- SCSS (Sass)
- ESLint

**Getting Started:**
```bash
cd portfolio-react
npm install
npm run dev
```

**Note:** The React app fetches data from the API server. Make sure the API server is running on port 5000.

---

### 3. Portfolio Vanilla (`portfolio-vanila`)
A lightweight implementation using pure HTML, CSS, and JavaScript.

**Tech Stack:**
- HTML5
- CSS3
- Vanilla JavaScript

**Getting Started:**
Simply open the `index.html` file located in the `portfolio-vanila` directory in your web browser.

## Running the Full Stack

To run the complete application:

1. **Start the API server:**
   ```bash
   cd portfolio-api
   npm run dev
   ```

2. **Start the React app (in a new terminal):**
   ```bash
   cd portfolio-react
   npm run dev
   ```

3. Open your browser to the URL shown by Vite (typically `http://localhost:5173`)

