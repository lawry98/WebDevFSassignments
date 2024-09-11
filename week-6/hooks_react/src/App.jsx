import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [id, setId] = useState(1);

  return (
    <div>
      <button onClick={() => setId(1)}>1</button>
      <button onClick={() => setId(2)}>2</button>
      <button onClick={() => setId(3)}>3</button>
      <button onClick={() => setId(4)}>4</button>
      <TodoId id={id} />
    </div>
  );
}

function TodoId({ id }) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    axios.get(`https://dummyjson.com/todos/${id}`).then((res) => {
      setTodo(res.data);
      console.log(res.data);
    });
  }, [id]);

  if (!todo) return <div>Loading...</div>;

  return (
    <>
      <div>{todo.id}</div>
      <div>{todo.todo}</div>
    </>
  );
}

export default App;
