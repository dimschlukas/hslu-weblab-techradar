# Techradar HSLU Weblab Project

This project consists of the following components:

| Layer        | Technology | Purpose                               |
| ------------ | ---------- | ------------------------------------- |
| **Frontend** | Angular    | Client-side web application framework |
| **Backend**  | Express.js | Lightweight web framework for Node.js |
| **Database** | MongoDB    | Persistent data storage               |

## Documentation

Documentation follows the [arc42](https://arc42.org/) documentation standard and is primarily written in Markdown:

- [arc42_documentation.md](docs/arc42_documentation.md)

Additionally, a work journal tracks project progress:

- [work_journal.md](docs/work_journal.md)

Presentation slides are created in [Typst](https://typst.app/home) and exported as PDF:

- [presentation.pdf](docs/presentation.pdf)
- [presentation.typ](docs/presentation.typ)

## Deployment

### 1. Clone the Repository

```bash
git clone git@github.com:dimschlukas/hslu-weblab-techradar.git
cd hslu-weblab-techradar
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
```

#### Optional but highly recommended Changes

Edit the `.env` file and replace the following values for security reasons:

- `MONGO_INITDB_ROOT_PASSWORD`
- `MONGO_APP_PASSWORD`
- `JWT_SECRET`
- `BACKEND_URL` (Optional: Replace `localhost` with the public-facing IP/Domain of the server.)

### 3. Build and Run with Docker Compose

```bash
docker compose up --build
```

### 4. Access the Web Application

The web app should now be accessible via port `80`:

```
For Example:
    http://localhost
    http://your-own-domain.com
```

## Usage

### 1. Login Credentials

Use the following test accounts to log in:

| Email             | Password    | Role        |
| ----------------- | ----------- | ----------- |
| `play@hslu.ch`    | `weblab`    | `CTO`       |
| `lukas@hslu.ch`   | `santana01` | `CTO`       |
| `andreas@hslu.ch` | `santana01` | `Tech Lead` |
| `philipp@hslu.ch` | `santana01` | `Employee`  |
| `martin@hslu.ch`  | `santana01` | `NA`        |

### 2. Explore the Web App

Navigate to `http://localhost` and log in with the provided credentials.

- **CTOs and Tech Leads** have access to the admin panel, which is accessible via a toggle switch on the top right corner of the web app.

## Development

### 1. Install Dependencies

```bash
npm ci
npm run install:all
```

### 2. Set Up Environment Variables

```bash
cp .env.example .env
```

### 3. Start Individual Components

Each component can be started individually from its respective subdirectory:

```bash
# Database
cd database && docker compose up

# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run start
```

Alternatively, you can start the entire development stack from the root directory:

```bash
npm run dev
```

This will start the database, backend, and frontend together.

### 4. Development URLs

- **Database:** `mongodb://localhost:27017`
- **Backend:** `http://localhost:3000`
- **Frontend:** `http://localhost:4200`

## Troubleshooting

### Common Issues & Solutions

#### 1. MongoDB Connection Issues

- Ensure MongoDB is running: `docker ps | grep mongo`
- Check `.env` for correct database credentials.

#### 2. Backend Not Starting

- Run `npm run build` before `npm run dev`.
- Check that `MONGO_URI` in `.env` is correctly set.
