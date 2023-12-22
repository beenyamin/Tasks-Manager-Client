import { useEffect, useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { Helmet } from "react-helmet-async";
import TodoList from "./TodoList";


const MyAddedTask = () => {

    const {user} = useAuth();
    const [myPosts, setMyPosts] = useState([]);

    useEffect(() => {
        fetch(`https://task-manager-server-beta-ten.vercel.app/myPostedTask?email=${user?.email}`
        , 
        { credentials: 'include' })
            .then(res => res.json())
            .then(data => setMyPosts(data))
    }, [user?.email])


    return (
        <div>
            <Helmet>
                <title>JobTex | My Added Task</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 my-5">
                {
                    myPosts.map(myPost => <TodoList
                        setMyPosts={setMyPosts}
                        myPosts={myPosts}
                        myPost={myPost}
                        key={myPost._id}
                    ></TodoList>)
                }
            </div>
        </div>
    );
};

export default MyAddedTask;