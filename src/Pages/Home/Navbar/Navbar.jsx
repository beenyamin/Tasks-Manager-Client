import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { AiOutlineUserAdd } from "react-icons/ai";


const Navbar = () => {

    const { user, logOut } = useAuth()

    const navLink = <>

        <li><NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#14a077]" : ""}>Home
        </NavLink> </li>

        <li><NavLink to="/dashboard" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#14a077]" : ""}>Dashboard
        </NavLink> </li>

        <li><NavLink to="/tasks" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? " text-[#14a077]" : ""}>Tasks
        </NavLink> </li>

       

    </>
    return (
        <div className="navbar bg-base-200 py-5 lg:px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <Link to="/">
                    {/* <img src={logo} alt="" /> */}
                </Link>

            </div>
            <div className="navbar-center md:block hidden ">
                <ul className="flex gap-5 text-lg font-semibold ">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user?.email ?

                        <div className="dropdown  dropdown-end">
                            <label tabIndex={0} className="btn border-[#14a077]  btn-ghost btn-circle avatar ">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>{user.displayName}</a></li>
                                <li><a>{user.email}</a></li>
                                {/* <li><a onClick={handelLogout}>Logout</a></li> */}
                            </ul>
                        </div>

                        :
                        <Link to="login">
                            <button className="btn bg-white border rounded-full  border-[#14a077] hover:bg-[#14a077] hover:text-white  ">
                                <div className="text-2xl">
                                    <AiOutlineUserAdd />
                                </div>
                                Login</button>
                        </Link>


                }


            </div>
        </div>
    );
};

export default Navbar;