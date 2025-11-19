Library Management API

This API manages employees and branches for an organization.
It allows you to create, read, update, and delete employee and branch records.
It is useful because it keeps all data organized, easy to access, and ready for other apps to connect with.

Run the Project
Creates a .env file

API Examples

Get Employees
GET /api/v1/employees

Create Employee
POST /api/v1/employees
{
  "name": "John",
  "email": "john@example.com",
  "position": "Manager",
  "branchId": 1
}

Local Swagger Docs:

http://localhost:3000/api-docs


Public Docs (GitHub Pages):
https://komalpreetkaur90.github.io/back_end_assignment_2/