# Changelog & Patch Notes

All notable changes to **Leanne's Food Timetable** will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.1.0] - 2026-11-09

### 🍽️ Initial Skeleton Release (v0.1)

#### Added
- **7-Day Weekly Grid Layout**: Fully responsive timetable supporting Monday through Sunday.
- **4 Meal Categories Per Day**: Dedicated slots for Breakfast 🍳, Lunch 🥗, Dinner 🍲, and Snacks & Bakes 🍰.
- **Empty Skeleton State**: Clean dashed cards ready for recipes and dishes to be populated in upcoming releases.
- **White & Purple Design System**: Modern aesthetic with soft lilac surfaces, lavender accents, royal purple buttons, and elegant typography.
- **Dual View Modes**:
  - *Full Week Grid*: Overview of all 7 days side-by-side.
  - *Day-by-Day View*: Focused daily planner with quick-switch day pills for mobile/tablets.
- **Meal Type Filters**: Quick-filter pills to view only Breakfasts, Lunches, Dinners, or Snacks across all days.
- **Interactive Example Toggle**: "✨ Preview Filled Example" button to see what dishes look like with photos and prep times.
- **Meal Details Modal**: Click any slot to view a dialog showing upcoming recipe input preview.
- **Printable Timetable**: Built-in print styling (`window.print()`) that renders a clean printable weekly sheet for the fridge.
- **Git Versioning & Project Documentation**: Initialized repository with `.gitignore`, `README.md`, and patch notes.

#### Next Up (Planned for v0.2.0)
- Add custom dish input form to add real meals.
- LocalStorage persistence to save Mum's meal plans directly in the browser.
- Custom recipe photo upload / selection.
