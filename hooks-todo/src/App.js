import React, { useContext } from 'react';
import { UserContext } from './index';

const App = () => {

  const {name, location} = useContext(UserContext)
  return(
    <div>
      Hey there {name}.
      You're from {location}
    </div>
  )
}

export default App;
