import React, {useState}from 'react';
import './TodoList.css'

interface ITaskItem {
    id: number;
    name: string;
    isCompleted: boolean;
  }
  

interface IProps {
  data: ITaskItem;
  deleteTask: (id: number) => void;
  edit: (id: number, newName: string) => void;
}

const TodoList: React.FC<IProps> = ({ data, deleteTask, edit }) => {
    const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(data.name);

  const handleSave = () => {
    edit(data.id, editedName);
    setIsEditing(false);
  };

  return (
    <div className="Comp">
        {isEditing ? (
        <div>
            <h1>Edit Your Task</h1>
          <input
            type="text"
            value={editedName}
            onChange={(e) => setEditedName(e.target.value)}
          />
          
          <button onClick={handleSave}>Save</button>
        </div>
        ):(
            <div className='Default'>
      <h2>{data.name}</h2>
      <div>
      <button onClick={() => setIsEditing(true)}>Edit</button>

        <button onClick={() => {
          deleteTask(data.id);
        }}>Delete</button>
      </div>
      </div>
        )}
    </div>
  );
};

export default TodoList;
