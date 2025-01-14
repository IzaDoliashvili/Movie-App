import ReactDOM from "react-dom/client";
import "./index.css"; 
import { Provider } from "react-redux";
import { store } from "./store/movieSlice/index"; 
import axios from "axios";
import App from "./App";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${import.meta.env.VITE_ACCESS_TOKEN}`;

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
