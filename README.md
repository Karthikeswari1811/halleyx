## Live Demo

Frontend:
 https://karthikeswari1811.github.io/halleyx/

Backend:
https://halleyx-4.onrender.com/

# Workflow Engine

This project is a simple rule-based workflow engine that allows users to define workflows, execute them, and track each step with detailed logs.

A workflow consists of multiple steps such as task, approval, and notification. Each step contains rules that determine the next step based on input data. The system evaluates these rules dynamically during execution and follows the appropriate path.

The application includes a backend built using Node.js and Express, and a simple frontend using HTML, CSS, and JavaScript. Users can trigger workflow execution through the UI or using API tools like Postman.

Key features include:
- Creation and management of workflows
- Rule-based decision engine
- Step-by-step execution flow
- Execution logs with step details, condition evaluation, status, and timestamp
- REST APIs for workflow operations

Example:
An "Expense Approval" workflow checks the amount entered by the user. If the amount is greater than 100, it proceeds to finance notification; otherwise, the workflow ends.

This project demonstrates core concepts of workflow automation, decision-making logic, and backend-frontend integration.
## Live Backend API
https://halleyx-production.up.railway.app

## Test Endpoint
POST https://halleyx-production.up.railway.app/workflows/1/execute

Sample Input:
{
  "amount": 200
}
