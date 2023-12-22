import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const TodoList = ({ myPost, myPosts, setMyPosts }) => {

  const { task, deadline, priority, description, _id } = myPost || {};

  const handelDelete = id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://task-manager-server-beta-ten.vercel.app/Task/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

              const remaining = myPosts.filter(item => item._id !== id);
              setMyPosts(remaining);


            }
          })

      }
    });

  }





  return (
    <div className="card md:w-96 bg-slate-200 shadow-md text-neutral-content">
      <div className="card-body items-center text-center">
        <div className="text-black ">
          <h2 className="card  text-center"> <span className="font-semibold ">Task:</span> {task}</h2>
          <p><span className="font-semibold">Priority:</span> {priority}</p>
          <p><span className="font-semibold">DeadLine:</span> {deadline}</p>
          <p><span className="font-semibold">Description:</span> {description}</p>
        </div>

        <div className="card-actions justify-end">

          <Link to={`/dashboard/updateTask/${_id}`}>
            <button className="btn text-white bg-teal-400  border-0 rounded-full"><FaEdit></FaEdit></button>
          </Link>
          <button onClick={() => handelDelete(_id)} className="btn text-white bg-rose-500  border-0 rounded-full"><FaTrashAlt ></FaTrashAlt></button>

        </div>
      </div>
    </div>
  );
};

export default TodoList;