import { useAtomValue,  } from "jotai";
import { Link, NavLink,  } from "react-router-dom";
import { FaUser, FaUserCheck } from "react-icons/fa";
import { userAtom } from "../../store/auth";

const UserIcon = () => {
  const user = useAtomValue(userAtom); 
  

  

  return (
    <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center transition-all">
      {!user ? (
        <Link to="/auth/Log-in">
          <FaUser className="text-red-500  hover:text-white w-8 h-8  transition-transform" />
        </Link>
      ) : (
        <>
          <NavLink to="user/profile">
            <FaUserCheck className="text-red-500 hover:text-white w-8 h-8  transition-transform" />
          </NavLink>
        </>
      )}
    </div>
  );
};

export default UserIcon;

