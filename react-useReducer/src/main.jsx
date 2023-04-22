import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ShopProvider from "./context/ShopProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ShopProvider>
    <App />
  </ShopProvider>
);
