// src/components/Layout.js
import { CSidebar, CSidebarNav, CNavItem, CHeader, CContainer, CFooter } from '@coreui/react';
import { CIcon } from '@coreui/icons-react';
import { cilHome, cilUser, cilCalendar } from '@coreui/icons';

const Layout = ({ children }) => {
  return (
    <div className="d-flex">
      <CSidebar>
        <CSidebarNav>
          <CNavItem href="/">
            <CIcon icon={cilHome} customClassName="nav-icon" />
            Dashboard
          </CNavItem>
          <CNavItem href="/members">
            <CIcon icon={cilUser} customClassName="nav-icon" />
            Members
          </CNavItem>
          <CNavItem href="/classes">
            <CIcon icon={cilCalendar} customClassName="nav-icon" />
            Classes
          </CNavItem>
        </CSidebarNav>
      </CSidebar>
      <div className="wrapper flex-grow-1">
        <CHeader>
          <h2>Gym Management Dashboard</h2>
        </CHeader>
        <CContainer>{children}</CContainer>
        <CFooter>
          <div>Gym Management System - &copy; 2024</div>
        </CFooter>
      </div>
    </div>
  );
};

export default Layout;
