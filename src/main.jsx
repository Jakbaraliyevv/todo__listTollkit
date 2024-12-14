import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import root from "./root";
import { Provider } from "react-redux";
import { store } from "./redux/store";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={root} />
  </Provider>
);
