import { Todo } from "./todo.class";

export class TodoList {
  constructor() {
    this.cargarLocalStorage();
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
        this.guardarLocalStorage();
        break;
      }
    }
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
    if (localStorage.getItem("todos")) {
      this.todos = JSON.parse(localStorage.getItem("todos"));
    } else {
      this.todos = [];
    }

    this.todos = this.todos.map((obj) => Todo.fromJson(obj));
  }
}
