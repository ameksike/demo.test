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