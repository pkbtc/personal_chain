import {NavLink} from "react-router-dom"

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <nav className="flex justify-evenly">
      <div>
        ParaBTC
      </div>
      <div>
        <ul className="flex">
          <li>
            <NavLink to="/chain">Chain</NavLink>
          </li>
          <li>
            <NavLink to="/create-data">Create Data</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
