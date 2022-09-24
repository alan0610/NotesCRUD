# Notes
Notes is a full stack CRUD app where you can create, update, read and delete notes with title and their description. Created with Nodejs and React
## Envinroment setup

1. Create database
2. Copy .env.example to .env and fill with database credentials.

To install dependencies, run

```bash
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
backend
npm i
node app.js
```

```bash
frontend
npm start
```
