import "bootstrap/dist/css/bootstrap.min.css";
import ToDoList from "./Components/ToDoList";
import "./Styles/ToDoList.module.css";
import "./Styles/ToDo.module.css";
import "./Styles/App.css";


function App() {
  return <div className="App">
    <ToDoList/>
  </div>;
}

export default App;
