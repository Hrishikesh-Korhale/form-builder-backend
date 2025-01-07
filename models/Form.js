const mongoose = require('mongoose');

const InputSchema = new mongoose.Schema({
  type: { type: String, required: true }, // Input type (text, email, etc.)
  title: { type: String, required: true }, // Label/title for the input
  placeholder: { type: String, required: true },
});

const FormSchema = new mongoose.Schema({
  title: { type: String, required: true }, // Form title
  inputs: [InputSchema], // Array of inputs
}, { timestamps: true });

module.exports = mongoose.model('Form', FormSchema);
