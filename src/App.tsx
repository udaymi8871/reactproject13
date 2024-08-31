import React, { useState } from 'react';

import './App.css';
import UserData from './component'
import MasterData from './constant'



function App() {
  const [data, setData] = useState<any[]>([])

  return (
    <div>
      <UserData

        data={MasterData}
      />

    </div>
  );
}

export default App;
