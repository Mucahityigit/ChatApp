import { RouterProvider } from "react-router-dom";
import rootes from "./routes/Index";
function App() {
  return <RouterProvider router={rootes}></RouterProvider>;
}

export default App;
