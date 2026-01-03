# Pomodoro Timer App

A web app to manage tasks, stay focused, and take structured breaks using the Pomodoro technique. Includes motivational quotes and a circular timer animation. Authentication is included, so users need to log in to access the app.

## Features

- User authentication (login required)
- Protected routes: only logged-in users can access the Pomodoro dashboard
- Add, complete, undo, and start tasks
- Focus and break sessions (25min focus, 5min short break, 15min long break)
- Automatic session switching after focus cycles
- Circular animated timer showing remaining time
- Motivational quotes fetched from an API

## Tech Stack

- React.js
- Tailwind CSS
- Framer Motion (for animations)
- React Router DOM (for routing & protected routes)
- Quote API: [ZenQuotes](https://zenquotes.io/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/YourUsername/pomodoro-app.git
cd pomodoro-app
