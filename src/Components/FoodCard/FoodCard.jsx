import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from 'sweetalert2'

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const handleAddToCart = (food) => {
    // console.log(food, user.email);
    if(user && user.email){
      // send item to database
    }
    else{
      Swal.fire({
        title: "You aren't login",
        text: "DO want to login/register?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login?"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login');
        }
      });
    }
  };
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-lg">
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
