const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

let workflows = [
  {
    id: "1",
    name: "Expense Approval",
    steps: [
      {
        id: "1",
        name: "Manager Approval",
        rules: [
          { condition: "data.amount > 100", next_step_id: "2", priority: 1 },
          { condition: "DEFAULT", next_step_id: null, priority: 2 }
        ]
      },
      {
        id: "2",
        name: "Finance Notification",
        rules: [
          { condition: "DEFAULT", next_step_id: null, priority: 1 }
        ]
      }
    ],
    version: 1,
    is_active: true
  }
];

// ✅ CREATE WORKFLOW
app.post('/workflows', (req, res) => {
  const workflow = {
    id: Date.now().toString(),
    name: req.body.name,
    steps: req.body.steps,
    version: 1,
    is_active: true
  };

  workflows.push(workflow);
  res.json(workflow);
});

// ✅ GET WORKFLOWS
app.get('/workflows', (req, res) => {
  res.json(workflows);
});

// ✅ RULE ENGINE
function evaluateCondition(condition, data) {
  try {
    return eval(condition);
  } catch (e) {
    return false;
  }
}

// ✅ EXECUTE WORKFLOW
app.post('/workflows/:id/execute', (req, res) => {
  const workflow = workflows.find(w => w.id === req.params.id);

  if (!workflow) {
    return res.status(404).json({ message: "Workflow not found" });
  }

  let currentStep = workflow.steps[0];
  let logs = [];

  while (currentStep) {
    let sortedRules = currentStep.rules.sort((a, b) => a.priority - b.priority);
    let nextStep = null;

    for (let rule of sortedRules) {
      let result = false;

      if (rule.condition === "DEFAULT") {
        result = true;
      } else {
        result = evaluateCondition(rule.condition, req.body);
      }

      if (result) {
        nextStep = workflow.steps.find(s => s.id === rule.next_step_id);

        logs.push({
          step: currentStep.name,
          condition: rule.condition,
          next_step: nextStep ? nextStep.name : "END",
          status: "completed",
          time: new Date().toLocaleTimeString()
        });

        break;
      }
    }

    currentStep = nextStep;
  }

  res.json({
    message: "Execution Completed",
    logs
  });
});

// ✅ START SERVER
app.listen(3000, () => {
  console.log("Server running on port 3000");
});