export class Todo {
  static fromJson({ tarea, id, completado, creado }) {
    const todoTemporal = new Todo(tarea);
    todoTemporal.completado = completado;
    todoTemporal.id = id;
    todoTemporal.creado = creado;

    return todoTemporal;
  }

  constructor(tarea) {
    this.tarea = tarea;

    this.id = new Date().getTime();

    this.completado = false;
    this.creado = new Date();
  }
}
