import logo from './logo.svg';
import './App.css';
import Login from './components/login';
import Intro from './components/intro';
import Question1 from "./components/questions/question1"
import Question2 from './components/questions/question2';
import Question3 from './components/questions/question3';
import Question4 from './components/questions/question4';
import Question5 from './components/questions/question5';
import Question6 from './components/questions/question6';
import Question7 from './components/questions/question7';
import Question8 from './components/questions/question8';
import Outro from './components/outro';
import { useState } from 'react';
import "./components/questions/questions.css"
function App() {
  const [scene, setScene] = useState("login")
  return (
    <div className='App' >
      {scene == "login" && <Login setScene={setScene}/>}
      {scene == "intro" && <Intro setScene={setScene}/>}
      {scene == "question1" && <Question1 setScene={setScene}/>}
      {scene == "question2" && <Question2 setScene={setScene}/>}
      {scene == "question3" && <Question3 setScene={setScene}/>}
      {scene == "question4" && <Question4 setScene={setScene}/>}
      {scene == "question5" && <Question5 setScene={setScene}/>}
      {scene == "question6" && <Question6 setScene={setScene}/>}
      {scene == "question7" && <Question7 setScene={setScene}/>}
      {scene == "question8" && <Question8 setScene={setScene}/>}
      {scene == "outro" && <Outro/>}
      
    </div>
  );
}

export default App;
