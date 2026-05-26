# KDAG Digest Backend

Backend server for the KDAG Digest blog platform.  
This backend provides API endpoints for serving blog data to the frontend application using Express.js and JSON data handling.


## Features

- REST API using Express.js
- JSON-based blog data serving
- Blog retrieval endpoints
- Lightweight backend architecture
- Frontend integration support


## Tech Stack

### Backend
- Node.js
- Express.js

### Data Handling
- JSON

### Tools
- Git & GitHub
- Postman
- VS Code


## Prerequisites

Make sure the following are installed on your system:

- Node.js
- npm
- Git


## Installation

### 1. Clone the repository

```bash
git clone https://github.com/bothrayash276/KDAG-Digest-Backend.git
```

### 2. Navigate to the project directory

```bash
cd KDAG-Digest-Backend
```

### 3. Install dependencies

```bash
npm install
```


## Running the Server

Start the backend server:

```bash
npm start
```

or if using nodemon:

```bash
npm run dev
```

Server will run on:

```bash
http://localhost:3000
```


## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/posts` | Fetch all blogs |
| GET | `/posts/:uid` | Fetch blog by ID |


## Frontend Repository

Frontend Repository:  
https://github.com/bothrayash276/KDAG-Digest


## Author

Yash Bothra