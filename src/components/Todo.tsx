// src/components/Todo.tsx
import React, { useState } from 'react';

interface TodoProps {
  id: number;
  title: string;
  onEdit: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ id, title, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleSave = () => {
    onEdit(id, newTitle);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between p-2 border-b">
      {isEditing ? (
        <input
          className="border rounded px-2 py-1 flex-1"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span className="flex-1">{title}</span>
      )}
      <div className="flex space-x-2">
        {isEditing ? (
          <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        )}
        <button className="bg-red-500 text-white px-2 py-1 rounded" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todo;
