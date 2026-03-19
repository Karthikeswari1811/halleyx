# Workflow Engine

## Live Demo

Frontend: https://halleyx-4.onrender.com/ 
Backend API:https://halleyx-production.up.railway.app/

---

## Project Overview

This project is a **rule-based workflow engine** that allows users to define workflows, execute them, and track each step with detailed logs.

A workflow consists of multiple steps such as **task**, **approval**, and **notification**. Each step contains rules that determine the next step based on input data. The system evaluates these rules dynamically during execution and follows the appropriate path.

The application includes:  
- **Backend:** Node.js + Express  
- **Frontend:** HTML, CSS, and JavaScript  

Users can trigger workflow execution through the UI or using API tools like Postman.

---

## Key Features

- Create and manage workflows  
- Rule-based decision engine  
- Step-by-step execution flow  
- Execution logs with step details, condition evaluation, status, and timestamp  
- REST APIs for workflow operations  

---

## Example Workflow

An **Expense Approval** workflow checks the amount entered by the user:  
- If the amount is **greater than 100** → proceeds to Finance Notification  
- Otherwise → workflow ends  

**Sample Input:**
```json
{
  "amount": 200
}
