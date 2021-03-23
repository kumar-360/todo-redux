import "./App.css";
import { Provider } from "react-redux";
import Input from "./components/Input";

import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="app-container">
          <Input />
        </div>
      </div>
    </Provider>
  );
}

export default App;
