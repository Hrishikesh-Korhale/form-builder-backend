# Form Builder API Documentation

## Overview

The **Form Builder API** provides endpoints for managing forms, including viewing, creating, editing, and deleting forms. Below is a summary of the available endpoints and their respective HTTP methods.

## Base URL

https://form-builder-backend-git-master-hrishikesh-korhales-projects.vercel.app

API Endpoints

View All Forms

Endpoint:

GET /api/forms

Description:
Retrieves a list of all forms.

Example Request:

curl -X GET https://form-builder-backend-git-master-hrishikesh-korhales-projects.vercel.app/api/forms

View a Form by ID

Endpoint:

GET /api/forms/:id

Description:
Retrieves the details of a specific form by its ID.

Example Request:

curl -X GET https://form-builder-backend-git-master-hrishikesh-korhales-projects.vercel.app/api/forms/12345

Create a New Form

Endpoint:

POST /api/forms/create

Description:
Creates a new form with the provided data.

Example Request:

curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"name": "New Form", "fields": ["Field1", "Field2"]}' \
  https://form-builder-backend-git-master-hrishikesh-korhales-projects.vercel.app/api/forms/create

Edit a Form by ID

Endpoint:

PUT /api/forms/:id/edit

Description:
Updates the details of an existing form by its ID.

Example Request:

curl -X PUT \
  -H "Content-Type: application/json" \
  -d '{"name": "Updated Form", "fields": ["UpdatedField1", "UpdatedField2"]}' \
  https://form-builder-backend-git-master-hrishikesh-korhales-projects.vercel.app/api/forms/12345/edit

Delete a Form by ID

Endpoint:

DELETE /api/forms/:id

Description:
Deletes a form by its ID.

Example Request:

curl -X DELETE https://form-builder-backend-git-master-hrishikesh-korhales-projects.vercel.app/api/forms/12345

Notes

Replace :id in the endpoints with the actual ID of the form you want to view, edit, or delete.

Ensure that the request body for POST and PUT methods is in JSON format and includes the necessary data fields.
