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
    INSERT INTO todo (description) VALUES($1) RETURNING *
    `,
      [description]
    );
    res.status(200).json(newTodo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Get all todos

app.get("/todos", async (req, res) => {
  try {
    const allTodos = await db.query("SELECT * FROM todo ORDER BY id ASC");
    res.status(200).json(allTodos.rows);
  } catch (error) {
    console.error(error.message);
  }
});

// Get todo by id

app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.query(`SELECT * FROM todo WHERE id = $1`, [id]);
    res.status(200).json(todo.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

// Update todo by id

app.put("/todos/:id", async (req,res) => {
  try {
    const { id } = req.params;
    const { description } = req.body
    const updateTodo = await db.query(`UPDATE todo SET description = $1 WHERE id = $2`,[description, id])
    res.status(200).json({status: "Todo successfully updated", payload: updateTodo.rows[0]})
  } catch (error) {
    res.status(400).json({ status: error, payload: null })
  }
})

// Delete todo by id

app.delete("/todos/:id", async (req,res) => {
  try {
    const { id } = req.params;
    
    const deleteTodo = await db.query(`DELETE FROM todo WHERE id = $1`,[id])
    res.status(200).json({status: `Todo with id=${id} successfully deleted`})
  } catch (error) {
    res.status(400).json({ status: error.message })
  }
})


app.use('/actuator', (req,res) => {
  res.status(200).json({
    status: "up",
    message: "This is the healthcheck endpoint"
  })
})

app.use("*", (req, res) => {
  res.status(404).json({
    message: 'Wrong place'
  });
});

module.exports = { routes: app };
