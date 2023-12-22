import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const Task = () => {
    const { user } = useAuth();
    const [myPosts, setMyPosts] = useState([]);
    console.log(user?.email);


      useEffect(() => {
        fetch(`http://localhost:5000/myPostedTask?email=${user?.email}`
        , 
        { credentials: 'include' })
            .then(res => res.json())
            .then(data => setMyPosts(data))
    }, [user?.email])


    console.log(myPosts)



    return (

        <div>
         {myPosts.length}
        </div>
    );
};

export default Task;