# AI LMS Capstone — Section 2: Backend Development (Express.js)

## Overview

An Express.js REST API backend for the AI-Powered LMS. Provides endpoints to list courses and enrol users, with input validation and proper HTTP status codes.

---

## Project Structure

```
Capstone_Section2_Murugesan/
├── package.json    # Project metadata and dependencies
└── server.js       # Express server with all API routes
```

---

## API Endpoints

| Method | Route      | Description                                   |
|--------|------------|-----------------------------------------------|
| GET    | `/`        | Health check — returns a welcome message      |
| GET    | `/courses` | Returns a JSON array of all available courses |
| POST   | `/enroll`  | Enrols a user in a course                     |

### `POST /enroll`

**Request body (JSON):**
```json
{
  "userId": 123,
  "courseId": 1
}
```

**Success response (200):**
```json
{
  "message": "User 123 successfully enrolled in course 1."
}
```

**Error response (400) — when `userId` or `courseId` is missing:**
```json
{
  "error": "Missing userId or courseId in request."
}
```

---

## How to Run

**Prerequisites:** Node.js and npm installed.

```bash
# 1. Navigate into the project folder
cd Capstone_Section2_Murugesan

# 2. Install dependencies
npm install

# 3. Start the server (with auto-reload on file changes)
npm run dev

# OR start without auto-reload
npm start
```

Server runs at **http://localhost:5000**.

---

## Testing the API

Use **Postman**, **Thunder Client** (VS Code extension), or `curl`:

```bash
# Test GET /courses
curl http://localhost:5000/courses

# Test POST /enroll — valid request
curl -X POST http://localhost:5000/enroll \
  -H "Content-Type: application/json" \
  -d "{\"userId\": 123, \"courseId\": 1}"

# Test POST /enroll — missing field (should return 400)
curl -X POST http://localhost:5000/enroll \
  -H "Content-Type: application/json" \
  -d "{\"userId\": 123}"
```

---

## Submission Checklist

- [ ] `node_modules/` folder deleted before zipping
- [ ] Entire folder zipped as `Capstone_Section2_Murugesan.zip`
- [ ] All endpoints tested and working
