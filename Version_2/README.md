# AI LMS Capstone — Section 1: Frontend Development

## Project Overview

This folder contains all deliverables for **Section 1** of the AI-Powered Learning Management System (LMS) Capstone. It covers three frontend technologies: HTML/CSS/Bootstrap, JavaScript, and React.js.

---

## File Structure

```
Version_2/
├── Capstone_Section1_HTML_Murugesan.html   # Section 1 — HTML, CSS & Bootstrap
├── Capstone_Section1_JS_Murugesan.html     # Section 1 — JavaScript
└── Capstone_Section1_React_Murugesan/      # Section 1 — React.js project
    ├── package.json
    ├── public/
    │   └── index.html
    └── src/
        ├── App.js
        ├── index.js
        ├── index.css
        └── components/
            ├── LMSComponents.js      # Login + CourseRecommender
            ├── PasswordStrength.js   # Task: Password Strength Checker
            └── CourseToggle.js       # Task: Course Description Toggle
```

---

## Part 1 — HTML, CSS & Bootstrap (`Capstone_Section1_HTML_Murugesan.html`)

### What was done
- Bootstrap 5 navigation bar with links to Dashboard, Courses, and Profile.
- **Flexbox feature section** with three cards side by side:
  - Adaptive Courses *(starter — provided)*
  - **Progress Tracking** *(added)*
  - **Real-time Assessments** *(added)*
- **Bootstrap cards section** with two cards placed side by side using the Bootstrap grid (`row` + `col-md-6`):
  - **HTML Module**
  - **CSS Module**

### How to run
1. Double-click `Capstone_Section1_HTML_Murugesan.html` to open in any browser.
2. Or right-click in VS Code → **Open with Live Server** (requires the Live Server extension).

No installation required — all Bootstrap styles are loaded from CDN.

---

## Part 2 — JavaScript (`Capstone_Section1_JS_Murugesan.html`)

### What was done
- **Section 1 — Enroll in Course:** Alert button *(starter — provided)*.
- **Section 2 — AI Suggestion Box:** DOM text update on button click *(starter — provided)*.
- **Section 3 — Email Validation** *(completed)*:
  - Checks whether the input contains `@`.
  - Displays `"Invalid email address"` (red) and prevents form submission if missing.
  - Displays `"Email accepted!"` (green) and allows submission if valid.
- **Section 4 — Type Your Learning Goal** *(completed)*:
  - Listens to the `input` event on the text field.
  - Dynamically updates the paragraph below with `"Your goal: <typed text>"` on every keystroke.

### How to run
1. Double-click `Capstone_Section1_JS_Murugesan.html` to open in any browser.
2. Or right-click in VS Code → **Open with Live Server**.

No installation required.

---

## Part 3 — React.js (`Capstone_Section1_React_Murugesan/`)

### What was done

| Component | File | Description |
|---|---|---|
| Login | `LMSComponents.js` | Login form with email/password validation using `useState` *(starter)* |
| CourseRecommender | `LMSComponents.js` | Recommends a course based on typed interest keyword *(starter)* |
| **PasswordStrength** | `PasswordStrength.js` | Checks password length (≥6) and presence of a number with `/\d/` regex — shows "Weak password" or "Strong password" |
| **CourseToggle** | `CourseToggle.js` | Toggles course description visibility; button label updates between "Show Description" and "Hide Description" |

### How to run

**Prerequisites:** Node.js and npm must be installed.

```bash
# 1. Navigate into the React project folder
cd Capstone_Section1_React_Murugesan

# 2. Install dependencies
npm install

# 3. Start the development server
npm start
```

The app opens automatically at [http://localhost:3000](http://localhost:3000).

### Before submitting
Delete `node_modules/` to reduce file size, then zip the folder:
```bash
# Windows (PowerShell)
Remove-Item -Recurse -Force node_modules
Compress-Archive -Path Capstone_Section1_React_Murugesan -DestinationPath Capstone_Section1_React_Murugesan.zip
```
