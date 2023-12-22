import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Task from "../Pages/Task/Task";
import AddTask from "../Pages/DashBoard/AddTask/AddTask";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import TodoList from "../Pages/DashBoard/Todo/TodoList";
import PrivateRoute from "./PrivateRoute";
import MyAddedTask from "../Pages/DashBoard/Todo/MyAddedTask";
import UpdatePost from "../Pages/DashBoard/UpdatePost/UpdatePost";
import Profile from "../Pages/Profile/Profile";

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
          element:<PrivateRoute><Task></Task></PrivateRoute>
        },
        {
          path: "/profile",
          element:<PrivateRoute><Profile></Profile></PrivateRoute>
        },

    ]
    },

    {path:'/login' , element:<Login></Login>},
    {path:'/signUp' , element:<SignUp></SignUp>},

    {
      path:'dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children:[
       {
         path:'newTask',
         element:<PrivateRoute><AddTask></AddTask></PrivateRoute>,
        
       },
       {
         path:'myPostedTas',
         element:<PrivateRoute><TodoList></TodoList></PrivateRoute>
       },
       {
        path: 'updateTask/:id',
        element: <PrivateRoute><UpdatePost></UpdatePost></PrivateRoute>,
        loader: ({ params }) => fetch(`https://task-manager-server-beta-ten.vercel.app/updateTask/${params.id}`)
      },
       {
         path:'myPostedTask',
         element:<PrivateRoute><MyAddedTask></MyAddedTask> </PrivateRoute>
       },

      ]
   },

    


  ]);

  export default routes ;