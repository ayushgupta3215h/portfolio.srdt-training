# Full Stack Portfolio Project - Ayush Gupta

**Student Roll No:** `202510101240165`  
**Email:** [ayush@gmail.com](mailto:ayush@gmail.com)  
**LinkedIn:** [linkedin.com/in/ayushgupta3215h](https://linkedin.com/in/ayushgupta3215h)  
**GitHub:** [github.com/ayushgupta3215h](https://github.com/ayushgupta3215h)  
**Training:** SRDT Professional Web Development Training  

---

## 🌟 Project Overview

This project is a modern, responsive, and interactive **Full Stack Developer Portfolio** engineered using **HTML5**, **CSS3**, and **JavaScript**, complete with **Frontend UI/UX** and **Backend Architecture & Database Simulation**.

It incorporates:
1. **Frontend Architecture:**
   - Semantic HTML5 structure (Header, Nav, Hero, About, Skills, Projects, Console, Contact, Footer).
   - Modern CSS with custom properties (CSS variables), glassmorphism, responsive CSS Grid and Flexbox layouts.
   - Dark Mode / Light Mode toggle with local state persistence.
   - Dynamic typing role effect and smooth navigation with scroll spy.
   - Dual-tabbed Frontend and Backend technical skills progress indicators.
   - Category-filterable project showcase (All, Full Stack, Frontend, Backend).

2. **Backend Architecture & Database Integration:**
   - **Interactive In-Browser Backend Emulator:** A real-time live terminal and database table viewer built into the webpage. Whenever a user submits the Contact Form or tests an endpoint, it generates HTTP POST request logs, simulates server validation, and commits the record into a persistent local JSON datastore (`localStorage`).
   - **Production-Ready Node.js / Express Server (`server.js`):** A standalone backend server file containing RESTful API endpoints:
     - `GET /api/developer`: Developer info and status check.
     - `GET /api/messages`: Fetches all messages from the database.
     - `POST /api/contact`: Validates incoming payloads and saves records to `messages_database.json`.
     - Static file serving for `index.html`, `style.css`, `script.js`, and `profile.jpg`.

3. **Personal Identification & Photograph:**
   - Prominently showcases the provided profile photo (`profile.jpg`) in the Hero Section and Navbar.
   - Displays Ayush Gupta's full credentials (Name, Roll No: `202510101240165`, Email, LinkedIn, GitHub).

---

## 🚀 How to Run the Project

### Option 1: Direct Browser Launch (No server installation required)
1. Open the folder: `portfolio.srdt training`.
2. Double-click **`index.html`** or right-click and choose **Open with Google Chrome / Microsoft Edge**.
3. The portfolio will run immediately with all styling, animations, interactive contact form, and live backend emulator fully functional!

### Option 2: Run with Node.js Backend Server (If Node.js is installed)
1. Open PowerShell or Terminal in the project folder:
   ```bash
   npm install
   npm start
   ```
2. Open your browser and navigate to:
   ```
   http://localhost:5000
   ```

---

## 📁 File Structure

```
portfolio.srdt training/
│
├── index.html              # Main HTML5 entry point & semantic markup
├── style.css               # Modern CSS styling (Glassmorphism, Dark/Light theme, Grid)
├── script.js               # Interactive frontend logic & backend simulation engine
├── profile.jpg             # Profile photo of Ayush Gupta
├── server.js               # Node.js & Express RESTful API backend server
├── package.json            # Node.js package configuration
└── README.md               # Documentation and submission guide
```

---

## 👨‍💻 Developer Profile
- **Name:** Ayush Gupta
- **Roll No:** 202510101240165
- **Email:** ayush@gmail.com
- **LinkedIn:** https://linkedin.com/in/ayushgupta3215h
- **GitHub:** https://github.com/ayushgupta3215h

