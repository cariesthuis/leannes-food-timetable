/**
 * Leanne's Food Timetable - Application Logic
 * Version: 0.2.0 (Interactive Meal Planner)
 */

// Storage Key for LocalStorage Persistence
const STORAGE_KEY = 'leannes_food_timetable_v2';

// Configuration: Days of the Week
const DAYS_OF_WEEK = [
  { id: 'monday', name: 'Monday', short: 'Mon', badge: 'Start of Week' },
  { id: 'tuesday', name: 'Tuesday', short: 'Tue', badge: 'Weekday' },
  { id: 'wednesday', name: 'Wednesday', short: 'Wed', badge: 'Midweek' },
  { id: 'thursday', name: 'Thursday', short: 'Thu', badge: 'Weekday' },
  { id: 'friday', name: 'Friday', short: 'Fri', badge: 'Fri-yay!' },
  { id: 'saturday', name: 'Saturday', short: 'Sat', badge: 'Weekend' },
  { id: 'sunday', name: 'Sunday', short: 'Sun', badge: 'Family Feast' }
];

// Configuration: Meal Categories
const MEAL_TYPES = [
  { id: 'breakfast', name: 'Breakfast', icon: '🍳', defaultTime: '8:00 AM' },
  { id: 'lunch', name: 'Lunch', icon: '🥗', defaultTime: '12:30 PM' },
  { id: 'dinner', name: 'Dinner', icon: '🍲', defaultTime: '6:30 PM' },
  { id: 'treat', name: 'Snacks & Treats', icon: '🍰', defaultTime: 'Anytime' }
];

// Curated Sample Menu for Inspiration
const SAMPLE_WEEK_DATA = {
  monday: {
    breakfast: { title: 'Poached Eggs on Sourdough', notes: 'Served with grilled tomatoes & fresh herbs', time: '15 mins', icon: '🍳' },
    lunch: { title: 'Mediterranean Chicken Salad', notes: 'Feta, kalamata olives, cucumber & vinaigrette', time: '20 mins', icon: '🥗' },
    dinner: { title: "Mum's Shepherd's Pie", notes: 'Crispy mash topping with seasonal vegetables', time: '1 hr 10 mins', icon: '🥧' },
    treat: { title: 'Warm Cinnamon Tea Biscuits', notes: 'Fresh out of the oven with a pot of tea', time: '25 mins', icon: '🍪' }
  },
  tuesday: {
    breakfast: { title: 'Berry Greek Yogurt Parfait', notes: 'Honey, chia seeds & toasted almonds', time: '10 mins', icon: '🍎' },
    lunch: { title: 'Ham, Cheese & Chutney Toastie', notes: 'Crusty loaf grilled golden with melted cheddar', time: '15 mins', icon: '🥪' },
    dinner: { title: 'Slow-Cooked Beef Stew', notes: 'Tender beef chuck, carrots & fluffy dumplings', time: '2 hrs 30 mins', icon: '🍲' },
    treat: { title: 'Fresh Baked Blueberry Muffins', notes: 'Moist vanilla batter with lemon zest', time: '35 mins', icon: '🧁' }
  },
  wednesday: {
    breakfast: { title: 'Fluffy Buttermilk Pancakes', notes: 'Warm maple syrup & sliced strawberries', time: '20 mins', icon: '🍳' },
    lunch: { title: 'Creamy Tomato & Basil Soup', notes: 'Warm garlic crusty bread for dipping', time: '25 mins', icon: '🍲' },
    dinner: { title: 'Creamy Garlic Butter Salmon', notes: 'Served over steamed jasmine rice & asparagus', time: '30 mins', icon: '🐟' },
    treat: { title: 'English Toffee Crunch', notes: 'Sweet caramel snack for the afternoon', time: '10 mins', icon: '🍰' }
  },
  thursday: {
    breakfast: { title: 'Avocado Toast with Crispy Bacon', notes: 'Topped with cracked pepper & lime squeeze', time: '15 mins', icon: '🍳' },
    lunch: { title: 'Roast Chicken & Avocado Wrap', notes: 'Mixed greens, garlic aioli & sun-dried tomatoes', time: '15 mins', icon: '🥪' },
    dinner: { title: "Classic Beef Lasagne", notes: 'Layers of rich bolognese, bechamel & melted mozzarella', time: '1 hr 15 mins', icon: '🍝' },
    treat: { title: 'Warm Chocolate Chip Cookies', notes: 'Soft centers and crisp edges', time: '20 mins', icon: '🍪' }
  },
  friday: {
    breakfast: { title: 'Scrambled Eggs & Smoked Salmon', notes: 'Chives, toasted brioche & lemon butter', time: '15 mins', icon: '🍳' },
    lunch: { title: 'Caesar Salad with Crispy Croutons', notes: 'Parmesan shavings, anchovy dressing & soft egg', time: '20 mins', icon: '🥗' },
    dinner: { title: 'Homemade Stonebaked Pizza', notes: 'Prosciutto, fresh basil, mushrooms & mozzarella', time: '40 mins', icon: '🍕' },
    treat: { title: 'Warm Apple & Berry Crumble', notes: 'Spiced cinnamon crumble with vanilla custard', time: '45 mins', icon: '🥧' }
  },
  saturday: {
    breakfast: { title: 'Full Weekend Breakfast', notes: 'Bacon, sausages, eggs, beans & buttered toast', time: '25 mins', icon: '🍳' },
    lunch: { title: 'Crispy Fish Finger Sandwiches', notes: 'Tartar sauce, shredded iceberg on soft white bread', time: '15 mins', icon: '🥪' },
    dinner: { title: 'Mum’s Butter Chicken Curry', notes: 'Tender chicken in rich spiced gravy with garlic naan', time: '50 mins', icon: '🍛' },
    treat: { title: 'Lemon Drizzle Sponge Cake', notes: 'Tangy citrus glaze soaked into warm sponge', time: '45 mins', icon: '🍰' }
  },
  sunday: {
    breakfast: { title: 'Brioche French Toast', notes: 'Dusting of icing sugar, cinnamon & pure maple syrup', time: '20 mins', icon: '🍳' },
    lunch: { title: 'Light Ploughman’s Platter', notes: 'Aged cheddar, pickles, crusty bread & apple slices', time: '15 mins', icon: '🥪' },
    dinner: { title: 'Traditional Sunday Roast Beef', notes: 'Golden roasties, giant Yorkshire puddings & gravy', time: '2 hrs', icon: '🥩' },
    treat: { title: 'Warm Sticky Date Pudding', notes: 'Drizzled with butterscotch sauce & vanilla ice cream', time: '40 mins', icon: '🍰' }
  }
};

// ==========================================================================
// Application State
// ==========================================================================
let currentView = 'week'; // 'week' or 'day'
let activeDayId = 'monday';
let currentFilter = 'all';
let editingSlot = null; // { dayId, mealId }
let lastFocusedElement = null;

// The Meal Timetable Data Matrix
let timetableData = initializeTimetableData();

/**
 * Initialize default empty structure or load from localStorage
 */
function initializeTimetableData() {
  const blankState = {};
  DAYS_OF_WEEK.forEach(day => {
    blankState[day.id] = {};
    MEAL_TYPES.forEach(meal => {
      blankState[day.id][meal.id] = null;
    });
  });

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Merge with blankState to safeguard schema against corrupted data
      DAYS_OF_WEEK.forEach(day => {
        if (parsed[day.id]) {
          MEAL_TYPES.forEach(meal => {
            if (parsed[day.id][meal.id]) {
              blankState[day.id][meal.id] = parsed[day.id][meal.id];
            }
          });
        }
      });
    }
  } catch (err) {
    console.warn('Could not read from localStorage, using fresh state', err);
  }

  return blankState;
}

/**
 * Save current state to localStorage
 */
function persistTimetableData() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(timetableData));
  } catch (err) {
    console.error('Failed to save timetable to localStorage', err);
  }
}

// ==========================================================================
// DOM Element Selectors
// ==========================================================================
const timetableWrapper = document.getElementById('timetable-wrapper');
const daySelectorNav = document.getElementById('day-selector-nav');
const viewTabs = document.querySelectorAll('.view-tab');
const filterPills = document.querySelectorAll('.filter-pill');
const dayPills = document.querySelectorAll('.day-pill');

// Header Action Buttons
const quickSampleBtn = document.getElementById('quick-sample-btn');
const clearWeekBtn = document.getElementById('clear-week-btn');
const printBtn = document.getElementById('print-btn');

// Stats Counters
const dishesCountEl = document.getElementById('dishes-count');
const skeletonCountEl = document.getElementById('skeleton-count');

// Modal Elements
const mealModal = document.getElementById('meal-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalCancelBtn = document.getElementById('modal-cancel-btn');
const modalClearSlotBtn = document.getElementById('modal-clear-slot-btn');
const mealForm = document.getElementById('meal-form');
const modalTitle = document.getElementById('modal-title');
const modalDayTag = document.getElementById('modal-day-tag');
const modalMealTag = document.getElementById('modal-meal-tag');

// Form Input Elements
const dishNameInput = document.getElementById('dish-name-input');
const dishNotesInput = document.getElementById('dish-notes-input');
const dishTimeInput = document.getElementById('dish-time-input');
const dishIconSelect = document.getElementById('dish-icon-select');

// Toast Element
const toastEl = document.getElementById('toast');
let toastTimeout = null;

// ==========================================================================
// Helper Functions
// ==========================================================================

/**
 * Identify the current day of the week to highlight it
 */
function getTodayDayId() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayIndex = new Date().getDay();
  return days[todayIndex];
}

/**
 * Show a toast notification
 */
function showToast(message, duration = 3000) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.remove('hidden');

  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toastEl.classList.add('hidden');
  }, duration);
}

/**
 * Update summary counters in the welcome card
 */
function updateStats() {
  let plannedCount = 0;
  const totalSlots = 7 * 4; // 28

  DAYS_OF_WEEK.forEach(day => {
    MEAL_TYPES.forEach(meal => {
      if (timetableData[day.id] && timetableData[day.id][meal.id]) {
        plannedCount++;
      }
    });
  });

  if (dishesCountEl) dishesCountEl.textContent = plannedCount;
  if (skeletonCountEl) skeletonCountEl.textContent = totalSlots - plannedCount;
}

// ==========================================================================
// Rendering Logic
// ==========================================================================

/**
 * Render Timetable Grid
 */
function renderTimetable() {
  timetableWrapper.innerHTML = '';
  const todayId = getTodayDayId();

  // Determine which days to display based on view mode
  const daysToRender = (currentView === 'day')
    ? DAYS_OF_WEEK.filter(d => d.id === activeDayId)
    : DAYS_OF_WEEK;

  timetableWrapper.className = `timetable-wrapper ${currentView}-view`;

  daysToRender.forEach(day => {
    const isToday = day.id === todayId;
    const col = document.createElement('article');
    col.className = `day-column ${isToday ? 'is-today' : ''}`;
    col.setAttribute('data-day', day.id);

    // Day Header
    const header = document.createElement('div');
    header.className = 'day-header';
    header.innerHTML = `
      <div>
        <h3 class="day-title">${day.name}</h3>
      </div>
      <span class="day-badge">${isToday ? 'Today 🌟' : day.badge}</span>
    `;
    col.appendChild(header);

    // Meals Container
    const mealsContainer = document.createElement('div');
    mealsContainer.className = 'day-meals';

    MEAL_TYPES.forEach(meal => {
      const slot = document.createElement('div');
      const isFilteredOut = (currentFilter !== 'all' && currentFilter !== meal.id);
      const existingMeal = timetableData[day.id] ? timetableData[day.id][meal.id] : null;

      // Accessibility attributes
      slot.setAttribute('tabindex', '0');
      slot.setAttribute('role', 'button');
      slot.setAttribute('data-day', day.id);
      slot.setAttribute('data-meal-type', meal.id);

      if (existingMeal) {
        // Active Saved Meal Card
        slot.className = `meal-slot active-meal ${isFilteredOut ? 'filtered-out' : ''}`;
        slot.setAttribute('aria-label', `${day.name} ${meal.name}: ${existingMeal.title}. Click or press Enter to edit.`);
        
        slot.innerHTML = `
          <div class="active-meal-header">
            <span class="active-meal-category">${meal.icon} ${meal.name}</span>
            <span class="edit-cue" aria-hidden="true">✏️ Edit</span>
          </div>
          <div class="active-meal-main">
            <span class="active-meal-icon" aria-hidden="true">${existingMeal.icon || meal.icon}</span>
            <div>
              <h4 class="active-meal-title">${escapeHTML(existingMeal.title)}</h4>
              ${existingMeal.notes ? `<p class="active-meal-notes">${escapeHTML(existingMeal.notes)}</p>` : ''}
            </div>
          </div>
          <div class="active-meal-footer">
            <span>⏱️ ${escapeHTML(existingMeal.time || meal.defaultTime)}</span>
            <span>Mum's Kitchen 💜</span>
          </div>
        `;
      } else {
        // Skeleton Empty Slot
        slot.className = `meal-slot skeleton ${isFilteredOut ? 'filtered-out' : ''}`;
        slot.setAttribute('aria-label', `${day.name} ${meal.name}: Empty slot. Click or press Enter to plan a meal.`);
        
        slot.innerHTML = `
          <div class="slot-tag">
            <span>${meal.icon}</span>
            <span>${meal.name}</span>
          </div>
          <div class="skeleton-placeholder">
            <span class="skeleton-icon" aria-hidden="true">${meal.icon}</span>
            <span class="skeleton-prompt">+ Add ${meal.name}</span>
            <span class="skeleton-subtext">Tap to add meal</span>
          </div>
        `;
      }

      // Slot Click Handler
      slot.addEventListener('click', () => {
        openMealModal(day.id, meal.id);
      });

      // Keyboard Accessibility (Enter or Space to open modal)
      slot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openMealModal(day.id, meal.id);
        }
      });

      mealsContainer.appendChild(slot);
    });

    col.appendChild(mealsContainer);
    timetableWrapper.appendChild(col);
  });

  updateStats();
}

/**
 * Simple HTML Escaping to prevent injection
 */
function escapeHTML(str) {
  if (!str) return '';
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// ==========================================================================
// Modal Logic & Form Handling
// ==========================================================================

/**
 * Open the Modal Editor for a specific slot
 */
function openMealModal(dayId, mealId) {
  editingSlot = { dayId, mealId };
  lastFocusedElement = document.activeElement;

  const dayObj = DAYS_OF_WEEK.find(d => d.id === dayId);
  const mealObj = MEAL_TYPES.find(m => m.id === mealId);

  modalDayTag.textContent = dayObj ? dayObj.name : dayId;
  modalMealTag.textContent = mealObj ? `${mealObj.icon} ${mealObj.name}` : mealId;
  modalTitle.textContent = `${dayObj.name}'s ${mealObj.name}`;

  const currentMeal = timetableData[dayId] ? timetableData[dayId][mealId] : null;

  if (currentMeal) {
    dishNameInput.value = currentMeal.title || '';
    dishNotesInput.value = currentMeal.notes || '';
    dishTimeInput.value = currentMeal.time || '';
    dishIconSelect.value = currentMeal.icon || mealObj.icon;
    modalClearSlotBtn.style.display = 'inline-flex';
  } else {
    dishNameInput.value = '';
    dishNotesInput.value = '';
    dishTimeInput.value = mealObj.defaultTime || '';
    dishIconSelect.value = mealObj.icon;
    modalClearSlotBtn.style.display = 'none';
  }

  mealModal.classList.remove('hidden');
  setTimeout(() => dishNameInput.focus(), 50);
}

/**
 * Close the Modal
 */
function closeModal() {
  mealModal.classList.add('hidden');
  editingSlot = null;
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
  }
}

/**
 * Save Meal from Form Submission
 */
mealForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!editingSlot) return;

  const { dayId, mealId } = editingSlot;
  const name = dishNameInput.value.trim();
  if (!name) return;

  const mealEntry = {
    title: name,
    notes: dishNotesInput.value.trim(),
    time: dishTimeInput.value.trim() || 'Anytime',
    icon: dishIconSelect.value
  };

  timetableData[dayId][mealId] = mealEntry;
  persistTimetableData();
  renderTimetable();
  closeModal();

  const dayObj = DAYS_OF_WEEK.find(d => d.id === dayId);
  showToast(`Saved "${name}" for ${dayObj ? dayObj.name : 'the day'}! 💜`);
});

/**
 * Clear the current slot from modal
 */
modalClearSlotBtn.addEventListener('click', () => {
  if (!editingSlot) return;
  const { dayId, mealId } = editingSlot;

  timetableData[dayId][mealId] = null;
  persistTimetableData();
  renderTimetable();
  closeModal();

  const dayObj = DAYS_OF_WEEK.find(d => d.id === dayId);
  const mealObj = MEAL_TYPES.find(m => m.id === mealId);
  showToast(`Cleared ${dayObj ? dayObj.name : ''} ${mealObj ? mealObj.name : 'meal'}.`);
});

// Modal Close Listeners
modalCloseBtn.addEventListener('click', closeModal);
modalCancelBtn.addEventListener('click', closeModal);
mealModal.addEventListener('click', (e) => {
  if (e.target === mealModal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mealModal.classList.contains('hidden')) {
    closeModal();
  }
});

// ==========================================================================
// Views & Navigation Controls
// ==========================================================================

// View Toggle (Week vs Day)
viewTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    viewTabs.forEach(t => {
      t.classList.remove('active');
      t.setAttribute('aria-selected', 'false');
    });
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');

    currentView = tab.getAttribute('data-view');
    if (currentView === 'day') {
      daySelectorNav.classList.remove('hidden');
    } else {
      daySelectorNav.classList.add('hidden');
    }
    renderTimetable();
  });
});

// Day Selector for Day View
dayPills.forEach(pill => {
  pill.addEventListener('click', () => {
    dayPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    activeDayId = pill.getAttribute('data-day');
    renderTimetable();
  });
});

// Meal Filter Pills
filterPills.forEach(pill => {
  pill.addEventListener('click', () => {
    filterPills.forEach(p => p.classList.remove('active'));
    pill.classList.add('active');
    currentFilter = pill.getAttribute('data-filter');
    renderTimetable();
  });
});

// ==========================================================================
// Action Buttons: Sample Menu, Reset Week, Print
// ==========================================================================

// Quick Sample Menu Button
quickSampleBtn.addEventListener('click', () => {
  // Deep clone sample data into timetableData
  DAYS_OF_WEEK.forEach(day => {
    MEAL_TYPES.forEach(meal => {
      if (SAMPLE_WEEK_DATA[day.id] && SAMPLE_WEEK_DATA[day.id][meal.id]) {
        timetableData[day.id][meal.id] = { ...SAMPLE_WEEK_DATA[day.id][meal.id] };
      }
    });
  });

  persistTimetableData();
  renderTimetable();
  showToast('Filled timetable with tasty sample ideas! ✨');
});

// Reset Week Button
clearWeekBtn.addEventListener('click', () => {
  let plannedCount = 0;
  DAYS_OF_WEEK.forEach(day => {
    MEAL_TYPES.forEach(meal => {
      if (timetableData[day.id][meal.id]) plannedCount++;
    });
  });

  if (plannedCount > 0) {
    const confirmed = window.confirm('Are you sure you want to clear all planned meals back to empty skeleton slots?');
    if (!confirmed) return;
  }

  DAYS_OF_WEEK.forEach(day => {
    MEAL_TYPES.forEach(meal => {
      timetableData[day.id][meal.id] = null;
    });
  });

  persistTimetableData();
  renderTimetable();
  showToast('Timetable reset to empty skeleton 🦴');
});

// Print Button
printBtn.addEventListener('click', () => {
  window.print();
});

// ==========================================================================
// App Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  // Set default active day to current day of week
  const today = getTodayDayId();
  activeDayId = today;
  dayPills.forEach(p => {
    if (p.getAttribute('data-day') === today) {
      p.classList.add('active');
    } else {
      p.classList.remove('active');
    }
  });

  renderTimetable();
});
