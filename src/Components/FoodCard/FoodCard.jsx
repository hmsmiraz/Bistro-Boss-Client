const FoodCard = ({item}) => {
    const { name, recipe, image, price } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-lg">
      <figure>
        <img
          src={image}
          alt="food"
          className="rounded-lg"
        />
      </figure>
      <p className="absolute right-0 bg-slate-900 text-white mr-5 p-2 rounded-lg mt-2">${price}</p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title text-xl text-slate-600">{name}</h2>
        <p className="text-sm text-stone-500">{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline rounded-lg border-0 border-b-4 border-orange-400">add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
