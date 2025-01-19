// import { supabase } from "../../../supabase";
// import { userAtom } from "../../../store/auth";
// import { getProfileInfo } from "../../../supabase/account";
// import { useAtomValue, useSetAtom } from "jotai";
// import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next";
// import { useNavigate } from "react-router-dom";
// import { ROUTE_PATHS } from "../../../routes/index.enum";
// import { Button } from "../../../components/ui/button";
// import { UserProfile } from "../../../types";



// const ProfilePage = () => {
//   const user = useAtomValue(userAtom);
//   const setUser = useSetAtom(userAtom); 
//   const [profile, setProfile] = useState<UserProfile | null>(null);
//   const { t } = useTranslation();
//   const navigate = useNavigate();

 

//   useEffect(() => {
//     if (user) {
//       getProfileInfo(user.user.id)
//         .then((profileData) => {
//           if (profileData) {
//             setProfile(profileData);
//           } else {
//             console.warn("No profile data found.");
//           }
//         })
//         .catch((error) => console.error("Failed to fetch profile:", error));
//     }
//   }, [user]);
    

//   const handleLogout = async () => {
//     try {
//       await supabase.auth.signOut();
//       setUser(null); 
//       alert(t("Successfully logged out!")); 
//       navigate("/"); 
//     } catch (error) {
//       console.error("Error logging out:", error);
//       alert(t("Failed to log out. Please try again.")); 
//     }
//   };

//   if (!user) {
//     return <div>{t("You need to log in to view this page.")}</div>;
//   }
//   console.log("profile:",profile);
//   console.log("user:", user);
  
  

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-6">{t("Profile Information")}</h2>
//         {profile ? (
//           <div className="space-y-4">
//             <p>
//               <strong>{t("Username")}: </strong> {profile.username}
//             </p>
//             <Button
//               type="submit"
//               variant="destructive"
//               size="default"
//               onClick={() => navigate(ROUTE_PATHS.USERS_PROFILE_EDIT)}
//              >
//               {t("Edit Profile")}
//             </Button>
            
//             <Button
//               type="submit"
//               variant="default"
//               onClick={handleLogout}
//             >
//               {t("Logout")}
//             </Button>
//           </div>
//         ) : (
//           <p>{t("Loading profile information...")}</p>
//         )}
//       </div>
//     </div>
//   );
// };


// export default ProfilePage;


import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/index.enum";
import { Button } from "../../../components/ui/button";
import { t } from "i18next"

import { useAtomValue, useSetAtom } from "jotai";
import { userAtom } from "../../../store/auth";
import { supabase } from "../../../supabase";


const ProfilePage = () => {
  const navigate = useNavigate();
  const user = useAtomValue(userAtom);
  const setUser = useSetAtom(userAtom); 

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null); 
      alert(t("Successfully logged out!")); 
      navigate("/"); 
    } catch (error) {
      console.error("Error logging out:", error);
      alert(t("Failed to log out. Please try again.")); 
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">{t("Profile Information")}</h2>
        {user ? (
          <div className="space-y-4">
            <div>
              <label className="block font-medium">{t("Email")}</label>
              <div className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300">
                {user.user.email}
              </div>
            </div>
            <div>
              <label className="block font-medium">{t("ID")}</label>
              <div className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300">
                {user.user.id}
              </div>
            </div>
            <div>
              <label className="block font-medium">{t("Phone")}</label>
              <div className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300">
                {user.user.phone}
              </div>
            </div>

            <Button
              type="button"
              variant="destructive"
              size="default"
              onClick={() => navigate("/"+ROUTE_PATHS.USERS_PROFILE_EDIT)}
            >
              {t("Edit Profile")}
            </Button>

            <Button
              type="button"
              variant="default"
              size="default"
              onClick={handleLogout}
            >
              {t("Logout")}
            </Button>
          </div>
        ) : (
          <p>{t("Loading profile information...")}</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
