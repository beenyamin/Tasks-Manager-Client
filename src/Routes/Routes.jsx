import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const routes = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/task",
          element:''
        },
        {
          path: "/contact",
          element:''
        },

    ]
    },

    {path:'login' , element:<Login></Login>},
    {path:'signUp' , element:<SignUp></SignUp>}


  ]);

  export default routes ;