import "../App.css";
import Input from "./Input";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";


function TodoGroup({ group, removeGroup, createUserTodoGroupTodos, fetchUserTodoGroupTodos, removeTodo, removeAllTodosForGroup }) {
  const [todos, setTodos] = useState(group.notes);

  useEffect(() => {
    fetchUserTodoGroupTodos(group.id, setTodos)
  }, [updating]);

  
  // Handle todos
  const createTodo = async (todo) => {
    try {
      await createUserTodoGroupTodos(group.id, todo, setTodos)
    }
    catch (e) {
      console.error(e)
    }
  }

  const handleRemoveTodo = (todoId) => {
    removeTodo(group.id, todoId, setTodos)
  };

  const handleDeleteGroup = () => {
    removeGroup(group.id, setTodos)
  }

  const handleRemoveAllTodosForGroup = () => {
    removeAllTodosForGroup(group.id, setTodos)
  }


  return (
    <div className="container rounded shadow-md shadow-slate-700 bg-slate-800 text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
      {/* Header */}
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="text-center w-2/5 mx-auto mt-2">
          <h1>{group.name}</h1>
        </div>
        {/* Delete Group Button */}
        <button className="bg-red-700 -ml-4 mt-2 w-8 h-8 flex items-center justify-center rounded-full" onClick={handleDeleteGroup}>
          &times;
        </button>
      </div>

      <div className="container w-11/12 mx-auto">

        {/* Input Todo */}
        <Input addHandler={createTodo}/>

        {/* Todos */}
        <ul className="mt-4 mx-auto w-full">
          {todos.length ? (
            todos.map((todo, index) => (
              <Todo key={index} todo={todo} removeTodo={handleRemoveTodo} />
            ))
          ) : (
            <p></p>
          )}
        </ul>

        {/* Remove ALL Button */}
        <button className="my-4" onClick={handleRemoveAllTodosForGroup}>
          Remove All
        </button>
      </div>
    </div>
  );
}

TodoGroup.propTypes = {
  group: PropTypes.object.isRequired,
  createUserTodoGroupTodos: PropTypes.func.isRequired,
  fetchUserTodoGroupTodos: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoGroup;
