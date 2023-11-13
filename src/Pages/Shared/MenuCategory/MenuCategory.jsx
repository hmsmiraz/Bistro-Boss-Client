import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pb-10 pt-8">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex items-center justify-center mt-6">
        <button className="btn btn-outline mt-4 rounded-md text-stone-900 border-0 border-b-4">
          ORDER YOUR FAVORITE FOOD
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
