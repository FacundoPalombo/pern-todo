const router = require("express").Router;
const app = router();
const { db } = require("./db");
// Routes

// Create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await db.query(
      `
    INSERT INTO db-todo (description) VALUES($1) RETURNING *
    `,
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await db.query("SELECT * FROM db-todo");
    res.json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get todo by id

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.query('SELECT * FROM db-todo WHERE id="$1"', [id]);
    req.json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = { routes: app };
