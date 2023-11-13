import { useEffect, useState } from "react";
import SharedTitle from "../../../Components/SharedTitle/SharedTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="my-12">
      <SharedTitle
        subHeading={"Popular Items"}
        heading={"From Our Menu"}
      ></SharedTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {
            menu.map(item => <MenuItem
            key={item._id}
            item={item}></MenuItem>)
        }
      </div>
    </section>
  );
};

export default PopularMenu;
