// netlify/functions/forms.js
const mongoose = require("mongoose");
const Form = require("../../models/Form"); // Adjust path accordingly

exports.handler = async (event, context) => {
  // Check which HTTP method was called
  if (event.httpMethod === "GET") {
    // Fetching all forms or a single form by ID
    const id = event.queryStringParameters.id;
    try {
      if (id) {
        // Fetch a single form by ID
        const form = await Form.findById(id);
        if (!form) {
          return {
            statusCode: 404,
            body: JSON.stringify({ error: "Form not found" }),
          };
        }
        return {
          statusCode: 200,
          body: JSON.stringify(form),
        };
      } else {
        // Fetch all forms
        const forms = await Form.find();
        return {
          statusCode: 200,
          body: JSON.stringify(forms),
        };
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else if (event.httpMethod === "POST") {
    // Creating a new form
    const { title, inputs } = JSON.parse(event.body);
    try {
      const newForm = new Form({ title, inputs });
      await newForm.save();
      return {
        statusCode: 201,
        body: JSON.stringify(newForm),
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: error.message }),
      };
    }
  } else {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "Method Not Allowed" }),
    };
  }
};
