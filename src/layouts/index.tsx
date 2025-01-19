import React from "react";
import  Footer  from "../components/base/Footer";
import Header from "../components/base/Header";
import { PageContainer } from "../components/base/Page-Container";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const useLanguageNavigation = () => {
  const { lang } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const selectedLang = localStorage.getItem("i18nextLng");


  React.useEffect(() => {
    if (selectedLang !== lang) {
      navigate(
        `/${selectedLang}${location.pathname.replace(/(\/ka|\/en)/, "")}${location.search}`,
        { replace: true }
      );
    }
  }, [selectedLang, location.pathname, location.search,lang, navigate]);
};

const DashboardLayout = () => {
  useLanguageNavigation();
  return (
    <>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
    </>
  );
};

export default DashboardLayout;