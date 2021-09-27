import "./styles.css";
import { Todo, TodoList } from "./classes";
import { crearTodoHtml, cargarHTML } from "./js/componentes";

export const todoList = new TodoList();

cargarHTML();
