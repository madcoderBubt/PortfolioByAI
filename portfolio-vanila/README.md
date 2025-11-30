# Personal Portfolio Website

A modern, responsive personal portfolio website designed to showcase your skills, experience, and projects. Built with a focus on aesthetics and user experience, featuring a stunning **Glassmorphism** design and dynamic content loading.

![Portfolio Preview](assets/preview.jpg)
*(Note: Add a preview image to your assets folder named preview.jpg)*

## ✨ Features

- **🎨 Modern Glassmorphism Design**: Sleek, semi-transparent UI elements with backdrop blur effects.
- **🌓 Dark & Light Mode**: Fully supported theme switcher with persistent preference saving.
- **📱 Fully Responsive**: Optimized layout for desktops, tablets, and mobile devices.
- **⚡ Dynamic Content**: All content (profile, skills, experience, projects) is loaded dynamically from a single `data.json` file, making updates effortless.
- **🔍 Skills Filtering**: Interactive category-based filtering for the skills section.
- **💼 Experience Timeline**: Visual timeline to display professional history with location and skill tags.
- **📂 Project Modals**: Detailed modal views for projects with technology tags, links, and status indicators.
- **🚀 Performance**: Lightweight vanilla JavaScript and CSS with no heavy framework dependencies.

## 🛠️ Technologies Used

- **HTML5**: Semantic structure.
- **CSS3**: Custom properties (variables), Flexbox, Grid, and Glassmorphism effects.
- **JavaScript (ES6+)**: Dynamic rendering, DOM manipulation, and event handling.
- **Font Awesome**: Scalable vector icons.
- **Google Fonts**: Inter and Fira Code typography.

## 🚀 Getting Started

You can run this project locally using any static file server.

### Prerequisites

- A modern web browser.
- (Optional) Node.js installed for running a local server.

### Installation & Run

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/madcoderBubt/PortfolioByAI.git
    cd PortfolioByAI
    ```

2.  **Run locally (using Python):**
    ```bash
    # Python 3.x
    python -m http.server 8000
    ```

3.  **Run locally (using Node.js `http-server`):**
    ```bash
    npx http-server
    ```

4.  **Open in Browser:**
    Navigate to `http://localhost:8000` (or the port shown in your terminal).

## ⚙️ Customization

Updating your portfolio is easy! You don't need to touch the HTML or JavaScript code for most changes. Just edit the `data.json` file in the root directory.

### `data.json` Structure

- **`profile`**: Personal details, contact info, and social links.
- **`objective`**: Short professional summary.
- **`about`**: Detailed bio.
- **`skills`**: List of skills with categories (Languages, Frameworks, Tools, etc.).
- **`experience`**: Professional history array.
- **`projects`**: Project details including:
    - `status`: "Continuous" or "Complete" (affects badge display).
    - `category`: "Web", "Desktop", "Mobile", etc.
    - `technologies`: Array of tech stacks used.

### Changing Images

Place your images in the `assets/` folder and update the paths in `data.json`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/madcoderBubt/PortfolioByAI/issues).

---

**Designed & Developed with ❤️**
