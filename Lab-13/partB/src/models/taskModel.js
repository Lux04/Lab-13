const db = require('../database');

class TaskModel {
  static getAll(callback) {
    db.all("SELECT * FROM tasks ORDER BY created_at DESC", callback);
  }

  static getById(id, callback) {
    db.get("SELECT * FROM tasks WHERE id = ?", [id], callback);
  }

  static create(task, callback) {
    const { title, description, status, priority, due_date, labels } = task;
    db.run(
      `INSERT INTO tasks (title, description, status, priority, due_date, labels) 
       VALUES (?, ?, ?, ?, ?, ?)`,
      [title, description, status, priority, due_date, labels],
      function(err) {
        callback(err, { id: this.lastID });
      }
    );
  }

  static update(id, task, callback) {
    const { title, description, status, priority, due_date, labels } = task;
    db.run(
      `UPDATE tasks SET title=?, description=?, status=?, priority=?, due_date=?, labels=?, updated_at=CURRENT_TIMESTAMP 
       WHERE id=?`,
      [title, description, status, priority, due_date, labels, id],
      callback
    );
  }

  static delete(id, callback) {
    db.run("DELETE FROM tasks WHERE id = ?", [id], callback);
  }
}

module.exports = TaskModel;