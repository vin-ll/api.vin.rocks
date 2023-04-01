<h1 align="center">API.VIN.ROCKS</h1>

<p align="center">
  A simple and powerful API for my website https://vin.rocks, built with NestJS, Node.js, TypeScript, and MongoDB.
</p>

<p align="center">
  <a href="https://github.com/vin-ll/api.vin.rocks">Issues</a> · <a href="https://github.com/vin-ll/vin.rocks">Pull Requests</a> · <a href="SECURITY.md">Security</a>
</p>

## Features

- Fast and efficient endpoints for my website https://vin.rocks
- Secure user authentication and authorization using JWT
- Simple and intuitive API documentation using Swagger UI
- Built with NestJS, a modern and flexible Node.js framework
- Written in TypeScript for better type safety and maintainability
- Uses MongoDB as a database for scalability and flexibility

## Routes

| Route | Method | Description |
| --- | --- | --- |
| /api/auth/login | POST | Authenticate a user and generate a JWT |
| /api/auth/register | POST | Register a new user |
| /api/users/:id | GET | Get a specific user by ID |
| /api/users/:id | PUT | Update a specific user by ID |
| /api/users/:id | DELETE | Delete a specific user by ID |
| /api/posts | GET | Get all posts |
| /api/posts/:id | GET | Get a specific post by ID |
| /api/posts | POST | Create a new post |
| /api/posts/:id | PUT | Update a specific post by ID |
| /api/posts/:id | DELETE | Delete a specific post by ID |

## Installation

1. Clone this repository to your local machine
2. Install the required dependencies using `npm install`
3. Build the project using `npm run build`
4. Start the project using `npm run start:prod`

## Contributing

If you're interested in contributing to this project, please read our [contributing guidelines](CONTRIBUTING.md) before submitting a pull request.

## Security

Please see our [security policy](SECURITY.md) for information on reporting security vulnerabilities.

## License

This project is licensed under the [MIT License](LICENSE).
