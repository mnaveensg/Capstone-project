# AI LMS Capstone - Section 2 Backend

This folder contains a simple Express.js backend for the LMS project.

## Routes

- `GET /` - welcome message
- `GET /courses` - list sample courses
- `POST /enroll` - enroll a user in a course

The `/enroll` route returns a `400` error if `userId` or `courseId` is missing.

## Run the server

```bash
npm install
npm start
```

The backend runs on `http://localhost:5000`.

## Example

```bash
curl -X POST http://localhost:5000/enroll \
  -H "Content-Type: application/json" \
  -d "{\"userId\":123,\"courseId\":1}"
```

## Notes

- This workspace is backend-only.
- Keep `node_modules/` out of the final zip submission.
