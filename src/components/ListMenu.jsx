import { MdDashboard } from "react-icons/md";
import { NavLink } from "react-router-dom";
export default function ListMenu() {
    const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ?
            "text-hijau bg-green-200 font-extrabold" :
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
    return (
        
    
        <div id="sidebar-menu" className="mt-10">
                <ul id="menu-list" className="space-y-3">
                    <li>
                    <NavLink id="menu-1" to="/" className={menuClass}>
                        <MdDashboard className="mr-4 text-xl" />
                        <span>Dashboard</span>
                    </NavLink>
                    </li>
                    
                    <li>
                        <NavLink id="menu-2" to="/orders" className={menuClass}>
                        Orders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-3" to="/customers" className={menuClass}>
                        Customers
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-2" to="/listousers" className={menuClass}>
                        List Of Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-2" to="/notes" className={menuClass}>
                        Notes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-3" to="/ErrorA" className={menuClass}>
                        Error 400
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-3" to="/ErrorB" className={menuClass}>
                        Error 401
                        </NavLink>
                    </li>
                    <li>
                        <NavLink id="menu-3" to="/ErrorC" className={menuClass}>
                        Error 403
                        </NavLink>
                    </li>
                </ul>
            </div>
    );
}