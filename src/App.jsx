import "./App.css";
import TodoGroup from "./components/TodoGroup";
import { useEffect, useState } from "react";
import Login from "./components/auth/Login";

function App() {
  const [groups, setGroups] = useState([
    {
      id: 1,
      name: "Group 1",
      todos: [
        {
          id: 1,
          content: "Content 1",
          color: "#000000",
          completed: false,
        },
        {
          id: 2,
          content: "Content 2",
          color: "#000000",
          completed: false,
        },
        {
          id: 3,
          content: "Content 3",
          color: "#000000",
          completed: false,
        },
      ],
    },
   {
      id: 2,
      name: "Group 2",
      todos: [
        {
          id: 4,
          content: "Content 4",
          color: "#000000",
          completed: false,
        },
        {
          id: 5,
          content: "Content 5",
          color: "#000000",
          completed: false,
        },
        {
          id: 6,
          content: "Content 6",
          color: "#000000",
          completed: false,
        },
      ],
    },
    {
      id: 3,
      name: "Group 3",
      todos: [
        {
          id: 7,
          content: "Content 7",
          color: "#000000",
          completed: false,
        },
        {
          id: 8,
          content: "Content 8",
          color: "#000000",
          completed: false,
        },
        {
          id: 9,
          content: "Content 9",
          color: "#000000",
          completed: false,
        },
      ],
    }
  ]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO: fetch groups from api using user service
    setGroups[{}];
  }, [user]);

  const handleSetUser = (user) => {
    setUser(user);
  };

  return (
    <div className="">
      {user == null ? (
        <Login handleSetUser={handleSetUser} />
      ) : (
        <div className="">
          <h1 className="text-center my-4 text-4xl">Todos</h1>
          <div className="container mx-auto px-4 sm:w-full md:w-2/3 lg:w-1/2 xl:w-1/2 flex justify-between align-middle flex-wrap gap-2">
            {groups.map((group, index) => (
              <TodoGroup key={index} group={group} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
