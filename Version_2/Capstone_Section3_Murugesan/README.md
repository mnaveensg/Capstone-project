# AI LMS Capstone — Section 3: Database

This section covers both **MySQL** (relational) and **MongoDB** (NoSQL) databases.

---

## Part A — MySQL

All queries are in [Capstone_Section3_SQL_Murugesan.sql](../Capstone_Section3_SQL_Murugesan.sql).  
Copy the contents of that file into **MySQL Workbench** or run it in the MySQL CLI.

### How to run in Command Prompt (Windows)

```cmd
:: 1. Open Command Prompt as Administrator
:: 2. Navigate to MySQL bin folder
cd "C:\Program Files\MySQL\MySQL Server 8.0\bin"

:: 3. Log in
mysql -u root -p

:: 4. Once logged in, run the SQL file
source C:/Users/Naveen.Murugesan-A/OneDrive - Seatrium Ltd/Projects/Capstone_project/Version_2/Capstone_Section3_SQL_Murugesan.sql
```

### What the SQL file covers

| Section | Description |
|---|---|
| Create tables | `users`, `courses`, `enrollments`, `assessments` |
| Insert sample data | 3 users, 3 courses, 4 enrollments, 3 assessments |
| CRUD examples | SELECT, UPDATE, DELETE |
| **Task 1** | Create `instructors` table (AUTO_INCREMENT PK, UNIQUE email) + 3 inserts |
| **Task 2a** | Insert new user Daniel Rose |
| **Task 2b** | Enrol Daniel in "CSS Design" using subqueries + `CURDATE()` |
| **Task 2c** | JOIN query — display all users enrolled in "CSS Design" |

---

## Part B — MongoDB Backend

### Project Structure

```
backend/
├── server.js                    # Express + Mongoose entry point
├── models/
│   ├── schoolModel.js           # School schema
│   ├── courseModel.js           # Course schema (ref → School)
│   └── enrollmentModel.js       # Enrollment schema (ref → Course)
├── routes/
│   ├── schoolRoutes.js          # CRUD for /api/schools
│   ├── courseRoutes.js          # CRUD for /api/courses
│   └── enrollmentRoutes.js      # CRUD for /api/enrollments
└── package.json
```

### How to Run

**Prerequisites:** Node.js, npm, and MongoDB installed locally (or a MongoDB Atlas URI).

```bash
cd Capstone_Section3_Murugesan/backend

# Install dependencies
npm install

# Start the server
npm start
```

Server runs at **http://localhost:5000**.  
MongoDB connects to `mongodb://127.0.0.1:27017/schoolsystem` by default.  
To use Atlas, replace the `MONGO_URI` value in `server.js`.

Expected console output:
```
MongoDB connected
Server running on port 5000
```

### API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/api/schools` | List all schools |
| POST | `/api/schools` | Add a new school |
| GET | `/api/courses` | List all courses |
| POST | `/api/courses` | Add a new course |
| GET | `/api/enrollments` | List all enrollments |
| POST | `/api/enrollments` | Add a new enrollment |

### MongoDB Compass — Seed Data

Open MongoDB Compass and connect to `mongodb://localhost:27017`.

**Database:** `schoolsystem` → **Collection:** `schools`

Insert these documents via **ADD DATA → Insert Document**:

```json
{
  "_id": { "$oid": "665f1fa4a7d3f1a0aabc1001" },
  "name": "Greenwood High School",
  "address": "123 Maple Street, Springfield",
  "principal": "Mr. John Adams"
}
```

```json
{
  "_id": { "$oid": "665f1fa4a7d3f1a0aabc1002" },
  "name": "Riverside Public School",
  "address": "456 Oak Avenue, Riverdale",
  "principal": "Ms. Linda Carter"
}
```

### MongoDB Task — Add a New School Entry

In MongoDB Compass, open `schoolsystem → schools`, click **ADD DATA → Insert Document**, and paste:

```json
{
  "_id": { "$oid": "665f1fa4a7d3f1a0aabc1003" },
  "name": "Seatrium Academy",
  "address": "789 Harbour Road, Singapore",
  "principal": "Mr. Naveen Murugesan"
}
```

Take a screenshot of the inserted document for the `Capstone_Section3_MongoDB_Murugesan.pdf` submission.

---

## Submission Checklist

- [ ] `Capstone_Section3_SQL_Murugesan.sql` — all queries run successfully in MySQL
- [ ] `Capstone_Section3_SQL_Murugesan.pdf` — PDF containing all MySQL queries and screenshots
- [ ] `Capstone_Section3_MongoDB_Murugesan.pdf` — PDF with MongoDB Compass screenshots (all 3 documents inserted including the new entry)
- [ ] `node_modules/` deleted before zipping the backend folder
- [ ] Backend folder zipped as `Capstone_Section3_Murugesan.zip`
