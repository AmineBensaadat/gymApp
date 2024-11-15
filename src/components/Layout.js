import React, { useState } from 'react';

import {
  CContainer,
  CHeader,
  CFooter,
  CSidebar,
  CSidebarNav,
  CNavItem,
  CNavLink,
} from "@coreui/react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";

const Layout = ({ children }) => {
  const [sidebarShow, setSidebarShow] = useState(true); // Local state for sidebar visibility

  return (
    <div>
      <AppSidebar sidebarShow={sidebarShow} setSidebarShow={setSidebarShow} />
      <div className="wrapper d-flex flex-column min-vh-100">
        <AppHeader setSidebarShow={setSidebarShow}  />
        <div className="body flex-grow-1">
          <CContainer className="px-4" lg>
            1234567
          </CContainer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
