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
