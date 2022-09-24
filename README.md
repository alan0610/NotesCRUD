# Notes
Notes is a full stack CRUD app where you can create, update, read and delete notes with title and their description. Created with Nodejs, React and MySql for the database

## Envinroment setup

1. Create database "notas"

2. To install dependencies, run

```bash
cd backend
npm install
```

3. Migrations:

```bash
npx sequelize-cli db:migrate
```

4. Seeders:

```bash
npx sequelize-cli db:seed:all
```

## Installation

```bash
cd backend
node app.js
```

```bash
cd frontend
npm start
```
