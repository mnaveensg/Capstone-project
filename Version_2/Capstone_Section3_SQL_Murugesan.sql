-- =============================================================
-- AI LMS Capstone – Section 3: MySQL Queries
-- Author : Murugesan
-- =============================================================


-- ── Step 1: Create and select the database ───────────────────
CREATE DATABASE IF NOT EXISTS lms_db;
USE lms_db;


-- ── Step 2: Create Tables ────────────────────────────────────

-- Table 1: Users
CREATE TABLE users (
  user_id   INT AUTO_INCREMENT PRIMARY KEY,
  name      VARCHAR(100),
  email     VARCHAR(100) UNIQUE,
  password  VARCHAR(255)
);

-- Table 2: Courses
CREATE TABLE courses (
  course_id   INT AUTO_INCREMENT PRIMARY KEY,
  course_name VARCHAR(100),
  description TEXT
);

-- Table 3: Enrollments
CREATE TABLE enrollments (
  enrollment_id   INT AUTO_INCREMENT PRIMARY KEY,
  user_id         INT,
  course_id       INT,
  enrollment_date DATE,
  FOREIGN KEY (user_id)   REFERENCES users(user_id),
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);

-- Table 4: Assessments
CREATE TABLE assessments (
  assessment_id INT AUTO_INCREMENT PRIMARY KEY,
  course_id     INT,
  title         VARCHAR(100),
  max_score     INT,
  FOREIGN KEY (course_id) REFERENCES courses(course_id)
);


-- ── Step 3: Insert Sample Data ───────────────────────────────

-- Insert Users
INSERT INTO users (name, email, password) VALUES
  ('Alice Johnson', 'alice@example.com',   'alice123'),
  ('Bob Smith',     'bob@example.com',     'bob123'),
  ('Charlie Lee',   'charlie@example.com', 'charlie123');

-- Insert Courses
INSERT INTO courses (course_name, description) VALUES
  ('HTML Basics',         'Introduction to HTML and web structure.'),
  ('CSS Design',          'Learn how to style websites using CSS.'),
  ('MySQL for Beginners', 'Basic concepts of relational databases.');

-- Insert Enrollments
INSERT INTO enrollments (user_id, course_id, enrollment_date) VALUES
  (1, 1, '2024-01-10'),
  (1, 3, '2024-02-05'),
  (2, 2, '2024-02-15'),
  (3, 1, '2024-03-01');

-- Insert Assessments
INSERT INTO assessments (course_id, title, max_score) VALUES
  (1, 'HTML Quiz 1',      100),
  (2, 'CSS Midterm',       80),
  (3, 'MySQL Final Test',  90);


-- ── Step 4: CRUD Examples ────────────────────────────────────

-- READ: All users
SELECT * FROM users;

-- READ: Courses enrolled by user_id = 1 (Alice)
SELECT u.name, c.course_name
FROM   enrollments e
JOIN   users   u ON e.user_id   = u.user_id
JOIN   courses c ON e.course_id = c.course_id
WHERE  u.user_id = 1;

-- UPDATE: Change Alice's email
UPDATE users
SET   email = 'alice.new@example.com'
WHERE user_id = 1;

-- DELETE: Remove enrollment record with enrollment_id = 2
DELETE FROM enrollments
WHERE enrollment_id = 2;


-- ── Task 1: Create the instructors table ─────────────────────
-- Requirements: instructor_id (PK, AUTO_INCREMENT), name (varchar),
--               email (UNIQUE)

CREATE TABLE instructors (
  instructor_id INT AUTO_INCREMENT PRIMARY KEY,
  name          VARCHAR(100)        NOT NULL,
  email         VARCHAR(100) UNIQUE NOT NULL
);

-- Insert 3 sample instructors
INSERT INTO instructors (name, email) VALUES
  ('Dr. Sarah Mitchell', 'sarah.mitchell@lms.com'),
  ('Prof. James Carter',  'james.carter@lms.com'),
  ('Ms. Priya Nair',      'priya.nair@lms.com');

-- Verify
SELECT * FROM instructors;


-- ── Task 2a: Add new user Daniel Rose ────────────────────────
INSERT INTO users (name, email, password) VALUES
  ('Daniel Rose', 'daniel@lms.com', 'daniel123');

-- Verify the new user_id assigned to Daniel
SELECT user_id, name, email FROM users WHERE email = 'daniel@lms.com';


-- ── Task 2b: Enroll Daniel in "CSS Design" ───────────────────
-- course_id for "CSS Design" is 2 (inserted as 2nd course above)
-- Use CURDATE() so the enrollment date is always today's date

INSERT INTO enrollments (user_id, course_id, enrollment_date)
VALUES (
  (SELECT user_id FROM users  WHERE email       = 'daniel@lms.com'),
  (SELECT course_id FROM courses WHERE course_name = 'CSS Design'),
  CURDATE()
);


-- ── Task 2c: Display all users enrolled in "CSS Design" ──────
SELECT
  u.user_id,
  u.name        AS student_name,
  u.email,
  e.enrollment_date
FROM   enrollments e
JOIN   users   u ON e.user_id   = u.user_id
JOIN   courses c ON e.course_id = c.course_id
WHERE  c.course_name = 'CSS Design'
ORDER  BY e.enrollment_date;
