import React, { useEffect } from "react";
import TopNavbar from "../../components/common/TopNavbar";
import LowerNavbar from "../../components/common/LowerNavbar";
import { Outlet, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.getElementById("top-nav-bar").scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <TopNavbar />
      <Outlet />
      <LowerNavbar />
    </div>
  );
};

export default Navbar;
