# 🍽️ Leanne's Food Timetable

> A modern, elegant weekly meal planner website designed with a purple and white palette to showcase Mum's delicious everyday cooking.

![Version](https://img.shields.io/badge/version-0.1.0-8b5cf6.svg)
![Status](https://img.shields.io/badge/status-skeleton--preview-purple.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## ✨ Features (Version 0.1 Skeleton)

- 💜 **White & Purple Aesthetic**: Clean lavender surfaces, royal purple accents, and warm typography designed for Mum.
- 📅 **7-Day Timetable**: Monday to Sunday with automatic highlighting of today's schedule.
- 🍳 **4 Meals Per Day**: Breakfast, Lunch, Dinner, and Snacks / Home Baking.
- 🦴 **Clean Skeleton Wireframe**: Empty placeholder cards ready to receive Mum's homemade recipes in v0.2.
- 👁️ **Preview Mode**: Toggle between the empty skeleton and filled sample dishes (with food photos & prep times).
- 📱 **Responsive Views**: Switch between a Full 7-Day Grid and a focused Day-by-Day view.
- 🖨️ **Print Ready**: 1-click print stylesheet formatted cleanly for the kitchen fridge.
- ⚡ **Zero Dependencies**: Pure HTML5, CSS3, and modern JavaScript. No build step or node package installations required to run!

---

## 🚀 How to Run Locally

### Option 1: Direct Browser Launch
Simply double-click [`index.html`](index.html) in your file explorer to open it in any web browser!

### Option 2: VS Code Live Server (Recommended)
1. Open this folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.
4. The site will open at `http://127.0.0.1:5500/` and automatically refresh whenever you edit code.

---

## 🛠️ Recommended VS Code & GitHub Extensions

To practice Git & GitHub like a pro, install these extensions in VS Code:

1. **[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)** (`ritwickdey.LiveServer`):
   - One-click local web server with instant live reload as you type.
2. **[GitHub Pull Requests and Issues](https://marketplace.visualstudio.com/items?itemName=GitHub.vscode-pull-request-github)** (`GitHub.vscode-pull-request-github`):
   - Official extension by GitHub to view PRs, issues, and sync repos right inside VS Code.
3. **[GitLens — Git supercharged](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)** (`eamodio.gitlens`):
   - Visual commit history, line-by-line blame, branch comparison, and stash visualization.
4. **[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)** (`esbenp.prettier-vscode`):
   - Automatically cleans and formats HTML, CSS, and JS on save.

---

## 📦 Setting Up the GitHub Repository (Step-by-Step)

Follow these steps to connect this project to your GitHub account (`carson2010-ctr`):

### Step 1: Create a New Repo on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Set **Repository name** to: `leannes-food-timetable`.
3. Choose **Public** (or **Private**).
4. **Important**: Leave "Add a README file", ".gitignore template", and "license" **unchecked** (we already created them locally).
5. Click **Create repository**.

### Step 2: Link and Push from your Terminal
Open your terminal in this project folder and run:
```powershell
git remote add origin https://github.com/carson2010-ctr/leannes-food-timetable.git
git branch -M main
git push -u origin main --tags
```

### Step 3: Turn on GitHub Pages (Free Live Website!)
1. In your GitHub repository, go to **Settings** > **Pages** (in the left sidebar).
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Choose branch: `main` and folder: `/ (root)`.
4. Click **Save**.
5. Within 1-2 minutes, Mum can open the timetable on her phone or tablet at:
   `https://carson2010-ctr.github.io/leannes-food-timetable/`

---

## 🏷️ Versioning & Patch Notes Workflow

Every time we make a notable update:
1. Update `CHANGELOG.md` with new patch notes under the next version (e.g., `[0.2.0]`).
2. Commit changes: `git commit -m "feat: release v0.2.0 - add recipe input form"`.
3. Create a Git tag: `git tag -a v0.2.0 -m "Release v0.2.0"`.
4. Push code and tags: `git push origin main --tags`.
5. On GitHub, go to **Releases** > **Draft a new release**, pick the tag `v0.2.0`, paste the patch notes from `CHANGELOG.md`, and publish!

---

## 📝 Roadmap

- [x] **v0.1.0**: Project initialization, skeleton layout, purple & white styling, dual views, print styles.
- [ ] **v0.2.0**: Form to add / edit Mum's meals per slot, persistent localStorage saving.
- [ ] **v0.3.0**: Ingredients checklist & shopping list generator based on weekly meals.
- [ ] **v0.4.0**: Mum's custom photo uploads and recipe notes modal.
