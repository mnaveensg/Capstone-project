# AI LMS Capstone — Section 1: React.js

## Overview

A React.js single-page application demonstrating core React concepts: components, JSX, `useState` hook, event handling, form validation, and conditional rendering.

---

## Project Structure

```
src/
├── App.js                        # Root component — renders all four components
├── index.js                      # React entry point
├── index.css                     # Global styles
└── components/
    ├── LMSComponents.js          # Login + CourseRecommender (starter components)
    ├── PasswordStrength.js       # Task 1: Password Strength Checker
    └── CourseToggle.js           # Task 2: Course Description Toggle
public/
└── index.html                    # Static HTML shell
```

---

## Components

### `Login` — in `LMSComponents.js`
- Renders an email + password form.
- Validates that both fields are filled and email contains `@`.
- Shows a status message below the form on submit.

### `CourseRecommender` — in `LMSComponents.js`
- User types an interest (e.g., "AI", "Web", "Data").
- Clicking "Get Recommendation" displays a matching course suggestion.

### `PasswordStrength` — in `PasswordStrength.js` *(Task 1)*
- User types a password and clicks **Check Strength**.
- **Weak password** — if fewer than 6 characters, or no digit present.
- **Strong password** — if 6+ characters AND contains at least one number (checked with `/\d/` regex).

### `CourseToggle` — in `CourseToggle.js` *(Task 2)*
- Clicking **Show Description** reveals the course description.
- Clicking **Hide Description** hides it again.
- Uses a boolean `isVisible` state and conditional rendering: `{isVisible && <p>...</p>}`.

---

## How to Run

**Prerequisites:** [Node.js](https://nodejs.org/) (v16+) and npm installed.

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm start
```

Opens at **http://localhost:3000** in your default browser. Changes hot-reload automatically.

---

## How to Build for Production

```bash
npm run build
```

Output is placed in the `build/` folder.

---

## Submission Checklist

- [ ] `node_modules/` folder deleted before zipping
- [ ] Entire folder zipped as `Capstone_Section1_React_Murugesan.zip`
- [ ] All four components visible and functional in the browser
