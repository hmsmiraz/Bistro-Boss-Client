import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import useMenu from "../../Hooks/useMenu";
import SharedTitle from "../../Components/SharedTitle/SharedTitle";
import MenuCategory from "../Shared/MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
const Menu = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* main cover */}
      <Cover img={menuImg} title={"Our menu"}></Cover>
      {/* offers section */}
      <SharedTitle
        subHeading={"Don't miss"}
        heading={"Today's Offer"}
      ></SharedTitle>
      <MenuCategory items={offered}></MenuCategory>
      {/* dessert section */}
      <MenuCategory
        items={dessert}
        title={"Dessert"}
        img={dessertImg}
      ></MenuCategory>
      {/* pizaa section */}
      <MenuCategory items={pizza} title={"pizza"} img={pizzaImg}></MenuCategory>
      {/* soup */}
      <MenuCategory items={soup} title={"soup"} img={soupImg}></MenuCategory>
      {/* salad */}
      <MenuCategory items={salad} title={"salas"} img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
