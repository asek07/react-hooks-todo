import React, { useContext } from 'react';
import { UserContext } from './index';
import { counterReducer } from './reducers/Reducer';

const App = () => {

  const {name, location} = useContext(UserContext)
  const [state, dispatch] = counterReducer();

  const increment = () => {
    dispatch({type: 'add'}); 
  }

  const decrement = () => {
    dispatch({type: 'subtract'})
  }

  const reset = () => {
    dispatch({type: 'reset'});
  }

  return(
    <div>
      <button type="button" onClick={increment}>Increment</button>
      <button type="button" onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <br />
      {state.count}
    </div>
  )
}

export default App;
