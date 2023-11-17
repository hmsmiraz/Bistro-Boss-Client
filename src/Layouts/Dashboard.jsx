import { FaCalendar, FaHome, FaHamburger, FaListUl, FaElementor, FaShoppingCart, FaFunnelDollar, FaStarHalfAlt } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* sidebar */}
      <div className="w-64 min-h-screen bg-emerald-400">
        <ul className="menu p-4">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/paymentHistory"}>
              <FaFunnelDollar />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaStarHalfAlt />
              Add a Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/bookings"}>
              <FaElementor />
              My Bookings
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/menu"}>
              <FaListUl />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/:category"}>
              <FaHamburger />
              Order Food
            </NavLink>
          </li>
        </ul>
      </div>
      {/* content */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
