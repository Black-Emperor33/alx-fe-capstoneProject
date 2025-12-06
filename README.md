# alx-fe-capstoneProject
# 🚀 FlowForge – The Ultimate Pomodoro Timer

A beautiful, interactive, productivity-boosting Pomodoro app built with React & Tailwind CSS.

FlowForge is not just a timer — it’s a full productivity dashboard.
With animations, tasks, stats, themes, and motivational quotes, FlowForge turns your focus sessions into a daily routine you can track and enjoy.

# 🌟 Features
# 🔥 1. Pomodoro Timer System

Standard Pomodoro cycle:

25 min Focus

5 min Short Break

15 min Long Break

Fully customizable durations

Animated circular progress ring

Smooth transitions

Start / Pause / Reset controls

Auto-switch between focus & break modes

# 📊 2. Session Stats (LocalStorage Powered)

Stats are saved directly in the browser:

Pomodoros completed today

Total focus minutes

Daily streaks / weekly streaks

Simple charts using Recharts

Data resets at midnight automatically

# 📝 3. Task Manager

Add, edit, delete tasks

Select a task for the current Pomodoro

Track how many Pomodoros each task gets

Everything stored in localStorage

# 🔔 4. Sounds & Notifications

Start / Pause / End session sounds

Desktop notifications:

“Focus session complete!”

“Break is over — let’s get back at it!”

# 🎨 5. Themes & UI Customization

Light / Dark mode

Accent color selection

Background gradients

Smooth animated transitions

Accessible, clean UI design

# 🧘‍♂️ 6. Motivational Quotes (ZenQuotes API)

Each focus session or page refresh pulls a fresh motivational quote:

# API Used:
➡️ https://zenquotes.io/api/random

Quotes appear on the dashboard and can refresh with one click.

# 📱 Responsive Design

FlowForge is designed mobile-first and looks great on:

Desktop

Tablet

Mobile phones

# Built entirely with Tailwind CSS.

# 🛠️ Tech Stack
Tool	Purpose
React	Component-based UI
Tailwind CSS	Styling & responsive design
Recharts	Stats charts
LocalStorage	Persistent data & settings
ZenQuotes API	Motivational quotes
Vite	Fast development server
# 📦 Installation & Setup
1. Clone the repo
git clone https://github.com/Black-Emperor33/alx-fe-capstoneProject.git
cd flowforge

2. Install dependencies
npm install

3. Start the development server
npm run dev

# 📁 Project Structure 
flowforge/
│── src/
│   ├── components/
│   │   ├── Timer.jsx
│   │   ├── QuoteBox.jsx
│   │   ├── TaskList.jsx
│   │   ├── Stats.jsx
│   │   ├── ThemeSwitcher.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Settings.jsx
│   ├── hooks/
│   │   ├── useTimer.js
│   │   ├── useLocalStorage.js
│   ├── utils/
│   │   ├── timeHelpers.js
│   ├── App.jsx
│   └── main.jsx
│
└── tailwind.config.js

💾 LocalStorage Keys Used

FlowForge uses persistent browser storage:

flowforge_settings
flowforge_stats
flowforge_tasks
flowforge_theme
flowforge_streaks

# 🗂️ API Used
💬 ZenQuotes API

Fetch a random quote:

https://zenquotes.io/api/random


Response format:

[
  {
    "q": "The future depends on what you do today.",
    "a": "Mahatma Gandhi"
  }
]
