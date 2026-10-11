# Premkumar Asode — DevOps Engineer & Java Full Stack Developer Portfolio

A modern, responsive, and animated personal portfolio website built with **React**, **Vite**, **Tailwind CSS**, and **Framer Motion** for **Premkumar Asode**, targeting **DevOps Engineer**, **Java Full Stack Developer**, and **Software Developer** positions.

---

## 🚀 Live Demo & Features

- **Cyber Dark / Light Theme**: Obsidian dark mode with glowing cyan, purple, and blue gradients, complete with persistent theme switcher.
- **Hero Cockpit**:
  - Dynamic typewriter effect cycling through professional titles.
  - Profile card featuring Premkumar's portrait photo (`public/premkumar.jpg`).
  - Interactive Unix terminal emulator (`bash`) with custom executable commands (`whoami`, `skills`, `projects`, `pipeline`, `clear`) + Docker and Kubernetes live pods inspection panels.
  - Glowing badges for Core Stack (Java, Spring Boot, React, Docker, Jenkins, Kubernetes, AWS, Terraform).
- **Interactive 9-Stage CI/CD Pipeline Simulator**:
  - `Developer Code → GitHub → Jenkins → Maven Build → Testing → Docker Image → Container Registry → AWS EC2 Deployment → Prometheus and Grafana Monitoring`.
  - Step-by-step interactive inspection and automated deployment runner with real-time logs and celebratory confetti.
- **Searchable Technical Skills**:
  - Filterable by keyword (e.g., "docker", "spring", "aws") and category tabs.
  - Transparent, honest proficiency tags (*Hands-on Practice*, *Practiced in Labs*, *Foundational*).
- **Featured Projects**:
  - 6 comprehensive projects (End-to-End CI/CD Pipeline, Book Nest Bookstore, Dockerized Web App, Personal Finance Management, Exam Seating System, Kubernetes Deployment).
  - System architecture visual flow blueprints and transparent placeholder notices for repo links.
- **Experience & Continuous Learning**:
  - Clean separation between Intensive Full Stack & DevOps Training, 6 Months Technical Support at EOS Globe, and B.E. in Electronics & Communication Engineering (VTU 2025).
- **In-Browser Resume Viewer & Printable PDF**:
  - Print-friendly layout (`window.print()` / "Save as PDF").
  - Direct download linking to `/public/Premkumar_Asode_Resume.pdf` with setup fallback instructions.
- **Contact Section**:
  - One-click copy email button.
  - Form validation with structured mailto dispatch and celebration confetti.

---

## 🛠️ Tech Stack

- **Frontend**: React 19, Vite, Tailwind CSS v4
- **Icons & Visuals**: Lucide React & Custom SVG brand glyphs
- **Interactivity**: Framer Motion & Canvas Confetti
- **Typography**: Inter, Fira Code, Plus Jakarta Sans

---

## 💻 Getting Started Locally

### 1. Prerequisites
- **Node.js** (v18 or higher installed)
- **npm** (v9 or higher)

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `dist/` directory.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 📄 Customizing Your Information

All details are centralized in a single configuration file:
👉 **`src/data/portfolioData.js`**

### 1. Updating Your Resume PDF
Place your final resume PDF in the `public` folder named exactly:
```
public/Premkumar_Asode_Resume.pdf
```
A starter PDF has already been generated in that directory.

### 2. Updating Profile Photo
Replace the image in `public/premkumar.jpg` with any updated photo.

### 3. Updating GitHub Links
In `src/data/portfolioData.js`, replace the placeholder repository URLs with your actual repository links:
```javascript
export const projects = [
  {
    id: "cicd-pipeline",
    title: "End-to-End CI/CD Pipeline",
    githubUrl: "https://github.com/premasode/YOUR-ACTUAL-REPO",
    isPlaceholderLink: false, // Set to false once verified
    ...
  }
];
```

---

## 🌐 Deployment Options

### Option A: Vercel (Recommended — Free & 1-Minute Setup)
1. Push this folder to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Premkumar Asode portfolio"
   git remote add origin https://github.com/premasode/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** → select your `portfolio` repository.
4. Click **Deploy**. Vercel will automatically build and host your portfolio with an SSL certificate and free domain (e.g., `premkumar-asode.vercel.app`).

### Option B: GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm i -D gh-pages
   ```
2. Add `"base": "/portfolio/"` in `vite.config.js`.
3. Add deploy scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`.

### Option C: AWS EC2 / S3
- **AWS S3 + CloudFront**: Upload the `dist/` folder contents to an S3 bucket configured for static website hosting, and route traffic through CloudFront with Route 53.
- **AWS EC2**: Run an Nginx reverse proxy docker container pointing to the built static assets in `/usr/share/nginx/html`.

---

## 👤 Author

**Premkumar Asode**
- **LinkedIn**: [linkedin.com/in/premkumarasode](https://www.linkedin.com/in/premkumarasode/)
- **GitHub**: [github.com/premasode](https://github.com/premasode)
- **Location**: Bengaluru, Karnataka, India
