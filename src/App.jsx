import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import ViewBucket from "./components/ViewBucket.jsx";
import Codebucket from "./components/Codebucket.jsx";

const route = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/codebucket",
    element: (
      <div>
        <Navbar />
        <Codebucket />
      </div>
    ),
  },
  {
    path: "/codebucket/:id",
    element: (
      <div>
         <Navbar />
        <ViewBucket />
      </div>
    ),
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
