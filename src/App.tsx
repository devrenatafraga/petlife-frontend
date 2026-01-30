import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app">
      <header className="app-header">
        <h1>🐾 PetLife</h1>
        <p>Portal de serviços para pets</p>
      </header>
      <main className="app-main">
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>Contador: {count}</button>
        </div>
        <p className="info">Em desenvolvimento...</p>
      </main>
    </div>
  );
}

export default App;
