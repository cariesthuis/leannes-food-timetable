# Changelog & Patch Notes

All notable changes to **Leanne's Food Timetable** will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.3.0] - 2026-11-09

### 📱 Mobile Optimisation & Native Ergonomics (v0.3)

#### Added
- **Native Mobile Bottom Sheet**: On viewports $\le 640\text{px}$, the desktop modal automatically transforms into a native slide-up bottom sheet with rounded top corners (`border-radius: 24px 24px 0 0`), a grab handle pill, and independent body scrolling.
- **Dynamic Viewport Height (`88dvh`)**: The bottom sheet utilizes modern dynamic viewport units so form actions remain visible and accessible above soft mobile keyboards.
- **Sticky Thumb-Friendly Action Footer**: Pinned footer with safe-area spacing ensuring "Save Meal 💜" and "Clear Slot" are always in the optimal thumb reach zone.
- **Smart Mobile Viewport Auto-Detection**: Devices under $768\text{px}$ automatically launch in focused **Day View** set to today's schedule, presenting all 4 meals on screen without scrolling.
- **Horizontal Touch Swipe Engine**: Full swipe gesture navigation allowing Mum to swipe left or right on her phone screen to step between Monday, Tuesday, Wednesday, etc.
- **Tactile Haptic Feedback**: Subtle vibration pulse (`navigator.vibrate(12)`) triggered when swiping between days on supported mobile devices.
- **Active Day Pill Auto-Centering**: Smooth horizontal auto-scroll centering the active day pill into view whenever days change.
- **CSS Scroll Snap Carousel**: In Week View on mobile, columns transform into a touch-friendly carousel (`scroll-snap-type: x mandatory`) previewing upcoming days at `86vw`.
- **Fluid Typography**: Integrated CSS `clamp()` scaling for brand titles, headers, and modal text across screen widths from $320\text{px}$ to $1440\text{px}$.
- **Safe Area Inset Support**: Integrated `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` with `viewport-fit=cover` for iPhone notches and home indicators.
- **PWA / Web App Metas**: Added theme color (`#7c3aed`), web-app capability tags, and title tags for adding the timetable to phone home screens.

#### Fixed & Polished
- **Eliminated 300ms Mobile Tap Delay**: Applied `touch-action: manipulation` across all interactive elements.
- **Eliminated iOS Tap Gray Blocks**: Applied `-webkit-tap-highlight-color: transparent`.
- **Fixed iOS Auto-Zoom Bug**: Set input and textarea font sizes to `16px` on mobile screens to prevent iOS Safari from zooming into form fields.
- **Apple HIG & WCAG Touch Target Compliance**: Guaranteed minimum $44\times 44\text{px}$ tap targets on all pills, tabs, close controls, and buttons.
- **Single-Row Horizontal Chip Scrolling**: Filter pills and day pills now scroll smoothly on a single row without breaking onto multiple lines.

---

## [0.2.0] - 2026-11-09

### 🍳 Interactive Meal Planner & UI Quality Polish (v0.2)

#### Added
- **Interactive Meal Slot Editor**: Clicking or pressing Enter on any meal slot opens a modal allowing Mum to enter dish names, notes/sides, prep time, and custom food icons.
- **LocalStorage Data Persistence**: Automatically saves all entered meals in the browser under `leannes_food_timetable_v2` so changes persist across sessions and page refreshes.
- **Dynamic Weekly Statistics**: Live counters on the welcome card tracking "Dishes Planned" and remaining "Open Slots" in real time.
- **Quick Sample Menu Action**: A "Sample Menu" header button that populates inspiring dishes across all 7 days with a single tap.
- **Reset Week Action**: A safety-confirmed "Reset Week" button to restore all slots back to the empty skeleton.
- **Toast Feedback System**: Non-intrusive animated toast notifications confirming when dishes are saved, cleared, or reset.
- **Full Keyboard Accessibility**: ARIA roles, `tabindex="0"`, Enter/Space activation on slots, synchronized `aria-selected` on tabs, and focus management in modals.
- **Universal Focus Rings**: High-contrast `:focus-visible` styling across all buttons, pills, tabs, and slots for WCAG compliance.
- **Landscape Fridge Print Stylesheet**: Dedicated `@page { size: landscape; }` rule that cleanly isolates the 7-day meal grid and hides navigation and banner elements.

#### Fixed & Polished (Subagent Audit)
- **Eliminated Runtime Script Crash**: Replaced obsolete v0.1 event bindings (`modalOkBtn`, `toggleSampleBtn`) with v0.2 form submission and modal control handlers.
- **Desktop Grid Spacing Inequality**: Refactored desktop column sizing to `repeat(7, minmax(0, 1fr))` with `0.85rem` gap to prevent unnecessary horizontal scrollbars on 1080p/1440p screens.
- **Mobile Responsive Layout**: Converted `.welcome-stats` to a 3-column auto-scaling grid and stacked modal footer actions on viewports under 480px.
- **WCAG 2.1 AA Color Contrast**: Adjusted `--text-faint` to Slate 500 (`#64748b`) achieving compliant 4.63:1 contrast ratio against white surfaces.
- **Brand & Copy Uniformity**: Standardized brand title to "Leanne's Food Timetable" and meal categories to "Breakfast", "Lunch", "Dinner", and "Snacks & Treats" across all files.

---

## [0.1.0] - 2026-11-09

### 🍽️ Initial Skeleton Release (v0.1)

#### Added
- **7-Day Weekly Grid Layout**: Fully responsive timetable supporting Monday through Sunday.
- **4 Meal Categories Per Day**: Dedicated slots for Breakfast 🍳, Lunch 🥗, Dinner 🍲, and Snacks & Treats 🍰.
- **Empty Skeleton State**: Clean dashed cards ready for recipes and dishes to be populated in upcoming releases.
- **White & Purple Design System**: Modern aesthetic with soft lilac surfaces, lavender accents, royal purple buttons, and elegant typography.
- **Dual View Modes**: Full Week Grid vs. Day-by-Day View.
- **Meal Type Filters**: Quick-filter pills to view only Breakfasts, Lunches, Dinners, or Snacks across all days.
- **Printable Timetable**: Built-in print styling (`window.print()`).
- **Git Versioning & Project Documentation**: Initialized repository with `.gitignore`, `README.md`, and patch notes.
