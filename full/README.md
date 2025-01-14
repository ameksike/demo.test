# User API with ESM and Jest Tests

This project demonstrates a simple User API implemented with Express.js and tested using Jest and Supertest. The API allows creating, retrieving, updating, and deleting user records, with additional user data such as avatar, birthday, sex, and subscription tier. 

## Purpose

The purpose of this project is to:
- Showcase a simple API with full CRUD functionality.
- Use ESM (ECMAScript Modules) in a Node.js project.
- Provide integration tests for the API using Jest and Supertest.
  
## Project Structure
```
project/
├── routes/
│   ├── frontend.js       # Rutas para las páginas HTML (formulario y listado)
│   ├── api.js            # Rutas para el CRUD de usuarios (API)
├── views/
│   ├── form.html         # Página para el registro de usuarios
│   ├── list.html         # Página para el listado de usuarios
├── server.js             # Archivo principal
```

### Description of Files:
- **`/routes/api.js`**: Contains the Express.js API routes for user CRUD operations.
- **`/routes/frontend.js`**: Serves the frontend user registration form.
- **`/views/form.html`**: The HTML form for user registration.
- **`/tests/api.test.mjs`**: Contains Jest and Supertest integration tests for the API.
- **`jest.config.cjs`**: Jest configuration file for ESM compatibility.
- **`server.js`**: Main entry point that sets up the Express server.


## Running the Application
- npm install
- npm start
- GET http://localhost:3000

## Running Unit and Integration Test 
- npm test

## E2E with Playright
- npm run test:e2e:pg:run
- npm run test:e2e:pg:ui
- npm run test:e2e:pg:report

## E2E with Cypress
- 

## API Endpoints

### 1. **POST /api/user** - Create a User
Creates a new user with the provided information.

```
POST /api/user
```

**Request Example:**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "avatar": "https://example.com/avatar.jpg",
  "birthday": "1990-01-01",
  "sex": "male",
  "subscriptionTier": "basic"
}
```
**Response Example:**
```json
{
  "message": "User created",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "avatar": "https://example.com/avatar.jpg",
    "birthday": "1990-01-01",
    "sex": "male",
    "subscriptionTier": "basic"
  }
}
```

### 2. GET /api/user - Retrieve All Users
Fetches all users from the database.
```
GET /api/user
```

**Response Example:**
```json
[
  {
    "id": 1,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "avatar": "https://example.com/avatar.jpg",
    "birthday": "1990-01-01",
    "sex": "male",
    "subscriptionTier": "basic"
  },
  {
    "id": 2,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "avatar": "https://example.com/avatar2.jpg",
    "birthday": "1985-05-15",
    "sex": "female",
    "subscriptionTier": "free"
  }
]
```

### 3. GET /api/user/:id - Retrieve User by ID
Fetches a specific user by ID.

```
GET /api/user/1
```

Request Example:

```json
{
  "id": 1,
  "name": "John Doe",
  "email": "john.doe@example.com",
  "avatar": "https://example.com/avatar.jpg",
  "birthday": "1990-01-01",
  "sex": "male",
  "subscriptionTier": "basic"
}
```

### 4. PUT /api/user/:id - Update User Details
Updates the user details by ID.

Request Example:

```json
{
  "name": "John Updated",
  "subscriptionTier": "business"
}
```

Response Example:
```json
{
  "message": "User updated",
  "user": {
    "id": 1,
    "name": "John Updated",
    "email": "john.doe@example.com",
    "avatar": "https://example.com/avatar.jpg",
    "birthday": "1990-01-01",
    "sex": "male",
    "subscriptionTier": "business"
  }
}
```

### 5. DELETE /api/user/:id - Delete a User
Deletes a specific user by ID.

```
DELETE /api/user/1
```

Response Example:

```json
{
  "message": "User deleted"
}
```

## Install 

- Playwright
  - npm init playwright@latest