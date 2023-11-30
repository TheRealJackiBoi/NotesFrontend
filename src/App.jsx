import "./App.css";
import Login from "./components/auth/Login";
import TodoGroup from "./components/TodoGroup";
import CreateTodoGroupModal from "./components/CreateTodoGroupModal";
import { useEffect, useState } from "react";
import {getUserTodoGroups, createUserTodoGroups, removeUserTodoGroup} from "./api/services/TodoGroup"
import { getUserTodoGroupsTodos, createUserTodoGroupsTodos, removeUserTodoGroupTodo } from "./api/services/Todo"

function App() {
  const [groups, setGroups] = useState([]);
  const [user, setUser] = useState(null);

  const [showModal, setShowModal] = useState(false);


  useEffect(() => {

    if (user) {
      fetchUserNoteGroups(user.user_email, user.token)
    }

  }, [user]);


  const handleCloseModal = () => {
    setShowModal(false);
  };


  // USER
  const handleSetUser = (user) => {
    setUser(user);
  };


  // GROUPS
  const fetchUserNoteGroups = async (userEmail, userToken) => {
    try {
      const noteGroups = await getUserTodoGroups(userEmail, userToken)
      console.log(noteGroups)
      if (await noteGroups) {
        console.log(noteGroups)
        setGroups(noteGroups)
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  const createTodoGroup = async (todoGroupName) => {
    try {
      const newTodoGroup = await createUserTodoGroups(user.user_email, user.token, {name: todoGroupName})
      if (await newTodoGroup) {
        setGroups([...groups, newTodoGroup])
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  const removeGroup = async (groupId) => {
    try {
      const removedGroup = await removeUserTodoGroup(user.user_email, user.token, groupId)
      if (await removedGroup) {
        setGroups(groups.filter(group => group.id !== groupId))
      }
    }
    catch (e) {
      console.error(e)
    }
  }


  // TODOS
  const fetchUserTodoGroupTodos = async (todoGroupId, callbackSetTodos) => {
    try {
      const todos = await getUserTodoGroupsTodos(user.user_email, user.token, todoGroupId)
      if (await todos) {
        callbackSetTodos(todos) 
      }
    }
      catch (e) {
        console.error(e)
      }
    }
  
  const createUserTodoGroupTodos = async (todoGroupId, todo, callbackSetTodos) => {
    try {
      const newTodo = await createUserTodoGroupsTodos(user.user_email, user.token, todoGroupId, todo)
      if (await newTodo) {
        callbackSetTodos(prevTodos => [...prevTodos, newTodo]) 
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  const removeTodo = async (todoGroupId, todoId, callbackSetTodos) => {
    try {
      const removedTodo = await removeUserTodoGroupTodo(user.user_email, user.token, todoGroupId, todoId)
      if (await removedTodo) {
        callbackSetTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId)) 
      }
    }
    catch (e) {
      console.error(e)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {user == null ? (
        <Login handleSetUser={handleSetUser} />
      ) : (
        <div className="mx-auto p-4">
          <h1 className="text-center my-8 text-4xl">Todos</h1>
          <CreateTodoGroupModal showModal={showModal} closeModal={handleCloseModal} createTodoGroup={createTodoGroup} />
          <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setShowModal(true)}>Create Todo Group</button>
          </div>
          <div className="flex mx-auto my-8 px-4 sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 justify-between flex-wrap gap-8">
            {groups.map((group, index) => (
              <TodoGroup  key={index} 
                          group={group} 
                          removeGroup={removeGroup}
                          createUserTodoGroupTodos={createUserTodoGroupTodos} 
                          fetchUserTodoGroupTodos={fetchUserTodoGroupTodos}
                          removeTodo={removeTodo} 
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
