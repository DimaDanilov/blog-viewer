import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { MainPage } from "pages/MainPage";
import { PostPage } from "pages/PostPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "post",
    element: <PostPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
