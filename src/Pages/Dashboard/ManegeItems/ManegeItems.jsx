import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import useMenu from "../../../Hooks/useMenu";

const ManegeItems = () => {
  const [menu, loading] = useMenu();
  const handleUpdate = (item) =>{

  };
  const handleDelete = (item) =>{

  }
  return (
    <div>
      <SharedTitle
        heading={"Manage All Items"}
        subHeading={"Hurry Up"}
      ></SharedTitle>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, index) => (
                <tr key={item._id}>
                  <td>{index + 1}</td>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => handleUpdate(item)}
                     className="btn btn-accent rounded-md text-white">
                      <FaEdit />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item)}
                     className="btn btn-error rounded-md text-white">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManegeItems;
