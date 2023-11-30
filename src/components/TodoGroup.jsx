import "../App.css";
import Input from "./Input";
import Todo from "./Todo";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";


function TodoGroup({ group, createUserTodoGroupTodos, fetchUserTodoGroupTodos }) {
  const [todos, setTodos] = useState(group.notes);


  useEffect(() => {
    fetchUserTodoGroupTodos(group.id, setTodos)
  }, []);

  
  // Handle todos
  const createTodo = async (todo) => {
    try {
      await createUserTodoGroupTodos(group.id, todo, setTodos)
    }
    catch (e) {
      console.error(e)
    }
  }

  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleRemoveAll = () => {
    setTodos([]);
  };


  return (
    <div className="container rounded shadow-md shadow-slate-700 bg-slate-800 text-white w-full sm:w-1/2 md:w-1/3 lg:w-1/5">
      {/* Header */}
      <div className="text-center w-2/5 mx-auto mt-2">
        <h1>{group.name}</h1>
      </div>

      <div className="container w-11/12 mx-auto">

        {/* Input Todo */}
        <Input addHandler={createTodo}/>

        {/* Todos */}
        <ul className="mt-4 mx-auto w-full">
          {todos.length ? (
            todos.map((todo, index) => (
              <Todo key={index} todo={todo} removeTodo={removeTodo} />
            ))
          ) : (
            <p></p>
          )}
        </ul>

        {/* Remove ALL Button */}
        <button className="my-4" onClick={handleRemoveAll}>
          Remove All
        </button>
      </div>
    </div>
  );
}

TodoGroup.propTypes = {
  group: PropTypes.object.isRequired,
};

export default TodoGroup;
