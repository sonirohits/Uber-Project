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

# Captain Registration API Documentation

## Register Captain
Endpoint to register a new captain in the system.

### Endpoint
```
POST /captains/register
```

### Request Body
| Field              | Type     | Description                          | Required |
|-------------------|----------|--------------------------------------|----------|
| fullname.firstname| string   | First name of the captain            | Yes      |
| fullname.lastname | string   | Last name of the captain             | Yes      |
| email            | string   | Captain's email address              | Yes      |
| password         | string   | Captain's password                   | Yes      |
| vehicle.color    | string   | Vehicle color                        | Yes      |
| vehicle.plate    | string   | Vehicle plate number                 | Yes      |
| vehicle.capacity | number   | Vehicle passenger capacity           | Yes      |
| vehicle.vehicleType| string  | Type of vehicle (car/motorcycle/auto)| Yes      |

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.captain@example.com",
  "password": "securepass",
  "vehicle": {
    "color": "black",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response Status Codes
| Status Code | Description                                           |
|-------------|-------------------------------------------------------|
| 201         | Captain successfully registered                        |
| 400         | Bad Request - Missing or invalid required fields       |
| 409         | Conflict - Email already exists                        |
| 500         | Internal Server Error                                  |

### Success Response Example
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.captain@example.com",
    "vehicle": {
      "color": "black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Error Response Example
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname"
    }
  ]
}
```

### Validation Rules
- First name must be at least 3 characters long
- Email must be a valid email format
- Password must be at least 5 characters long
- Vehicle color must be at least 3 characters long
- Vehicle plate must be at least 3 characters long
- Vehicle capacity must be at least 1
- Vehicle type must be one of: car, motorcycle, auto

# Captain API Routes Documentation

## Register Captain (`POST /captains/register`)

### Request Body
```json
{
  "fullname": {
    "firstname": "John", // minimum 3 characters
    "lastname": "Doe"    // minimum 3 characters
  },
  "email": "captain@example.com",    // must be valid email format
  "password": "secret123",           // minimum 5 characters
  "vehicle": {
    "color": "Black",               // minimum 3 characters
    "plate": "ABC123",              // minimum 3 characters
    "capacity": 4,                  // minimum value: 1
    "vehicleType": "car"           // must be: "car", "motorcycle", or "auto"
  }
}
```

### Response (201 Created)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...",  // JWT token valid for 24 hours
  "captain": {
    "_id": "60d5ecb8b5c9c62b3c7c1b9e",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",         // default status
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
```

## Login Captain (`POST /captains/login`)

### Request Body
```json
{
  "email": "captain@example.com",    // must be valid email
  "password": "secret123"           // minimum 5 characters
}
```

### Response (200 OK)
```json
{
  "token": "eyJhbGciOiJIUzI1NiIs...", // JWT token valid for 24 hours
  "captain": {
    "_id": "60d5ecb8b5c9c62b3c7c1b9e",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
```

## Get Captain Profile (`GET /captains/profile`)

### Headers
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIs..."  // JWT token required
}
```

### Response (200 OK)
```json
{
  "captain": {
    "_id": "60d5ecb8b5c9c62b3c7c1b9e",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "Black",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive",
    "location": {
      "lat": null,
      "lng": null
    }
  }
}
```

## Logout Captain (`GET /captains/logout`)

### Headers
```json
{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIs..."  // JWT token required
}
```

### Response (200 OK)
```json
{
  "message": "Logout successfully"
}
```

### Error Responses

#### Validation Error (400 Bad Request)
```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname"
    }
  ]
}
```

#### Authentication Error (401 Unauthorized)
```json
{
  "message": "Unauthorized"
}
```

#### Server Error (500 Internal Server Error)
```json
{
  "error": "Internal server error message"
}
```
