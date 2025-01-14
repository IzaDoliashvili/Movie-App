import { supabase } from "../../../supabase";
import { userAtom } from "../../../store/auth";
import { getProfileInfo } from "../../../supabase/account";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export type UserProfile = {
  username: string;
  full_name_ka: string;
  full_name_en: string;
};

const ProfilePage = () => {
  const user = useAtomValue(userAtom);
  const setUser = useSetAtom(userAtom); 
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      getProfileInfo(user.user.id)
        .then((data) => setProfile(data))
        .catch((error) => console.error("Failed to fetch profile:", error));
    }
  }, [user]);

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

  if (!user) {
    return <div>{t("You need to log in to view this page.")}</div>;
  }
  console.log("profile:",profile);
  console.log("user:", user);
  
  

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">{t("Profile Information")}</h2>
        {profile ? (
          <div className="space-y-4">
            <p>
              <strong>{t("Username")}: </strong> {profile.username}
            </p>
            <p>
              <strong>{t("Full Name (EN)")}: </strong> {profile.full_name_en}
            </p>
            <p>
              <strong>{t("Full Name (KA)")}: </strong> {profile.full_name_ka}
            </p>
            <button
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              onClick={() => navigate("/user/profile/edit")}
            >
              {t("Edit Profile")}
            </button>
            <button
              className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-300"
              onClick={handleLogout}
            >
              {t("Logout")}
            </button>
          </div>
        ) : (
          <p>{t("Loading profile information...")}</p>
        )}
      </div>
    </div>
  );
};


export default ProfilePage;
