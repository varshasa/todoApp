import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';

interface Todo {
  id: number;
  title: string;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string) => void;
  editTodo: (id: number, newTitle: string) => void;
  deleteTodo: (id: number) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const useTodoContext = () => {
  const context = useContext(TodoContext);
  if (!context) throw new Error('useTodoContext must be used within a TodoProvider');
  return context;
};

interface TodoProviderProps {
  children: ReactNode;
}

export const TodoProvider: React.FC<TodoProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title: string) => {
    setTodos([...todos, { id: Date.now(), title }]);
  };

  const editTodo = (id: number, newTitle: string) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo)));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, editTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
