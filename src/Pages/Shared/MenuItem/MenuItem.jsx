
const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="flex  space-y-4 space-x-4">
      <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px] mr-5" src={image} alt="" />
      <div>
        <h3 className="uppercase font-bold">{name}----------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500 font-semibold text-base">${price}</p>
    </div>
  );
};

export default MenuItem;
