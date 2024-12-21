# User Registration API Documentation

## Register User
Endpoint to register a new user in the system.

### Endpoint
```
POST /users/register
```

### Request Body
| Field      | Type     | Description                    | Required |
|------------|----------|--------------------------------|----------|
| name       | string   | Full name of the user          | Yes      |
| email      | string   | User's email address           | Yes      |
| password   | string   | User's password                | Yes      |
| phone      | string   | User's phone number            | Yes      |

### Example Request
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "yourpassword",
  "phone": "1234567890"
}
```

### Response Status Codes
| Status Code | Description                                           |
|-------------|-------------------------------------------------------|
| 201         | User successfully registered                           |
| 400         | Bad Request - Missing or invalid required fields       |
| 409         | Conflict - Email already exists                        |
| 500         | Internal Server Error                                  |

### Success Response Example
```json
{
  "status": "success",
  "message": "User registered successfully",
  "data": {
    "userId": "12345",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Error Response Example
```json
{
  "status": "error",
  "message": "Email already exists"
}
```

### Notes
- Password must be at least 6 characters long
- Email must be a valid email format
- Phone number must be a valid number

## Login User
Endpoint to authenticate a user and get access token.

### Endpoint
```
POST /users/login
```

### Request Body
| Field    | Type   | Description             | Required |
|----------|--------|-------------------------|----------|
| email    | string | User's email address    | Yes      |
| password | string | User's password         | Yes      |

### Example Request
```json
{
  "email": "john@example.com",
  "password": "yourpassword"
}
```

### Response Status Codes
| Status Code | Description                                    |
|------------|------------------------------------------------|
| 200        | Login successful                                |
| 400        | Bad Request - Missing or invalid fields         |
| 401        | Unauthorized - Invalid email or password        |
| 500        | Internal Server Error                           |

### Success Response Example
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "userId": "12345",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

### Error Response Example
```json
{
  "message": "Invalid email or password"
}
```

### Notes
- Email must be a valid email format
- Password must be at least 6 characters long

## Get User Profile
Endpoint to retrieve the authenticated user's profile information.

### Endpoint
```
GET /users/profile
```

### Headers
| Field          | Value                 | Required |
|----------------|----------------------|-----------|
| Authorization  | Bearer {token}       | Yes       |

### Response Status Codes
| Status Code | Description                                    |
|------------|------------------------------------------------|
| 200        | Success                                         |
| 401        | Unauthorized - Invalid or missing token         |
| 500        | Internal Server Error                           |

### Success Response Example
```json
{
  "userId": "12345",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890"
}
```

### Error Response Example
```json
{
  "message": "Unauthorized access"
}
```

## Logout User
Endpoint to logout the current user and invalidate their token.

### Endpoint
```
GET /users/logout
```

### Headers
| Field          | Value                 | Required |
|----------------|----------------------|-----------|
| Authorization  | Bearer {token}       | Yes       |

### Response Status Codes
| Status Code | Description                                    |
|------------|------------------------------------------------|
| 200        | Successfully logged out                         |
| 401        | Unauthorized - Invalid or missing token         |
| 500        | Internal Server Error                           |

### Success Response Example
```json
{
  "message": "Logged out successfully"
}
```

### Error Response Example
```json
{
  "message": "Unauthorized access"
}
```

### Notes
- The token will be blacklisted after logout
- Subsequent requests with the same token will be rejected
