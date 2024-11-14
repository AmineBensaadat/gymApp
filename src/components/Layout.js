// src/components/Layout.js
import {
  CContainer,
  CHeader,
  CFooter,
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import AppSidebar from "./AppSidebar";

const Layout = ({ children }) => {
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100">
        <div className="body flex-grow-1">
          <CContainer className="px-4" lg>
            eeeeeeeeeeeeee
          </CContainer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
