# Section 3 Paste-Ready Scripts and Steps

This file contains the exact scripts and short steps for both MySQL and MongoDB tasks.

## 1) MySQL Script

### Steps
1. Open Command Prompt.
2. Go to your MySQL `bin` folder.
3. Log in using `mysql -u root -p`.
4. Paste the script below.
5. Run it in MySQL.

### Script
```sql
CREATE DATABASE IF NOT EXISTS lms_db;
USE lms_db;

CREATE TABLE users (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  password VARCHAR(255)
);

CREATE TABLE courses (
  course_id INT AUTO_INCREMENT PRIMARY KEY,
  course_name VARCHAR(100),
  description TEXT
);

CREATE TABLE enrollments (
  enrollment_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  course_id INT,
  enrollment_date DATE,
  FOREIGN KEY (user_id) REFERENCES users(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

CREATE TABLE assessments (
  assessment_id INT AUTO_INCREMENT PRIMARY KEY,
  course_id INT,
  title VARCHAR(100),
  max_score INT,
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

INSERT INTO users (name, email, password) VALUES
  ('Alice Johnson', 'alice@example.com', 'alice123'),
  ('Bob Smith', 'bob@example.com', 'bob123'),
  ('Charlie Lee', 'charlie@example.com', 'charlie123');

INSERT INTO courses (course_name, description) VALUES
  ('HTML Basics', 'Introduction to HTML and web structure.'),
  ('CSS Design', 'Learn how to style websites using CSS.'),
  ('MySQL for Beginners', 'Basic concepts of relational databases.');

INSERT INTO enrollments (user_id, course_id, enrollment_date) VALUES
  (1, 1, '2024-01-10'),
  (1, 3, '2024-02-05'),
  (2, 2, '2024-02-15'),
  (3, 1, '2024-03-01');

INSERT INTO assessments (course_id, title, max_score) VALUES
  (1, 'HTML Quiz 1', 100),
  (2, 'CSS Midterm', 80),
  (3, 'MySQL Final Test', 90);

SELECT * FROM users;

SELECT u.name, c.course_name
FROM enrollments e
JOIN users u ON e.user_id = u.user_id
JOIN courses c ON e.course_id = c.course_id
WHERE u.user_id = 1;

UPDATE users
SET email = 'alice.new@example.com'
WHERE user_id = 1;

DELETE FROM enrollments
WHERE enrollment_id = 2;

CREATE TABLE instructors (
  instructor_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL
);

INSERT INTO instructors (name, email) VALUES
  ('Dr. Sarah Mitchell', 'sarah.mitchell@lms.com'),
  ('Prof. James Carter', 'james.carter@lms.com'),
  ('Ms. Priya Nair', 'priya.nair@lms.com');

INSERT INTO users (name, email, password) VALUES
  ('Daniel Rose', 'daniel@lms.com', 'daniel123');

INSERT INTO enrollments (user_id, course_id, enrollment_date)
VALUES (
  (SELECT user_id FROM users WHERE email = 'daniel@lms.com'),
  (SELECT course_id FROM courses WHERE course_name = 'CSS Design'),
  CURDATE()
);

SELECT
  u.user_id,
  u.name AS student_name,
  u.email,
  e.enrollment_date
FROM enrollments e
JOIN users u ON e.user_id = u.user_id
JOIN courses c ON e.course_id = c.course_id
WHERE c.course_name = 'CSS Design'
ORDER BY e.enrollment_date;
```

---

## 2) MongoDB Script

### Steps
1. Open MongoDB Compass and connect to your local or Atlas database.
2. Open a new database or use `schoolsystem`.
3. Open the MongoDB shell or Compass playground.
4. Paste the script below.
5. Run it.

### Script
```javascript
use schoolsystem

const schoolOneId = ObjectId("665f1fa4a7d3f1a0aabc1001")
const schoolTwoId = ObjectId("665f1fa4a7d3f1a0aabc1002")
const schoolThreeId = ObjectId("665f1fa4a7d3f1a0aabc1003")

const htmlCourseId = ObjectId()
const cssCourseId = ObjectId()
const mysqlCourseId = ObjectId()
const aiCourseId = ObjectId()

db.createCollection("schools")
db.createCollection("courses")
db.createCollection("enrollments")

db.schools.insertMany([
  { "_id": schoolOneId, "name": "Greenwood High School", "address": "123 Maple Street, Springfield", "principal": "Mr. John Adams" },
  { "_id": schoolTwoId, "name": "Riverside Public School", "address": "456 Oak Avenue, Riverdale", "principal": "Ms. Linda Carter" },
  { "_id": schoolThreeId, "name": "Seatrium Academy", "address": "789 Harbour Road, Singapore", "principal": "Mr. Naveen Murugesan" }
])

db.courses.insertMany([
  { "_id": htmlCourseId, "title": "HTML Basics", "description": "Introduction to HTML and web structure.", "school": schoolOneId },
  { "_id": cssCourseId, "title": "CSS Design", "description": "Learn how to style websites using CSS.", "school": schoolOneId },
  { "_id": mysqlCourseId, "title": "MySQL for Beginners", "description": "Basic concepts of relational databases.", "school": schoolTwoId },
  { "_id": aiCourseId, "title": "AI Fundamentals", "description": "Introduction to artificial intelligence concepts.", "school": schoolTwoId }
])

db.enrollments.insertMany([
  { "studentName": "Alice Johnson", "studentEmail": "alice@example.com", "course": htmlCourseId, "enrollmentDate": new Date("2024-01-10") },
  { "studentName": "Bob Smith", "studentEmail": "bob@example.com", "course": cssCourseId, "enrollmentDate": new Date("2024-02-15") },
  { "studentName": "Charlie Lee", "studentEmail": "charlie@example.com", "course": htmlCourseId, "enrollmentDate": new Date("2024-03-01") },
  { "studentName": "Daniel Rose", "studentEmail": "daniel@lms.com", "course": cssCourseId, "enrollmentDate": new Date() }
])

db.schools.find()
db.courses.find()
db.enrollments.find()
```

### Add one new school document
If you only need to insert a single new school in MongoDB Compass, use this document:
```json
{
  "_id": { "$oid": "665f1fa4a7d3f1a0aabc1004" },
  "name": "Northview Academy",
  "address": "12 Hill Road, Metro City",
  "principal": "Mrs. Ananya Roy"
}
```

## 3) Quick Submission Notes
- Save the MySQL script as your SQL PDF or keep this file as reference.
- Save the MongoDB commands and screenshots as your MongoDB PDF.
- Remove `node_modules` before zipping Section 2 and Section 3 projects.
