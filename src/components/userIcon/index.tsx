import { useAtomValue,  } from "jotai";
import { Link, NavLink,  } from "react-router-dom";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { userAtom } from "../../store/auth";
import { ROUTE_PATHS } from "../../routes/index.enum";

const UserIcon = () => {
  const user = useAtomValue(userAtom); 
  

  

  return (
    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all">
      {!user ? (
        <Link to={ROUTE_PATHS.AUTH_LOG_IN}>
          <FaUser className="text-red-500  hover:text-white w-8 h-8  transition-transform" />
        </Link>
      ) : (
        <>
          <NavLink to={ROUTE_PATHS.USERS_PROFILE}>
            <FaUserCheck className="text-red-500 hover:text-white w-8 h-8  transition-transform" />
          </NavLink>
        </>
      )}
    </div>
  );
};

export default UserIcon;

