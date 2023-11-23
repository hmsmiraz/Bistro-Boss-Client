import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaDollarSign, FaTruck, FaUsers, FaUtensilSpoon } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    }
  });
  const revenue = stats?.revenue;
  const newRevenue = revenue.toFixed(2);
//   console.log(newRevenue)
  return (
    <div>
      <div className="text-center font-bold text-emerald-600 text-3xl">
        <h2>
          <span>Hi, Welcome </span>
          {user?.displayName ? user.displayName : "Back"}
        </h2>
      </div>
      <div className="stats shadow flex justify-end items-center my-4">
        <div className="stat">
          <div className="stat-figure text-secondary text-4xl">
            <FaDollarSign />
          </div>
          <div className="stat-title">Revenue</div>
          <div className="stat-value">{newRevenue}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary text-3xl">
            <FaUsers />
          </div>
          <div className="stat-title">Users</div>
          <div className="stat-value">{stats?.users}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary text-3xl">
            <FaUtensilSpoon />
          </div>
          <div className="stat-title">Products</div>
          <div className="stat-value">{stats?.menuItems}</div>
        </div>
        <div className="stat">
          <div className="stat-figure text-secondary text-3xl">
            <FaTruck />
          </div>
          <div className="stat-title">Orders</div>
          <div className="stat-value">{stats?.orders}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
