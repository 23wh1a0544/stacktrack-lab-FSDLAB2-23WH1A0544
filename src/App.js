import React from 'react';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Home />

      {<TaskList/>}
    </div>
  );
}

export default App;
