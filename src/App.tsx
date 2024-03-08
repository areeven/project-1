import Routes from "./routes/Routing";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/navigation/NavigationBar";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">React site</h1>
      <BrowserRouter>
        <NavigationBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
