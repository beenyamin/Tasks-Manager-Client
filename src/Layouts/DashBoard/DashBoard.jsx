import { Helmet } from "react-helmet-async";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { MdTask } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";




const DashBoard = () => {
    const {user,logOut} = useAuth ()
    return (
        <div className="flex flex-col  sm:flex-row">
            <Helmet>
                <title> Task Manager | DashBoard </title>
            </Helmet>
            {/*  dashboard Side bar */}
            <div className="w-full md:ml-10  md:block sm:w-56 min-h-screen text-slate-100 bg-accent bg-opacity-30">

                <div className="flex bg-slate-200 shadow-2xl mt-4 py-2 pl-4 ml-3 md:ml-3 rounded-md mr-3">
                <label tabIndex={0} className="btn border-[#14a077]  btn-ghost btn-circle avatar ">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                    <h2 className="text-black text-sm font-medium lg:mt-1 mt-4 ml-2">Tasks Management</h2>
                </div>

                <ul className="menu lg:p-3 text-black gap-2 font-semibold">
                    <>
                        <li><NavLink to="/dashboard/newTask"> <BiTask size={20}/> New Tasks</NavLink> </li>
                        <li><NavLink to="/dashboard/myPostedTask"> <FaClipboardList size={20}/>To-do List</NavLink> </li>
                    </>



                    {/* Shared NavLink */}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                    <li><NavLink onClick={logOut} to='/login' > <FontAwesomeIcon icon={faRightFromBracket} />Log Out</NavLink> </li>

                </ul>
            </div>

            {/*dashboard Content  */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default DashBoard;