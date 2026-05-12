# CLAUDE.md - Build Instructions

## Build & Run
- Backend: `cd partB && npm install && npm run dev`
- Tests: `npm test`

## Conventions
- Conventional Commits
- ESLint + Prettier
- Feature folders
- No console.log in production

## No-Go Zones
- No external heavy dependencies (only express, sqlite3, cors, dotenv)
- No auth for this project
- Keep it simple and clean

## AI Rules
- Always review security
- Write tests for critical paths