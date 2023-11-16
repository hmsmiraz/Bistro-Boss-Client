import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { _id, name, recipe, image, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure(); 
  const handleAddToCart = (food) => {
    // console.log(food, user.email);
    if (user && user.email) {
      // send item to database
      console.log(food, user.email);
      const cartItem = {
        foodId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      console.log(cartItem);
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`${name} added to cart successfully`, {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      });
    } else {
      Swal.fire({
        title: "You aren't login",
        text: "DO want to login/register?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login?",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-lg">
      
      <ToastContainer />
      <figure>
        <img src={image} alt="food" className="rounded-lg" />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-5 p-2 rounded-lg mt-2">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-xl text-slate-600">{name}</h2>
        <p className="text-sm text-stone-500">{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn btn-outline rounded-lg border-0 border-b-4 border-orange-400"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
