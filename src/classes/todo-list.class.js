export class TodoList {
  constructor() {
    this.todos = this.cargarLocalStorage() || [];
  }

  nuevoTodo(todo) {
    this.todos.push(todo);
    this.guardarLocalStorage();
  }

  eliminarTodo(id) {
    this.todos = this.todos.filter((todo) => {
      return todo.id != id;
    });
    this.guardarLocalStorage();
  }

  toogleTodo(id) {
    for (const todo of this.todos) {
      if (todo.id == id) {
        todo.completado = !todo.completado;
        break;
      }
    }
    this.guardarLocalStorage();
  }

  eliminarCompletados() {
    this.todos = this.todos.filter((todo) => {
      return !todo.completado;
    });
    this.guardarLocalStorage();
  }

  guardarLocalStorage() {
    const setTodoStorage = JSON.stringify(this.todos);
    localStorage.setItem("todos", setTodoStorage);
  }

  cargarLocalStorage() {
    const getTodosStorageString = localStorage.getItem("todos");
    if (getTodosStorageString) {
      const getTodosStorageObject = JSON.parse(getTodosStorageString);
      return getTodosStorageObject;
    }
  }
}
