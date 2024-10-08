import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      fetch("/users").then(res => res.json()).then(users => {
        setUsers(users);
      }).finally(() => {
        setLoading(false);
      });
    }, 750);
  }, []);

  return (
    <div>
      {
        isLoading ? <h2>Loading...</h2> : users.length ? users.map(({ fullName, age, id }) => {
          return <h2 key={id}>
            <span className='tc_red'>{fullName}</span>,
            whose nickname is
            <span className='tc_green'> {id}</span>, is {age} years old.
          </h2>
        }) : <h2>Users Not Found 404</h2>
      }
    </div >
  );
}

export default App;