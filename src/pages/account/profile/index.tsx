import { Button } from "../../../components/ui/button";
import { ROUTE_PATHS } from "../../../routes/index.enum";
import { userAtom } from "../../../store/auth";
import { fillProfileInfo, getProfileInfo } from "../../../supabase/account";
import { FillProfileInfoPayload } from "@/supabase/account/index.type";
import { useMutation } from "@tanstack/react-query";
import { useAtomValue } from "jotai";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


const EditProfilePage = () => {
    const user = useAtomValue(userAtom);
    const { t } = useTranslation(); 
    const navigate = useNavigate();

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FillProfileInfoPayload>();

    useEffect(() => {
      if (user) {
        getProfileInfo(user.user.id).then((res) => console.log(res));
      }
    }, [user, setValue]);



    const { mutate: handleFillProfileInfo } = useMutation({
      mutationKey: ["fill-profile-info"],
      mutationFn: fillProfileInfo,
      onSuccess: () => {
        alert(t("Profile updated successfully!"));
      },
      onError: () => {
        alert(t("An error occurred while updating the profile."));
      },
    });
  
    const onSubmit = (data: FillProfileInfoPayload) => {
      handleFillProfileInfo({ ...data, id: user?.user?.id });
    };

  
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center mb-6">{t("Edit Profile")}</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-500">{t("Username")}</label>
            <input
              {...register("username", { required: t("Username is required") })}
              className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder={t("Enter your username")}
            />
            {errors.username && <p className="text-red-800 text-sm mt-1">{errors.username.message}</p>}
          </div>
          <Button
            type="submit"
            variant="destructive"
            size="default"
            onClick={() => navigate(ROUTE_PATHS.USERS_PROFILE)}
           
          >
            {t("Save Changes")}
          </Button>

         
        </form>
      </div>
    </div>
    );
  };
  
  export default EditProfilePage;