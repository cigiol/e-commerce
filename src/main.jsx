import { createRoot } from "react-dom/client";
import App from "./routing/Router";
import { store } from "@store/store";
import { Provider } from "react-redux";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
