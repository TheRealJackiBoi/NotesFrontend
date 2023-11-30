import PropTypes from "prop-types";

const Todo = ({ todo, removeTodo }) => {
  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <li className="flex justify-between text-white w-full">
      {/* Left side of To-Do */}
      <div className="w-8/12">
        {/* To-Do Content */}
        <p className="text-left">{todo.content}</p>
      </div>

      {/* Remove To-Do */}
      <button className="w-3/12" onClick={handleRemove}>
        x
      </button>
    </li>
  );
};

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default Todo;
