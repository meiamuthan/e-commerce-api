Express Authentication API ...

A secure authentication and authorization REST API built using Node.js, Express, MongoDB, and JSON Web Tokens (JWT).
This project demonstrates user registration, login, and protected routes using JWT-based authentication.


- Features -

User Registration

User Login with JWT authentication

Password hashing using bcrypt (planned)

Protected routes with JWT

MongoDB database with Mongoose

Environment variable support using dotenv

Current version establishes login functionality with JWT token generation. Future versions will include additional security and features.


🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

bcryptjs (planned)

dotenv


⚙️ Current Functionality

User can register and login.

If login is successful, a JWT token is created and returned.

Token can be used to access protected routes.

🔜 Future Enhancements

Password hashing using bcrypt

Role-based authorization (admin & user)

Products module for querying and testing authorization

Additional security and error handling

📌 Notes

This is an early-stage project focused on authentication.

Intended as a base for building a full-featured backend API.





