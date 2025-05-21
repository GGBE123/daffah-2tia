import { MdDashboard } from "react-icons/md";

export default function ListMenu() {
  return (
    <ul id="menu-list" className="space-y-3">
      <li className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 
      hover:bg-green-200 hover:font-extrabold">
        <MdDashboard className="mr-4 text-xl" />
        <span>Dashboard</span>
      </li>
      <li>
        <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 
        hover:bg-green-200 hover:font-extrabold">
          Orders
        </div>
      </li>
      <li>
        <div className="hover:text-hijau flex cursor-pointer items-center rounded-xl p-4 font-medium text-gray-600 
        hover:bg-green-200 hover:font-extrabold">
          Customers
        </div>
      </li>
    </ul>
  );
}
