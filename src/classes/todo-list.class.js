export class TodoList {
  constructor() {
    this.todos = [];
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => {
      return todo.id != id;
    });
  }

  toogleTodo(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        break;
      }
    }
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => {
      return !todo.completado;
    });
  }
}
