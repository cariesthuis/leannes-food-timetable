# 🍽️ Leanne's Food Timetable

> A modern, elegant weekly meal planner website designed with a purple and white palette to showcase Mum's delicious everyday cooking.

![Version](https://img.shields.io/badge/version-0.2.0-8b5cf6.svg)
![Status](https://img.shields.io/badge/status-interactive--planner-purple.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

---

## ✨ Features (Version 0.2 Interactive)

- 💜 **White & Purple Aesthetic**: Clean lavender surfaces, royal purple accents, and warm typography designed for Mum.
- 📅 **7-Day Timetable**: Monday to Sunday with automatic highlighting of today's schedule.
- 🍳 **4 Meals Per Day**: Breakfast, Lunch, Dinner, and Snacks & Treats.
- ✏️ **Interactive Meal Planner**: Click or press Enter on any slot to plan dishes, notes/sides, cooking times, and pick custom food icons.
- 💾 **Automatic Browser Saving**: Powered by `localStorage` so Mum's meal plan is preserved whenever she returns.
- 💡 **Sample Menu Inspiration**: One-click "Sample Menu" button to fill the week with tasty ideas.
- 📊 **Dynamic Live Stats**: Real-time counter of planned dishes versus open skeleton slots.
- 📱 **Responsive Views**: Switch between a Full 7-Day Grid and a focused Day-by-Day view.
- 🖨️ **Landscape Fridge Print Sheet**: Formatted cleanly to print a weekly fridge schedule with zero clutter.
- ♿ **Accessible**: WCAG 2.1 AA compliant color contrast, full keyboard navigation, and high-visibility focus indicators.
- ⚡ **Zero Dependencies**: Pure HTML5, CSS3, and modern JavaScript. No build step or node package installations required!

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

## 📦 GitHub Repository & Live Website

Follow these steps to connect and deploy to your GitHub account (`cariesthuis`):

### Push Latest Updates to GitHub:
```powershell
git add .
git commit -m "feat: release v0.2.0 - interactive meal planner and UI audit fixes"
git tag -a v0.2.0 -m "Release v0.2.0 - Interactive meal planner"
git push origin main --tags
```

### Free Live Website (GitHub Pages):
1. In your GitHub repository, go to **Settings** > **Pages** (in the left sidebar).
2. Under **Build and deployment > Source**, select **Deploy from a branch**.
3. Choose branch: `main` and folder: `/ (root)`.
4. Click **Save**.
5. Your live website is accessible at:
   👉 **`https://cariesthuis.github.io/leannes-food-timetable/`**

---

## 🏷️ Versioning & Patch Notes Workflow

Every time we make a notable update:
1. Update `CHANGELOG.md` with new patch notes under the next version (e.g., `[0.2.0]`).
2. Commit changes: `git commit -m "feat: release vX.X.X - ..."`.
3. Create a Git tag: `git tag -a vX.X.X -m "Release vX.X.X"`.
4. Push code and tags: `git push origin main --tags`.
5. On GitHub, go to **Releases** > **Draft a new release**, select the tag, and paste the patch notes!

---

## 📝 Roadmap

- [x] **v0.1.0**: Project initialization, skeleton layout, purple & white styling, dual views, print styles.
- [x] **v0.2.0**: Interactive dish editor, browser `localStorage` saving, live stats, sample menu, and audit fixes.
- [ ] **v0.3.0**: Ingredients checklist & automated weekly grocery shopping list generator.
- [ ] **v0.4.0**: Custom recipe photo uploads and favourite meals quick-picker.
