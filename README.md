# employee-management-resume

# Employee Management System

A full-stack Employee Management application built using Spring Boot, REST APIs, JPA, MySQL, Swagger, and a simple HTML/JavaScript frontend.

## Tech Stack
- Java 17
- Spring Boot
- Spring Data JPA
- MySQL
- Swagger (OpenAPI)
- Maven
- HTML, JavaScript (Fetch API)

## Features
- Create, Read, Update, Delete Employees
- RESTful APIs
- Swagger UI for API documentation and testing
- Global exception handling
- Simple frontend to consume APIs
- MySQL database integration

## Project URLs (Local)
- Frontend: http://localhost:8080/app/index.html
- Swagger UI: http://localhost:8080/app/swagger-ui/index.html
- APIs Base: http://localhost:8080/app/api/employees

## How to Run
1. Clone the repository
```bash
git clone https://github.com/your-username/employee-management.git

2. Create MySQL Database
CREATE DATABASE employee_db;

3. Update application.properties.example with your DB credentials and rename it as application.properties

4. Run the application:
mvn spring-boot:run

5. Open browser:
http://localhost:8080/app/index.html

API Endpoints

GET /app/api/employees

GET /app/api/employees/{id}

POST /app/api/employees

PUT /app/api/employees/{id}

DELETE /app/api/employees/{id}
