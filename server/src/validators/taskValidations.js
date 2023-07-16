// Implementing Validations middleware for Task requests

// Requering Validation Functions express-validators
const { query, validationResult, body } = require("express-validator");

// Implementing Validation's Array for tasks 
const validations = [
  // Validating Query Params
  query("id")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Task id cannot be empty")
    .isInt({ min: 0 })
    .withMessage("Take should be an Integer"),
  query("status")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("status cannot be empty")
    .isString()
    .withMessage("status should be string")
    .toLowerCase()
    .custom((value) => {
      if (value !== "complete" && value !== "pending") {
        throw new Error(
          "Incorrect Value for status: complete for Completed and pending for Pending"
        );
      }
      return true;
    }),
  query("order")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("order cannot be empty")
    .isString()
    .withMessage("order should be string")
    .toUpperCase()
    .custom((value) => {
      if (value !== "ASC" && value !== "DESC") {
        throw new Error(
          "Incorrect Value for order: ASC for ascending and DESC for Descending"
        );
      }
      return true;
    }),
  query("orderby")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("orderby cannot be empty")
    .isString()
    .withMessage("orderby should be string")
    .custom((value) => {
      if (value !== "status" && value !== "createdAt") {
        throw new Error(
          "Incorrect Value for orderby: 'status' for  ordering by Completion and 'createdAt' for ordering by Date"
        );
      }
      return true;
    }),
    // Validating Body Params
    body("title")
    .optional()
    .notEmpty()
    .withMessage("status cannot be empty")
    .isString()
    .withMessage("status should be string"),
    body("description")
    .optional()
    .notEmpty()
    .withMessage("status cannot be empty")
    .isString()
    .withMessage("status should be string"),
    body("status")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("status cannot be empty")
    .isString()
    .withMessage("status should be string")
    .toLowerCase()
    .custom((value) => {
      if (value !== "complete" && value !== "pending") {
        throw new Error(
          "Incorrect Value for status: complete for Completed and pending for Pending"
        );
      }
      return true;
    }),
];

// Verifying Validation results 
const validateResult = (req, res, next) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      const messages = error.errors.map((e) => e.msg);

      res.status(400).send(messages);
    } else {
      next();
    }
  };
  
  module.exports = { validations, validateResult };