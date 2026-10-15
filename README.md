<<<<<<< HEAD
# Video Search Engine

A video search application designed to help users find relevant information inside video content.

## Tech Stack

- **Frontend:** React, JavaScript, Vite
- **Backend:** Python, FastAPI
- **Database:** PostgreSQL with pgvector
- **Task Queue / Cache:** Redis
- **Object Storage:** MinIO for local development
- **Video Processing:** FFmpeg and FFprobe
- **Deployment:** AWS (planned)

## Project Structure

```text
video-search/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   └── config.py
│   ├── requirements.txt
│   └── .env.example
├── frontend/
├── docker-compose.yml
├── .gitignore
└── README.md
```

## Prerequisites

- Python 3.12
- Node.js and npm
- Docker Desktop
- FFmpeg and FFprobe

## Run the Backend

Open PowerShell in the backend directory:

```powershell
cd backend
.\.venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload --port 8000
```

Backend health check: http://localhost:8000/health

API documentation: http://localhost:8000/docs

## Run the Frontend

Open a separate terminal:

```powershell
cd frontend
npm install
npm run dev
```

Frontend URL: http://localhost:5173/

## Project Status

Phase 0 — Foundation and local development setup.

Upcoming work includes database integration, authentication, video ingestion, transcript generation, semantic search, and timestamped answers.
=======
# video-search-engine
>>>>>>> origin/main
