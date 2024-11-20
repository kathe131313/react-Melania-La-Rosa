import React from "react";
import NavbarBoot from '../components/NavBarBoot';
import { Link,Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
        <NavbarBoot />
        <Outlet/>
    </>
  )     
}

export default Layout