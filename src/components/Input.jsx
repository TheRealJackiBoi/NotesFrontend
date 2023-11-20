import { useState } from "react"
import PropTypes from 'prop-types';

const Input = ({ addHandler, getId }) => {
    
    // Default To-Do
    const [newTodo, setNewTodo] = useState({
                                            "content": "",
                                            "color": "",
                                        })
        
    const handleAddTodo = () => {
        if (newTodo.content.trim()) {
            addHandler({"id": getId, ...newTodo})
            setNewTodo({
                "content": "",
                "color": ""
            })
        }
    }

    return <div className="flex justify-between mt-4">
        {/* Content Input */}
        <input className="rounded shadow shadow-black text-slate-800 p-1 w-4/6" type="text" value={newTodo.content} onChange={e => setNewTodo({"content": e.target.value})} />

        {/* Add Content */}
        <button className="rounded shadow shadow-black text-center bg-blue-500 text-white p-1" onClick={handleAddTodo}>Add</button>
    </div>
}

Input.propTypes = {
    addHandler: PropTypes.func.isRequired,
    getId: PropTypes.func.isRequired
  };

  export default Input