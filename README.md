# Techradar HSLU Weblab project

This project consists of following components:

| Layer        | Technology | Purpose                               |
| ------------ | ---------- | ------------------------------------- |
| **Frontend** | Angular    | Client-side web application framework |
| **Backend**  | Express.js | Lightweight web framework for Node.js |
| **Database** | MongoDB    | Persistent data storage               |

## Install

To install all dependencies, run:

```bash
npm ci
npm run install:all
```

## Development server

Each component can be spin up invidual within it's subdirectory.
To start the complete development stack, run:

```bash
npm run dev
```

This spins up the backend and serves it at https://localhost:3000 (3000 is the default port). And also the frontend on https://localhost:4200.
