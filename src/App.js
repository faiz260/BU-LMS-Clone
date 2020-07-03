import React, {useState} from 'react';
import './App.css';
import StudentSignIn from './Components/StudentSignIn'
import Body from './Components/paper'

function App() {

  const [render, setRender] = useState(false);

  const handler = () => {
    setRender(true);
  }
  console.log(render)
 
  return (
    <div className="App">
      {
        render ? <StudentSignIn/>: <Body handler={handler} />
      }
      
    </div>
  );
}

export default App;
