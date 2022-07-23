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

![ScreenShort](./assets/ForumModule.png)

![ScreenShort](./assets/Module%20Definition%20Examplepng.png)

# lecture/06-Creating a Project | Module Scalable API | Modern TypeScript | JS

> Pattern

```bash
nest g module module_name
```

> Bash

```bash
nest g module tasks
```

# lecture/07-Creating a Controller in NestJS | Scalable API | Modern TypeScript

## NestJS controllers

Responsible for handling incoming `requests` and returning `responses` to the client

Bound to a specific `path` (for example, `"/tasks"` for the task resource).

Contain handlers, which handle endpoints and request methods (`GET`, `POST`, `DELETE`, etcetera).

Can take advantage of dependency injection to consume providers within the same module.

## Defining a Controller

Controller are definded by decorating a class with the `@Controller` decorator.

The decorator accepts a string. which is the `path` to be handled by the controller.

![Defining-A-Controller](./assets/defining%20a%20controller.png)

## Defining a handlers

Handler are simply methods within the controller class, decorated with decorators such as `@Get`, `@Post`, `@Delete` etcetera.

![Defining-a-Handler](./assets/defining%20a%20handler.png)

## HTTP request incoming

- Request routed to Controller, handler is called with arguments
  - NestJS will parse the relevant request data and it will be available in the handler.
- Handler handles the request

  - Perform operations such as communication with a service. For example, retrieving an item from the database.

- Handler returns response value
  - Response can be of any type and even and exception. Nest will wrap the returned value as an HTTP response and return it to the client.

| AuthController <br>`/auth`         | TasksController <br>`/tasks`              | UsersController <br>`/users`         |
| ---------------------------------- | ----------------------------------------- | ------------------------------------ |
| signin()<br> `POST /auth/signin`   | getAllTasks()<br> `GET /tasks`            | getUsers()<br> `GET /users/:id`      |
| signout()<br> `POST /auth/signout` | getTaskById()<br> `GET /tasks/:id`        | createUser()<br> `POST /users`       |
|                                    | createTask()<br> `POST /tasks`            | deleteUser()<br> `DELETE /users/:id` |
|                                    | deleteTask()<br> `DELETE /task/:id`       |                                      |
|                                    | updateTaskStatus()<br> `PATCH /tasks/:id` |                                      |

# lecture/08-Creating a Controller Via CLI

⚠️ Don't forget `cd to nestjs-task-management`

```bash
nest g controller tasks --no-spec
```

# lecture/09-NestJS Providers and Services

## NestJS Providers

- Can be interested into constructors if decorated as an `@Injectable` via **dependency injection**.
- Can be a plain value, a class, sync/async factory etc.
- Providers must be provided to a module for them to be usable.
- Can be exported from a module - and then be available to other module that import it.

## What is a Service?

- Defined as providers. **Not all providers are services.**
- Common concept within software development and are not exclusive NestJS, JavaScript or back-end development.
- Singleton when wrapped with @Injectable() and provided to a module. That means, the same instance will be shared across the application - acting as a single source of truth.
- The main source of business logic. For example, a service will be called from a controller to validate data, create an item into database and return a response.

![Module-Controller2Service](./assets/Module-Controller2Service.png)

## Providers in Modules

![Providers in Modules](./assets/code-providers%20in%20modules.png)

## Dependency injection in NestJS

Any command within the NestJS ecosystem can inject a provider that it decorated with the `@Injectable`.

We define the dependencies in the constructor of the class. NestJS will take care of the injection for us, and it will then be available as a class property.

![DependencyInjectionInNestJS](./assets/code-dependency%20injection%20in%20NestJS.png)

# lecture/10-Creating a Tasks Service | Scalable API | Modern TypeScript | JS |

```bash
nest g service tasks --no-spec
```

# lecture/11-Getting all tasks

> Coding!

# lecture/12-Defining a task model

> Coding!

# lecture/13-Creating a task part 1

> Coding!

# lecture/14-Creating a task part 2

> Coding!

# lecture/15-Data transfer objects `dtos`

## Understanding the problem

> `A data transfer object is an object that carries data between processes`

> `A Data Transfer Object is an object that is used to encapsulate data , and send it from one subsystem of an application to another.`

> `A DTO is an object that defines how the data will be sent over the network.`

## More about dtos

- Common concept in software development that is not specific to NestJS.
- Result in more bulletproof code, as it can be used as a TypeScript type.
- Do not have any behavior except for storage, retrieval, serialization and deserialization of its own data.
- Resolve in increased performance (although negligible in small applications).
- Can be useful for data validation
- A DTO is `NOT` a model definition. Its defines the shapes of data for a specific case, for example - creating a task.
- Can be defined using interface or a class.

## Classes VS Interfaces for DTOs

- Data Transfer Objects `(DTO)` can be defined as class or interface.
- The recommended approach is to use classes, also clearly documented in the NestJS documentation.
- The reason is that interfaces are a part of TypeScript and are not preserved post-compilation.
- Classes allows us to do more, and since they are a part of JavaScript, they will be preserved post-compilation.
- NestJS cannot refer to interfaces in run-time, but can refer to classes.

`TLDR: Classes are the way to go for DTOs.`

## Example DTOs

| CreateShippingDto <br>` POST /shipping` | UpdateShippingAddressDto<br>`PATCH /shipping/:id/address` | createTransitDto <br> `POST /transit` |
| --------------------------------------- | --------------------------------------------------------- | ------------------------------------- |
| orderId: string;                        | streetName: string                                        | deliveryIds: string[];                |
| deliveryAddress: Address;               | houseNumber: number                                       | driverId: string;                     |
| requiresSignature: boolean;             | zipCode: string                                           | vehicleNumber: number                 |
|                                         | city: string                                              | departureTime: UTCDate                |
|                                         | country: string                                           |

## Important note!

- Data Transfer Objects are **NOT** mandatory.
- You can still develop application without using DTOs.
- However, the value they add makes it worthwhile to use them when applicable.
- Applying the DTO pattern as soon as possible will make it easy for you maintain and refactor your code.

# lecture/16-creating CreateTaskDto

# lecture/17-getting-a-task-by-id

# lecture/18-challenge-deleting-a-task

## Challenge time!

> Deleting a Task

## Deleting a Task

- Incoming DELETE **HTTP** request
- The URL will contain the ID of the task to be deleted.
- Handle the request - extract the ID and delete the task

```URL
**DELETE** http://localhost:3000/task/cc4e4319-0cde-4280-a1dc-d9e197f5ab91
```

# lecture/20-challenge-updating-a-task's status

## Challenge time!

> Updating a Task's Status

## Updating a Task's Status

- Incoming **PATCH** HTTP request
- The URL will contain the ID of the task to be updated.
- The request body will contain the new status.
- Handle the request - extract the ID and the status, and update the task's status.

## `PATCH` best practice

- Refer to the resource in the URL;
- Refer to a specific item by ID;
- Provide the required parameters in the `request body`.

```API
`PATCH` http://localhost:3000/tasks/325d9273-53e1-4a1d-a960-101664328696
```

# lecture/21-solution-updating-a-task-status

# 22-feature-searching-and-filtering-tasks
