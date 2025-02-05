# Techradar HSLU Weblab project

This project consists of following components:

| Layer        | Technology | Purpose                               |
| ------------ | ---------- | ------------------------------------- |
| **Frontend** | Angular    | Client-side web application framework |
| **Backend**  | Express.js | Lightweight web framework for Node.js |
| **Database** | MongoDB    | Persistent data storage               |

## Documentation

Documentation is written following the [arc42](https://arc42.org/) documentation standard. Mostly all is written in plain markdown and can be found within the [`./docs`](docs/) subdirectory.

Since this is a school project, I also needed to track my work in a journal: [View Work Journal](docs/work_journal.md)

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
