
import  Footer  from "../components/base/Footer";
import Header from "../components/base/Header";
import { PageContainer } from "../components/base/Page-Container";
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
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