/**
 * Leanne's Food Timetable - Application Logic
 * Version: 0.1.0
 */

// Configuration & Days
const DAYS_OF_WEEK = [
  { id: 'monday', name: 'Monday', short: 'Mon', badge: 'Start of Week' },
  { id: 'tuesday', name: 'Tuesday', short: 'Tue', badge: 'Weekday' },
  { id: 'wednesday', name: 'Wednesday', short: 'Wed', badge: 'Mid-week' },
  { id: 'thursday', name: 'Thursday', short: 'Thu', badge: 'Weekday' },
  { id: 'friday', name: 'Friday', short: 'Fri', badge: 'Fri-yay!' },
  { id: 'saturday', name: 'Saturday', short: 'Sat', badge: 'Weekend' },
  { id: 'sunday', name: 'Sunday', short: 'Sun', badge: 'Family Feast' }
];

const MEAL_TYPES = [
  { id: 'breakfast', name: 'Breakfast', icon: '🍳', defaultTime: '8:00 AM' },
  { id: 'lunch', name: 'Lunch', icon: '🥗', defaultTime: '12:30 PM' },
  { id: 'dinner', name: 'Dinner', icon: '🍲', defaultTime: '6:30 PM' },
  { id: 'treat', name: 'Snacks & Bakes', icon: '🍰', defaultTime: 'Anytime' }
];

// Sample Preview Dishes for when user clicks "Preview Filled Example"
const SAMPLE_RECIPES = {
  breakfast: {
    title: 'Fluffy Buttermilk Pancakes',
    notes: 'Served with fresh berries, maple syrup & warm butter',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=600&q=80',
    time: '20 mins'
  },
  lunch: {
    title: 'Mediterranean Grilled Chicken Bowl',
    notes: 'Avocado, cherry tomatoes, feta, tzatziki & quinoa',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80',
    time: '25 mins'
  },
  dinner: {
    title: "Mum's Roast with Crispy Potatoes",
    notes: 'Tender roast beef, golden Yorkshire puddings & rich gravy',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80',
    time: '1 hr 15 mins'
  },
  treat: {
    title: 'Fresh Baked Warm Apple Crumble',
    notes: 'Bramley apples, spiced cinnamon crumble & vanilla custard',
    image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80',
    time: '45 mins'
  }
};

// Application State
let currentView = 'week'; // 'week' or 'day'
let activeDayId = 'monday';
let currentFilter = 'all';
let isShowingSample = false;

// DOM Elements
const timetableWrapper = document.getElementById('timetable-wrapper');
const daySelectorNav = document.getElementById('day-selector-nav');
const toggleSampleBtn = document.getElementById('toggle-sample-btn');
const printBtn = document.getElementById('print-btn');
const viewTabs = document.querySelectorAll('.view-tab');
const filterPills = document.querySelectorAll('.filter-pill');
const dayPills = document.querySelectorAll('.day-pill');

// Modal Elements
const mealModal = document.getElementById('meal-modal');
const modalCloseBtn = document.getElementById('modal-close-btn');
const modalOkBtn = document.getElementById('modal-ok-btn');
const modalTitle = document.getElementById('modal-title');
const modalDayTag = document.getElementById('modal-day-tag');
const modalMealTag = document.getElementById('modal-meal-tag');

/**
 * Identify the current day of the week to highlight it
 */
function getTodayDayId() {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const todayIndex = new Date().getDay();
  return days[todayIndex];
}

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
      
      if (isShowingSample) {
        // Sample Filled Card View
        const sample = SAMPLE_RECIPES[meal.id];
        slot.className = `meal-slot filled ${isFilteredOut ? 'filtered-out' : ''}`;
        slot.setAttribute('data-meal-type', meal.id);
        slot.innerHTML = `
          <div class="filled-image-wrapper">
            <img src="${sample.image}" alt="${sample.title}" class="filled-image" loading="lazy" />
            <span class="filled-overlay-tag">${meal.icon} ${meal.name}</span>
          </div>
          <div class="filled-content">
            <h4 class="filled-title">${sample.title}</h4>
            <p class="filled-notes">${sample.notes}</p>
            <div class="filled-footer">
              <span>⏱️ ${sample.time}</span>
              <span>Mum's Special 💜</span>
            </div>
          </div>
        `;
      } else {
        // Skeleton Empty Slot
        slot.className = `meal-slot skeleton ${isFilteredOut ? 'filtered-out' : ''}`;
        slot.setAttribute('data-meal-type', meal.id);
        slot.innerHTML = `
          <div class="slot-tag">
            <span>${meal.icon}</span>
            <span>${meal.name}</span>
          </div>
          <div class="skeleton-placeholder">
            <span class="skeleton-icon">${meal.icon}</span>
            <span class="skeleton-prompt">+ Add ${meal.name}</span>
            <span class="skeleton-subtext">Click to preview slot</span>
          </div>
        `;
      }

      // Slot Click Handler
      slot.addEventListener('click', () => {
        openMealModal(day.name, meal.name, meal.icon);
      });

      mealsContainer.appendChild(slot);
    });

    col.appendChild(mealsContainer);
    timetableWrapper.appendChild(col);
  });
}

/**
 * Open Meal Details Modal
 */
function openMealModal(dayName, mealName, icon) {
  modalDayTag.textContent = dayName;
  modalMealTag.textContent = `${icon} ${mealName}`;
  modalTitle.textContent = `${dayName}'s ${mealName}`;
  mealModal.classList.remove('hidden');
}

/**
 * Close Modal
 */
function closeModal() {
  mealModal.classList.add('hidden');
}

// Modal Event Listeners
modalCloseBtn.addEventListener('click', closeModal);
modalOkBtn.addEventListener('click', closeModal);
mealModal.addEventListener('click', (e) => {
  if (e.target === mealModal) closeModal();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !mealModal.classList.contains('hidden')) {
    closeModal();
  }
});

// View Toggle (Week vs Day)
viewTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    viewTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

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

// Sample Toggle (Skeleton vs Filled Preview)
toggleSampleBtn.addEventListener('click', () => {
  isShowingSample = !isShowingSample;
  if (isShowingSample) {
    toggleSampleBtn.innerHTML = `
      <span class="btn-icon">🦴</span>
      <span class="btn-text">Show Skeleton View</span>
    `;
    toggleSampleBtn.classList.add('btn-primary');
    toggleSampleBtn.classList.remove('btn-secondary');
  } else {
    toggleSampleBtn.innerHTML = `
      <span class="btn-icon">✨</span>
      <span class="btn-text">Preview Filled Example</span>
    `;
    toggleSampleBtn.classList.remove('btn-primary');
    toggleSampleBtn.classList.add('btn-secondary');
  }
  renderTimetable();
});

// Print Button
printBtn.addEventListener('click', () => {
  window.print();
});

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  // Set default active day to today
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
