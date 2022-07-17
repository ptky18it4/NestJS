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

# lecture/04-creating-a-project-via-the-cli

- creating project via the cli

```bash
nest new nestjs-task-management
```

# lecture/05-introduction-to-modules

- Each application has at least one module - the root module. That is the starting point of the application..

- Modules are an effective way to organize components by a closely related set of capabilities (e.g. per feature).

- It is a good practice to have a folder per module, containing the module's components

- Modules are `singletons`, therefore a module can be imported by multiple other modules.

## Defining a module

A module is definded by annotating a class with the `@Module` decorator.

The decorator provides metadatas that Nest users to organize the application structure.

## @Module Decorator Properties

- `providers` : Array of providers to be available within the module via dependency injection.
- `controller` : Array of controllers to be instantiated within the module.
- `exports` : Array of providers to export to other modules.
- `imports` : List of modules required by this module. Any exported provider by these modules will now be available in our module via dependency injection

## ForumModule Example Diagram

![ScreenShort](./nestjs-task-management/assets/ForumModule.png)

![ScreenShort](./nestjs-task-management/assets/Module%20Definition%20Examplepng.png)

# lecture/06-Creating a Project | Module Scalable API | Modern TypeScript | JS

> Pattern

```bash
nest g module module_name
```

> Bash

```bash
nest g module tasks
```
