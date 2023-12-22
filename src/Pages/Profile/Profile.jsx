import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";


const Profile = () => {
    const { user } = useAuth()
    console.log(user);
    const handleProfileUpdate = () => {

    }
    return (
        <div>
            <div className='flex justify-center items-center pt-20'>
                <Helmet>
                    <title>Profile</title>
                </Helmet>

                <form onSubmit={handleProfileUpdate}>

                    <div className='bg-white shadow-lg rounded-2xl w-10/12 ml-5'>
                        <img
                            alt='profile'
                            src='https://wallpapercave.com/wp/wp8477946.jpg'
                            className='w-full mb-4 rounded-t-lg h-64'
                        />
                        <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                            <a href='#' className='relative block'>
                                <img
                                    alt='profile'
                                    src={user.photoURL}
                                    className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white '
                                />
                            </a>


                            <p className='mt-2 text-xl font-medium text-gray-800 '>
                                {user?.displayName}
                                {/* User Id: {user.uid}  */}
                            </p>
                            <p className='flex flex-col'>
                                <span className='font-bold text-black '> {user.email}</span>
                            </p>


                            <div className='w-full p-2 mt-4 rounded-lg items-center justify-between'>

                                <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="Name" name="name" defaultValue={user?.displayName} className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">user Id</span>
                                        </label>
                                        <input type="text" placeholder="User Id" name="UserId" defaultValue={user.uid} className="input input-bordered" required />
                                    </div>

                                    <div className="mt-5 ">
                                        <button type="submit" className='bg-[#F43F5E] px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053] block mb-1'>
                                            Update Profile
                                        </button>
                                        <button className='bg-[#F43F5E] px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-[#af4053]'>
                                            Change Password
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </form>


            </div>
        </div>
    );
};

export default Profile;