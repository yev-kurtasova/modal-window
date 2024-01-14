import { useState } from 'react';
import './App.css';
import ModalWindow from './components/ModalWindow/ModalWindow';

function App() {

  const [modalState, setModalState] = useState(false);
  const [currentId, setCurrentId] = useState('');
  const [data, setData] = useState([
    {
      name: 'Andriy',
      id: "0"
    },
    {
      name: 'Oleg',
      id: "1"
    },
    {
      name: 'Pavlo',
      id: "2"
    },
  ])

  const removeUser = (id) => {
    setCurrentId(id);
    setModalState(true);
  }

  return (
    <div className="app">
      <ModalWindow
        call={modalState}
        currentUserId={currentId}
        onDestroy={() => setModalState(false)} 
        users={data}
        onDeleteUserFromData={setData}
        />
      <button onClick={() => setModalState(true)}>Open Modal</button>

      <ul>
        {data.map(obj => {
          return <li key={obj.id}>
            {obj.name}
            <button onClick={() => removeUser(obj.id)}>X</button>

          </li>
        })}

      </ul>

    </div>
  );
}

export default App;
