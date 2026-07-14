// Step 1: Select (or create) the database
// use schoolsystem

// ─────────────────────────────────────────
// Step 2: Create Collections (Tables)
// ─────────────────────────────────────────

db.createCollection("schools")
db.createCollection("courses")
db.createCollection("enrollments")

// ─────────────────────────────────────────
// Step 3: Insert into schools
// ─────────────────────────────────────────

db.schools.insertMany([
  { "_id": ObjectId("665f1fa4a7d3f1a0aabc1001"), "name": "Greenwood High School", "address": "123 Maple Street, Springfield", "principal": "Mr. John Adams" },
  { "_id": ObjectId("665f1fa4a7d3f1a0aabc1002"), "name": "Riverside Public School", "address": "456 Oak Avenue, Riverdale", "principal": "Ms. Linda Carter" },
  { "_id": ObjectId("665f1fa4a7d3f1a0aabc1003"), "name": "Seatrium Academy", "address": "789 Harbour Road, Singapore", "principal": "Mr. Naveen Murugesan" }
])

// ─────────────────────────────────────────
// Step 4: Insert into courses
// ─────────────────────────────────────────

db.courses.insertMany([
  { "title": "HTML Basics", "description": "Introduction to HTML and web structure.", "school": ObjectId("665f1fa4a7d3f1a0aabc1001") },
  { "title": "CSS Design", "description": "Learn how to style websites using CSS.", "school": ObjectId("665f1fa4a7d3f1a0aabc1001") },
  { "title": "MySQL for Beginners", "description": "Basic concepts of relational databases.", "school": ObjectId("665f1fa4a7d3f1a0aabc1002") },
  { "title": "AI Fundamentals", "description": "Introduction to artificial intelligence concepts.", "school": ObjectId("665f1fa4a7d3f1a0aabc1002") }
])

// ─────────────────────────────────────────
// Step 5: Insert into enrollments
// ─────────────────────────────────────────

db.enrollments.insertMany([
  { "studentName": "Alice Johnson", "studentEmail": "alice@example.com", "course": "HTML Basics", "enrollmentDate": new Date("2024-01-10") },
  { "studentName": "Bob Smith", "studentEmail": "bob@example.com", "course": "CSS Design", "enrollmentDate": new Date("2024-02-15") },
  { "studentName": "Charlie Lee", "studentEmail": "charlie@example.com", "course": "HTML Basics", "enrollmentDate": new Date("2024-03-01") },
  { "studentName": "Daniel Rose", "studentEmail": "daniel@lms.com", "course": "CSS Design", "enrollmentDate": new Date() }
])

// ─────────────────────────────────────────
// Step 6: Read all data to verify
// ─────────────────────────────────────────

db.schools.find()
db.courses.find()
db.enrollments.find()
