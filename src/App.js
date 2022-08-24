import "./App.css";
import { useReducer } from 'react';

const initialState = {
  message: "hi"
};

function reducer (state, action) {
  switch(action.type){
    case "yell":
      return {
        message: `HEY! I JUST SAID ${state.message}`
      };
    case "whisper":
      return {
        message: `excuse me i just sadi ${state.message}`
      };
    
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <> 
      <p>Message: {state.message}</p>
      <button onClick={() => dispatch ({type: "yell"})} >YELL</button>
      <button onClick={() => dispatch ({type: "whisper"})} >whisper</button>
    </>
  );
}

export default App;
