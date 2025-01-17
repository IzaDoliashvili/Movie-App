import React from "react";
import { Input } from "../../../components/ui/input"
import { Button } from "../../../components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useMutation} from "@tanstack/react-query";
import { login } from "../../../supabase/auth";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ROUTE_PATHS } from "../../../routes/index.enum";

 const LogIn: React.FC = () => {

  const navigate = useNavigate();
  const { t } = useTranslation();

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate: handleLogin } = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: () => navigate("/"),
  });

  const onSubmit = (data: any) => {
    handleLogin({ email: data.email, password: data.password });
  };


  return (
    <div className="flex items-center justify-center min-h-screen">
    <div className="border p-6 rounded-lg shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">{t("Log in to Movie App")}</h2>
      <p className="text-sm text-gray-600 mb-6 text-center">
        {t("Enter your credentials to access your account")}
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="email">{t("Email")}</label>
          <Input
          className=""
            id="email"
            placeholder={t("john@example.com")}
            {...register("email", {
              required: t("Email is required"),
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: t("Invalid email format"),
              },
            })}
          />
          {errors.email && <p className="text-red-800 text-sm">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="password">{t("Password")}</label>
          <Input
            id="password"
            type="password"
            placeholder={t("Enter your password")}
            {...register("password", { required: t("Password is required") })}
          />
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}
        </div>
        <Button
            type="submit"
            variant="destructive"
             size="default"
          >
           {t("Log In")}
          </Button>
      </form>
      <div className="flex justify-between mt-4 text-sm">
        <Link to="/forgot-password" className="text-red-400 hover:underline">
          {t("Forgot password?")}
        </Link>
        <span>{t("Don't have an account?")}</span>
        <Link to={ "/"+ROUTE_PATHS.AUTH_REGISTER} className="text-red-400 hover:underline">
          {t("Sign up")}
        </Link>
      </div>
    </div>
  </div>
  );
};
export default LogIn