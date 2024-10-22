# Full-Stack Authentication Application

This is a full-stack web application that implements user authentication using **Next.js** on the frontend and **Node.js** with **Express** on the backend. The application allows users to sign up, log in, access protected content, and log out. It uses **JWT (JSON Web Tokens)** for authentication and **PostgreSQL** as the database for storing user information.

## Features

- **User Signup**: Allows new users to create an account.
- **User Login**: Users can log in with their credentials (email and password).
- **JWT-based Authentication**: Secure, stateless authentication using JWT tokens.
- **Protected Routes**: Only accessible to authenticated users; displays user-specific content.
- **User Logout**: Users can log out, which clears the JWT token from the client.
- **Password Hashing**: User passwords are hashed using **bcrypt** before storing them in the database for added security.

## Security Measures

This application uses several security measures to ensure the safety of user data and protection against common web vulnerabilities:

1. **Helmet**: 
   - Used to set secure HTTP headers to protect the app from certain web vulnerabilities such as Cross-Site Scripting (XSS), Content Security Policy (CSP) issues, and others.
   
2. **xss-clean**: 
   - Middleware that sanitizes user input to prevent **Cross-Site Scripting (XSS)** attacks, ensuring that malicious scripts cannot be injected into forms or URLs.

3. **CORS (Cross-Origin Resource Sharing)**:
   - **CORS** is enabled to allow safe communication between the frontend and backend from different origins.

4. **Password Hashing**: 
   - **bcrypt** is used to hash passwords before storing them in the database. This ensures that even if the database is compromised, user passwords remain secure.

5. **JWT Expiration**: 
   - JWT tokens have an expiration time set (1 hour) to limit the time window in which a token can be used, providing an additional layer of security.

## Technologies Used

### Frontend:
- **Next.js** (App Router) for building the user interface and handling routing.
- **Axios** for sending HTTP requests to the backend.
- **JWT** (JSON Web Token) for storing user authentication data.

### Backend:
- **Node.js** and **Express** for building the API.
- **PostgreSQL** for the database.
- **Sequelize** as the ORM to interact with the PostgreSQL database.
- **bcrypt.js** for hashing user passwords.
- **jsonwebtoken** for generating and verifying JWT tokens.
- **Helmet** for securing HTTP headers.
- **xss-clean** for preventing XSS attacks.

## Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (version 14 or later)
- **PostgreSQL**
- **npm** (Node Package Manager)
