# NestJS

NestJS from zero to hero

# lecture/02-installing-the-NestJS

```bash
npm i -g @nestjs/cli
```

> After installed, using `nest --version` to check current nestjs

# lecture/03-project-overview

## **AppModule (root)**

| TasksModule           | AuthModule     |
| --------------------- | -------------- |
| TasksController       | AuthController |
| TasksService          | AuthService    |
| TasksEntity           | UserRepository |
| TasksRepository       | UserEntity     |
| Status ValidationPipe | JwtStratery    |
| ...                   | ..             |

## **API Endpoints Tasks**

| Endpoints         | Methods | Description               |
| ----------------- | ------- | ------------------------- |
| /tasks            | GET     | Get tasks (incl. filters) |
| /tasks/:id        | GET     | Get a tasks               |
| /tasks            | POST    | Create a task             |
| /tasks/:id        | DELETE  | Delete a task             |
| /tasks/:id/status | PATCH   | Update a task             |
| ---               | ---     | ---                       |
| /auth/signup      | POST    | Sign up                   |
| /auth/signin      | POST    | Sign in                   |

## **Objectives: NestJS**

- NestJS Modules
- NestJS Controllers
- NestJS Services and Providers
- Controllers-to-Service communication.
- Validation using NestJS Pipes

## **Objectives: Back-end && Architecture**

- Develop production-ready REST APIs
- CRUD operations (Create, Read, Update, Delete)
- Error handling
- Data Transfer Objects (DTO)
- System modularity
- Back-end development best practices
- Configuration Management
- Logging
- Security best practices

## **Objectives: Persistence**

- Connecting the application to a database
- Working with relational databases
- Using TypeORM
- Writing simple and complex queries using QueryBuilder
- Performance when working with a database

## **Objectives: Authorization/Authentication**

- Signing up/ signin in
- Authentication and Authorization
- Protected resources
- Ownership of tasks by users
- Using JWT tokens (JSON Web Tokens).
- Password hashing, salts and properly storing passwords

## **Objectives: Deployment**

- Polishing the application for Production use
- Deploying NestJS apps to AWS(Amazong Web Services)
- Deploying front-end applications to Amazon S3
- Wiring up the front-end and back-end
