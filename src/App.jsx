import "./App.css";
import ToDo from "./components/todo/mainToDo/ToDo";
import { ToDoProvider } from "./contexts/ToDoContext";

function App() {
  return (
    <div>
      <ToDoProvider>
        <ToDo />
      </ToDoProvider>
    </div>
  );
}

export default App;
