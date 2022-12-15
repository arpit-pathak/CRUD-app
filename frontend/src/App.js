import "./index.css";
import { Form } from "./components/Form";
import { UserList } from "./components/UserList";
import DarkMode from "./components/DarkMode";
function App() {
  return (
    <div className="h-full dark:bg-black dark:text-white">
      <DarkMode />
      <Form />
      <UserList />
    </div>
  );
}

export default App;
