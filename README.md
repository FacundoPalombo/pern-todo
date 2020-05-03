# Dockerized fullstack app | Classic TODOS

- [Initialization](#initialization)
  - [Startup](#startup)
- [Quick start](quick-start)
  - [Endpoints](#endpoints)
  - [API Reference](#api-reference)
- [About](#about)

## Initialization
### Startup
Clone this repo and **run**
  ```
  docker-compose build && docker-compose up
  ```
#### Database initialization

**Run** the following commands: 
```shell 
$ docker exec -it ${your_docker_postgres_instance_hash} bash

# -$ psql -U $POSTGRES_USER -w $POSTGRES_PASSWORD -d $POSTGRES_DB

db-todo=# CREATE TABLE todo (id SERIAL PRIMARY KEY, description VARCHAR(255));
```

#### PGAdmin initialization

For pgadmin initialization follow the next steps:

1. Open localhost:54105
2. Login with the default credentials setted in docker-compose.yml file as PGADMIN_DEFAULT_EMAIL and PGADMIN_DEFAULT_PASSWORD respectively on pgadmin service
3. Create new server with the following data (if no data provided, left that space as default)
  - General: 
  1. Name = "db-todo"
  2. Connect now = true
  - Connection:
  1. Host / Name address = "db-todo"
  2. Port: 5432
  3. Maintenance database = "db-todo"
  4. Username: $POSTGRES_USER into docker-compose.yml db-todo service.
  5. Password: $POSTGRES_PASSWORD into docker-compose.yml db-todo service.
  6. Save password: true

## Quick start
### API Reference
##### TODO's CRUD:
  - root `/todos`

  - GET: `/todos` - Get all todos
  - GET: `/todos/:id` - Get one todo by id
  - POST: `/todos` - Create new todo
  ```json
  "body": {
    "description": "your description"
  }
  ``` 
  - UPDATE: `/todos/:id` - Update todo
  ```json
  "body": {
    "description": "your description"
  }
  ``` 
  - DELETE: `/todos/:id` - Delete todo
  - GET: `/actuator` - Healthcheck endpoint