import {
    createBrowserRouter,
  } from "react-router-dom";
  import "./index.css";
import App from "./App";
import Register from "./features/user/view/Register";
import Login from "./features/user/view/Login";
import MainNotes from "./features/notes/view/MainNotes";
import Notes from "./features/notes/view/Notes";
import SetNote from "./features/notes/view/SetNote";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <div>Not Found</div>,
      children: [
        {
          path: "",
          element: <Register />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "notes",
          element: <MainNotes />,
          errorElement: <div>Notes Not Found</div>,
          children:[
            {
              path: "",
              element: <Notes/>,
            },
            {
              path: "note/:noteId",
              element: <Notes/>,
            },
            {
              path: "new-note",
              element: <SetNote/>,
            },
            {
              path: "view-note/:noteId",
              element: <SetNote/>,
            }
          ]
        }
      ]
    },
  ]);

  export default router;