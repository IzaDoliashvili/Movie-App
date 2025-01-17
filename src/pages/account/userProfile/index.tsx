import { supabase } from "../../../supabase";
import { userAtom } from "../../../store/auth";
import { getProfileInfo } from "../../../supabase/account";
import { useAtomValue, useSetAtom } from "jotai";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATHS } from "../../../routes/index.enum";
import { Button } from "../../../components/ui/button";

export type UserProfile = {
  username: string;
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
            <Button
              type="submit"
              variant="destructive"
              size="default"
              onClick={() => navigate(ROUTE_PATHS.USERS_PROFILE_EDIT)}
             >
              {t("Edit Profile")}
            </Button>
            
            <Button
              type="submit"
              variant="default"
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
